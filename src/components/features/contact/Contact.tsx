import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Mail, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

// Validation schema matching the edge function
const contactFormSchema = z.object({
  name: z.string().max(100, "Name darf maximal 100 Zeichen lang sein").optional(),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  phone: z.string().max(30, "Telefonnummer darf maximal 30 Zeichen lang sein").optional(),
  message: z.string().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  // Calculate form completion progress
  const getFormProgress = () => {
    const requiredFields = ['email', 'message'];
    const optionalFields = ['name', 'phone'];
    
    const requiredComplete = requiredFields.filter(field => formData[field as keyof typeof formData].trim()).length;
    const optionalComplete = optionalFields.filter(field => formData[field as keyof typeof formData].trim()).length;
    
    const requiredProgress = (requiredComplete / requiredFields.length) * 70; // 70% for required
    const optionalProgress = (optionalComplete / optionalFields.length) * 30; // 30% for optional
    
    return Math.round(requiredProgress + optionalProgress);
  };

  const progress = getFormProgress();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});

    // Client-side validation
    const validationResult = contactFormSchema.safeParse({
      name: formData.name || undefined,
      email: formData.email,
      phone: formData.phone || undefined,
      message: formData.message,
    });

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0].toString()] = issue.message;
        }
      });
      setValidationErrors(errors);
      setIsSubmitting(false);
      toast({
        title: "Bitte korrigiere die Fehler",
        description: "Einige Felder sind nicht korrekt ausgefüllt.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-inquiry', {
        body: {
          name: formData.name || undefined,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      toast({
        title: "Nachricht gesendet! ✅",
        description: "Wir melden uns innerhalb von 24 Stunden bei dir zurück.",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuche es erneut oder kontaktiere uns direkt per E-Mail.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-10 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Schreib uns kurz
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ob Bestellung, Catering oder einfach eine Frage – wir melden uns schnell zurück.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-soft">
          <CardContent className="p-4 md:p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Formular ausfüllen</span>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-warm h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress === 100 && (
                <div className="flex items-center gap-2 mt-2 text-primary">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Bereit zum Absenden!</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field - Required */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  E-Mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`h-12 text-lg border-border/50 focus:border-primary transition-colors ${validationErrors.email ? 'border-destructive' : ''}`}
                  disabled={isSubmitting}
                  autoComplete="email"
                  required
                />
                {validationErrors.email && (
                  <p className="text-sm text-destructive">{validationErrors.email}</p>
                )}
              </div>

              {/* Message Field - Required */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Nachricht <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Erzähl uns, womit wir dir helfen können..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`min-h-[120px] text-lg border-border/50 focus:border-primary transition-colors resize-none ${validationErrors.message ? 'border-destructive' : ''}`}
                  disabled={isSubmitting}
                  required
                />
                {validationErrors.message && (
                  <p className="text-sm text-destructive">{validationErrors.message}</p>
                )}
              </div>

              {/* Optional Fields Section */}
              <div className="border-t border-border/30 pt-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Optional (hilft uns, besser zu helfen)</h4>
                </div>

                {/* Name Field - Optional */}
                <div className="space-y-3 mb-4">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Name <span className="text-xs text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Wie heißt du?"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`h-12 text-lg border-border/50 focus:border-primary transition-colors ${validationErrors.name ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="name"
                  />
                  {validationErrors.name && (
                    <p className="text-sm text-destructive">{validationErrors.name}</p>
                  )}
                </div>

                {/* Phone Field - Optional */}
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Telefon <span className="text-xs text-muted-foreground">(für Rückrufe)</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+49 xxx xxx xxxx"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`h-12 text-lg border-border/50 focus:border-primary transition-colors ${validationErrors.phone ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="tel"
                  />
                  {validationErrors.phone && (
                    <p className="text-sm text-destructive">{validationErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full gap-3"
                  disabled={isSubmitting || !formData.email || !formData.message}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Absenden
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  <span className="text-destructive">*</span> Pflichtfelder
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quick Contact Info */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-muted-foreground">E-Mail</div>
                <div className="text-sm md:text-base font-medium text-foreground">info@sattuni.de</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-muted-foreground">Telefon</div>
                <div className="text-sm md:text-base font-medium text-foreground">0211 36180115</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-muted rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm text-muted-foreground">Antwortzeit</div>
                <div className="text-sm md:text-base font-medium text-foreground">Meist &lt; 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
