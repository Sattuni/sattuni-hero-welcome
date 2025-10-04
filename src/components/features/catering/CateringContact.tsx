import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFormAutoSave } from '@/hooks/useFormAutoSave';
import { useFormTracking } from '@/hooks/useFormTracking';
import { handleFormError, handleFormSuccess } from '@/services/utils/error-handling';
import { cateringFormSchema } from '@/services/validation/schemas';
import { Building, Calendar, CheckCircle, Mail, MapPin, MessageCircle, PartyPopper, Phone, RotateCcw, Send, User, Wand2 } from "lucide-react";
import React, { useEffect, useState } from 'react';

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
    date: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFillingDemo, setIsFillingDemo] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
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
    // Simple estimation based on occasion and company presence
    let baseValue = 500; // Base catering value
    
    if (data.company) baseValue += 200; // Corporate events typically higher value
    if (data.occasion === 'Hochzeit') baseValue += 300; // Weddings are premium
    if (data.occasion === 'Firmenfeier') baseValue += 150; // Corporate events
    
    return baseValue;
  };

  const estimateGuestCount = (data: any): number => {
    // Extract guest count from comment if mentioned, otherwise estimate
    const comment = data.comment?.toLowerCase() || '';
    const guestMatches = comment.match(/(\d+)\s*(personen|gäste|teilnehmer)/);
    
    if (guestMatches) {
      return parseInt(guestMatches[1]);
    }
    
    // Default estimates based on occasion
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

  // Form validation
  const validateForm = (): boolean => {
    const result = cateringFormSchema.safeParse(formData);
    
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        const fieldName = issue.path[0] as string;
        errors[fieldName] = issue.message;
      });
      setValidationErrors(errors);
      return false;
    }
    
    setValidationErrors({});
    return true;
  };

  // const submitCateringForm = (e) =>{
  //   e.preventDefault();
    
  //   // const data = {name:form.name, email:form.email, message:form.textArea};
  //   // setLoaderVisible(true);
  //   fetch(CONTACT_US_ENDPOINT, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         throw new Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setIsSubmitting(false);
  //     });
  // }
  // Calculate form completion progress
  const getFormProgress = () => {
    const requiredFields = ['name', 'email', 'address', 'occasion', 'date'];
    const optionalFields = ['company', 'phone', 'comment'];
    
    const requiredComplete = requiredFields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'string' ? value.trim() : !!value;
    }).length;
    
    const optionalComplete = optionalFields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'string' ? value.trim() : !!value;
    }).length;
    
    const requiredProgress = (requiredComplete / requiredFields.length) * 75; // 75% for required
    const optionalProgress = (optionalComplete / optionalFields.length) * 25; // 25% for optional
    
    return Math.round(requiredProgress + optionalProgress);
  };

  const progress = getFormProgress();

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

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      occasion: value
    }));
    
    // Clear validation error for occasion field
    if (validationErrors.occasion) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.occasion;
        return newErrors;
      });
    }
  };

  // Demo fill function with animation
  const fillDemoData = async () => {
    setIsFillingDemo(true);
    
    const demoData = {
      name: "Max Mustermann",
      company: "Mustermann GmbH",
      email: "max@mustermann-gmbh.de", 
      phone: "+49 211 123456",
      address: "Königsallee 1, 40212 Düsseldorf",
      occasion: "firmenevent",
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      comment: "Wir planen ein Firmenjubiläum für ca. 150 Personen. Buffet-Style wäre perfekt mit vegetarischen und veganen Optionen. Budget: ca. 2.500€"
    };

    // Clear any existing validation errors
    setValidationErrors({});

    // Animate filling each field with delay
    const fields = Object.entries(demoData);
    
    for (let i = 0; i < fields.length; i++) {
      const [key, value] = fields[i];
      
      await new Promise(resolve => {
        setTimeout(() => {
          setFormData(prev => ({
            ...prev,
            [key]: value
          }));
          resolve(void 0);
        }, i * 200); // 200ms delay between each field
      });
    }
    
    setIsFillingDemo(false);
    
    // toast({
    //   title: "Demo-Daten eingefügt! ✨",
    //   description: "Du kannst die Daten jetzt anpassen oder direkt absenden.",
    //   duration: 3000
    // });
  };

  // Clear form and saved data
  const handleClearForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
      occasion: "",
      date: ""
    });
    setValidationErrors({});
    clearSavedData();
    toast({
      title: "Formular zurückgesetzt",
      description: "Alle Eingaben wurden gelöscht.",
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
            "Ihre Catering-Anfrage wurde erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
            "Anfrage erfolgreich gesendet!"
          );
          clearSavedData();
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            address: "",
            comment: "",
            occasion: "",
            date: ""
          });
          setValidationErrors({});
          return response.json();
        })
        .catch((err) => {
          console.error(err);
        }).finally(() => {
          setIsSubmitting(false);
        });
  
    } catch (error) {
      handleFormError(error, "Catering-Anfrage");
      setIsSubmitting(false);
    }

  };

  const occasions = [
    { value: "geburtstag", label: "Geburtstag" },
    { value: "hochzeit", label: "Hochzeit" },
    { value: "office-lunch", label: "Office Lunch" },
    { value: "firmenevent", label: "Firmenevent" },
    { value: "privat", label: "Private Feier" },
    { value: "sonstiges", label: "Sonstiges" }
  ];

  return (
    <section id="catering-kontakt" className="py-12 md:py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-full px-2 md:px-4 md:max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Catering anfragen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Erzähl uns von deinem Event – wir erstellen dir ein individuelles Angebot.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-elegant">
          <CardContent className="p-4 md:p-6 lg:p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Formular ausfüllen</span>
                <div className="flex items-center gap-2">
                  {hasSavedData() && (
                    <span className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded flex items-center gap-1">
                      {/* <Save className="w-3 h-3" />
                      Gespeichert */}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">{progress}%</span>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-warm h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress === 100 && (
                <div className="flex items-center gap-2 mt-2 text-primary animate-fade-in">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Bereit zum Absenden!</span>
                </div>
              )}
            </div>

            {/* Control Buttons */}
            <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-subtle rounded-xl border border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Formular-Aktionen</h4>
                  <p className="text-xs text-muted-foreground">Schnell testen oder zurücksetzen</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={fillDemoData}
                    disabled={isFillingDemo || isSubmitting}
                    className="gap-1.5 md:gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs md:text-sm flex-1 sm:flex-none"
                  >
                    {isFillingDemo ? (
                      <>
                        <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                        <span className="hidden xs:inline">Füllt aus...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-3 h-3" />
                        <span className="hidden xs:inline">Demo</span>
                        <span className="xs:hidden">Demo</span>
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClearForm}
                    disabled={isSubmitting || isFillingDemo}
                    className="gap-1.5 md:gap-2 hover:bg-destructive hover:text-destructive-foreground transition-all duration-300 text-xs md:text-sm flex-1 sm:flex-none"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span className="hidden xs:inline">Zurücksetzen</span>
                    <span className="xs:hidden">Reset</span>
                  </Button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name & Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                    <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => trackFieldFocus('name')}
                    className={`h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary transition-colors ${
                      validationErrors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {validationErrors.name && (
                    <p className="text-red-500 text-sm">{validationErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="company" className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                    <Building className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Firmenname
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="deine@email.de"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => trackFieldFocus('email')}
                    className={`h-12 text-lg border-border/50 focus:border-primary transition-colors ${
                      validationErrors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-sm">{validationErrors.email}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+49 123 456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary transition-colors ${
                      validationErrors.phone ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-xs md:text-sm break-words">{validationErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Address Field */}
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="address" className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  Adresse / Veranstaltungsort *
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Straße, PLZ, Stadt"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary transition-colors ${
                    validationErrors.address ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {validationErrors.address && (
                  <p className="text-red-500 text-xs md:text-sm break-words">{validationErrors.address}</p>
                )}
              </div>

              {/* Occasion & Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-3">
                  <Label className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                    <PartyPopper className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Anlass *
                  </Label>
                  <Select value={formData.occasion} onValueChange={handleSelectChange} disabled={isSubmitting}>
                    <SelectTrigger className={`h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary ${
                      validationErrors.occasion ? 'border-red-500 focus:border-red-500' : ''
                    }`}>
                      <SelectValue placeholder="Anlass wählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/50 max-w-[calc(100vw-2rem)]">
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion.value} value={occasion.value} className="text-sm md:text-base">
                          {occasion.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {validationErrors.occasion && (
                    <p className="text-red-500 text-xs md:text-sm break-words">{validationErrors.occasion}</p>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="date" className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Datum *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`h-10 md:h-12 text-base md:text-lg border-border/50 focus:border-primary transition-colors ${
                      validationErrors.date ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {validationErrors.date && (
                    <p className="text-red-500 text-xs md:text-sm break-words">{validationErrors.date}</p>
                  )}
                </div>
              </div>

              {/* Comment Field */}
              <div className="space-y-2 md:space-y-3">
                <Label htmlFor="comment" className="text-foreground font-medium flex items-center gap-2 text-sm md:text-base">
                  <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  Weitere Wünsche & Infos
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Anzahl Gäste, besondere Wünsche, Budget, etc."
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="min-h-[100px] md:min-h-[120px] text-base md:text-lg border-border/50 focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 md:pt-6">
                <Button 
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full gap-2 md:gap-3 shadow-elegant hover:shadow-glow h-12 md:h-14 text-base md:text-lg"
                  disabled={isSubmitting}
                  // onClick={submitCateringForm}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Catering-Anfrage senden</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Note */}
              <div className="text-center text-xs md:text-sm text-muted-foreground pt-3 md:pt-4 space-y-1 px-2">
                <p className="break-words">* Pflichtfelder | Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot</p>
                <p className="text-[10px] md:text-xs opacity-75 break-words">Ihre Daten werden automatisch gespeichert und bei einem Seitenwechsel wiederhergestellt.</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CateringContact;