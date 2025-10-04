import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useFormAutoSave } from '@/hooks/useFormAutoSave';
import { useFormTracking } from '@/hooks/useFormTracking';
import { handleFormError, handleFormSuccess } from '@/services/utils/error-handling';
import { cateringFormSchema } from '@/services/validation/schemas';
import { Send, Loader2, User, Mail, Phone, MapPin, Calendar, PartyPopper, MessageSquare, Building2, Sparkles, X, ArrowRight, Users } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { FORM_CONSTANTS } from '@/constants';

const CONTACT_US_ENDPOINT = "https://submit-form.com/iDr8mtDk";

const CateringContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
    occasion: "",
    date: "",
    guestCount: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemoFilling, setIsDemoFilling] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  
  // Enhanced form tracking
  const { trackFieldFocus, trackValidationError, trackSubmission } = useFormTracking({
    formName: 'catering-contact',
    formType: 'catering_inquiry',
    onSubmission: (formData) => {
      console.log('Catering form submitted with enhanced tracking:', formData);
    }
  });

  // Helper functions for analytics
  const calculateEstimatedValue = (data: any): number => {
    let baseValue = 500;
    if (data.company) baseValue += 200;
    if (data.occasion === 'Hochzeit') baseValue += 300;
    if (data.occasion === 'Firmenfeier') baseValue += 150;
    return baseValue;
  };

  const estimateGuestCount = (data: any): number => {
    const comment = data.comment?.toLowerCase() || '';
    const guestMatches = comment.match(/(\d+)\s*(personen|gäste|teilnehmer)/);
    
    if (guestMatches) {
      return parseInt(guestMatches[1]);
    }
    
    const occasionEstimates: Record<string, number> = {
      'Geburtstag': 15,
      'Hochzeit': 50,
      'Firmenfeier': 25,
      'Weihnachtsfeier': 30,
      'Sonstiges': 20
    };
    
    return occasionEstimates[data.occasion] || 20;
  };

  // Auto-save functionality
  const { restoreData, clearSavedData, hasSavedData } = useFormAutoSave({
    key: 'catering-form',
    data: formData,
    enabled: true,
    onRestore: (restoredData) => {
      setFormData(prev => ({ ...prev, ...restoredData }));
    }
  });

  // Validate form data
  const validateForm = () => {
    const result = cateringFormSchema.safeParse({
      ...formData,
      guestCount: undefined,
      budget: undefined,
    });

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setValidationErrors(errors);
      
      // Track validation errors
      Object.keys(errors).forEach(field => {
        trackValidationError(field, errors[field]);
      });
      
      return false;
    }
    
    setValidationErrors({});
    return true;
  };

  // Validate only Step 1 fields
  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name ist erforderlich";
    }
    if (!formData.email || !formData.email.includes('@')) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }
    if (!formData.phone || formData.phone.trim().length < 10) {
      errors.phone = "Telefonnummer ist erforderlich";
    }
    
    setValidationErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach(field => {
        trackValidationError(field, errors[field]);
      });
      return false;
    }
    
    return true;
  };

  // Get form progress percentage
  const getFormProgress = () => {
    if (currentStep === 1) {
      const step1Fields = ['name', 'email', 'phone'];
      const filledStep1 = step1Fields.filter(field => formData[field as keyof typeof formData]);
      return Math.round((filledStep1.length / step1Fields.length) * 50); // Max 50% for step 1
    } else {
      const step1Progress = 50; // Step 1 complete
      const step2Fields = ['address', 'occasion', 'date'];
      const filledStep2 = step2Fields.filter(field => formData[field as keyof typeof formData]);
      return step1Progress + Math.round((filledStep2.length / step2Fields.length) * 50);
    }
  };

  // Handle next step
  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    } else {
      toast({
        title: "Bitte fülle alle Pflichtfelder aus",
        description: "Name, E-Mail und Telefon sind erforderlich.",
        variant: "destructive",
      });
    }
  };

  // Handle previous step
  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  // Auto-restore on mount if saved data exists
  useEffect(() => {
    if (hasSavedData()) {
      restoreData();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Fill demo data for testing
  const fillDemoData = async () => {
    setIsDemoFilling(true);
    
    const demoData = {
      name: "Max Mustermann",
      company: "Musterfirma GmbH",
      email: "max.mustermann@example.com",
      phone: "+49 211 1234567",
      address: "Musterstraße 123, 40210 Düsseldorf",
      occasion: "Firmenfeier",
      date: "2024-12-20",
      guestCount: "30",
      comment: "Wir würden gerne eine Auswahl an vegetarischen und veganen Optionen haben."
    };

    // Simulate typing animation
    setTimeout(() => {
      setFormData(demoData);
      setIsDemoFilling(false);
      setCurrentStep(2); // Move to step 2 after demo fill
      toast({
        title: "Demo-Daten eingefügt",
        description: "Du kannst die Daten nun bearbeiten oder direkt absenden.",
      });
    }, 100);
  };

  // Clear form
  const handleClearForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      occasion: '',
      date: '',
      guestCount: '',
      comment: ''
    });
    setValidationErrors({});
    setCurrentStep(1);
    clearSavedData();
    
    toast({
      title: "Formular zurückgesetzt",
      description: "Alle Felder wurden geleert.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Track validation errors
      Object.keys(validationErrors).forEach(fieldName => {
        trackValidationError(fieldName, validationErrors[fieldName]);
      });
      
      toast({
        variant: "destructive",
        title: "Validierungsfehler",
        description: "Bitte korrigieren Sie die markierten Felder und versuchen Sie es erneut.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      fetch(CONTACT_US_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          
          // Track successful form submission with enhanced data
          trackSubmission({
            ...formData,
            estimatedValue: calculateEstimatedValue(formData),
            guestCount: estimateGuestCount(formData),
            eventType: formData.occasion,
            submissionMethod: 'web_form'
          });
          
          handleFormSuccess(
            "Deine Catering-Anfrage wurde erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei dir.",
            "Anfrage erfolgreich gesendet!"
          );
          
          // Reset form on success
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            address: '',
            occasion: '',
            date: '',
            guestCount: '',
            comment: ''
          });
          setValidationErrors({});
          setCurrentStep(1);
          clearSavedData();
          
          return response.json();
        })
        .catch((err) => {
          console.error(err);
          handleFormError(err, "Catering-Anfrage");
        }).finally(() => {
          setIsSubmitting(false);
        });
  
    } catch (error) {
      handleFormError(error, "Catering-Anfrage");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catering-kontakt" className="py-12 md:py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-full px-2 md:px-4 md:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Catering anfragen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Erzähl uns von deinem Event – wir erstellen dir ein individuelles Angebot
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto shadow-xl border-2 border-primary/10">
          <CardHeader className="space-y-3 pb-6">
            <CardTitle className="text-2xl md:text-3xl font-display text-center">
              Catering-Anfrage
            </CardTitle>
            
            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                currentStep === 1 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-primary/10 text-primary border-primary'
              }`}>
                1
              </div>
              <div className={`h-0.5 w-16 transition-all ${
                currentStep === 2 ? 'bg-primary' : 'bg-muted'
              }`} />
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                currentStep === 2 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-muted text-muted-foreground border-muted'
              }`}>
                2
              </div>
            </div>
            
            {/* Step Title */}
            <div className="text-center pt-2">
              <p className="text-sm font-medium text-primary">
                {currentStep === 1 ? 'Schritt 1: Kontaktdaten' : 'Schritt 2: Event-Details'}
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fortschritt</span>
                <span>{getFormProgress()}%</span>
              </div>
              <Progress value={getFormProgress()} className="h-2" />
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Demo/Reset Buttons */}
              <div className="flex gap-2 justify-end pb-4 border-b">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={fillDemoData}
                  disabled={isDemoFilling || isSubmitting}
                  className="gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Demo
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleClearForm}
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  <X className="w-4 h-4" />
                  Reset
                </Button>
              </div>

              {/* Step 1: Contact Details */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-base">
                      <User className="w-4 h-4" />
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('name')}
                      required
                      className={validationErrors.name ? "border-destructive" : ""}
                    />
                    {validationErrors.name && (
                      <p className="text-sm text-destructive">{validationErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-base">
                      <Mail className="w-4 h-4" />
                      E-Mail <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('email')}
                      required
                      className={validationErrors.email ? "border-destructive" : ""}
                    />
                    {validationErrors.email && (
                      <p className="text-sm text-destructive">{validationErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-base">
                      <Phone className="w-4 h-4" />
                      Telefon <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+49 211 1234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('phone')}
                      required
                      className={validationErrors.phone ? "border-destructive" : ""}
                    />
                    {validationErrors.phone && (
                      <p className="text-sm text-destructive">{validationErrors.phone}</p>
                    )}
                  </div>

                  {/* Message/Comment */}
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="flex items-center gap-2 text-base">
                      <MessageSquare className="w-4 h-4" />
                      Deine Wünsche & Anmerkungen <span className="text-muted-foreground text-sm">(optional)</span>
                    </Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      placeholder="Teile uns deine Wünsche mit..."
                      value={formData.comment}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('comment')}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Next Button */}
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full gap-2"
                    size="lg"
                    variant="default"
                  >
                    Weiter zu Event-Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Step 2: Event Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-5 duration-300">
                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2 text-base">
                      <MapPin className="w-4 h-4" />
                      Adresse <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Straße, PLZ, Stadt"
                      value={formData.address}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('address')}
                      required
                      className={validationErrors.address ? "border-destructive" : ""}
                    />
                    {validationErrors.address && (
                      <p className="text-sm text-destructive">{validationErrors.address}</p>
                    )}
                  </div>

                  {/* Occasion */}
                  <div className="space-y-2">
                    <Label htmlFor="occasion" className="flex items-center gap-2 text-base">
                      <PartyPopper className="w-4 h-4" />
                      Anlass <span className="text-destructive">*</span>
                    </Label>
                    <Select 
                      name="occasion"
                      value={formData.occasion}
                      onValueChange={(value) => handleSelectChange('occasion', value)}
                      required
                    >
                      <SelectTrigger 
                        id="occasion"
                        className={validationErrors.occasion ? "border-destructive" : ""}
                        onFocus={() => trackFieldFocus('occasion')}
                      >
                        <SelectValue placeholder="Wähle einen Anlass" />
                      </SelectTrigger>
                      <SelectContent>
                        {FORM_CONSTANTS.occasions.map((occasion) => (
                          <SelectItem key={occasion.value} value={occasion.value}>
                            {occasion.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {validationErrors.occasion && (
                      <p className="text-sm text-destructive">{validationErrors.occasion}</p>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="flex items-center gap-2 text-base">
                      <Users className="w-4 h-4" />
                      Anzahl Personen <span className="text-muted-foreground text-sm">(optional)</span>
                    </Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      min="1"
                      placeholder="z.B. 30"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('guestCount')}
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-base">
                      <Calendar className="w-4 h-4" />
                      Datum <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('date')}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={validationErrors.date ? "border-destructive" : ""}
                    />
                    {validationErrors.date && (
                      <p className="text-sm text-destructive">{validationErrors.date}</p>
                    )}
                  </div>

                  {/* Company (optional) */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-base">
                      <Building2 className="w-4 h-4" />
                      Firmenname <span className="text-muted-foreground text-sm">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Musterfirma GmbH"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('company')}
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreviousStep}
                      className="flex-1 gap-2"
                      size="lg"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Zurück
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 gap-2"
                      size="lg"
                      variant="default"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Anfrage senden
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Note about required fields - only show in step 1 */}
              {currentStep === 1 && (
                <div className="text-center text-sm text-muted-foreground pt-2 border-t">
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-destructive">*</span>
                    Pflichtfelder
                  </p>
                  {hasSavedData() && (
                    <p className="text-xs mt-1 text-primary">
                      Deine Daten werden automatisch gespeichert
                    </p>
                  )}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CateringContact;