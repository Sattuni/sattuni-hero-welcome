import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { supabase } from "@/lib/supabase";
import { z } from "zod";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const contactFormSchema = z.object({
  name: z.string().max(100, "Name darf maximal 100 Zeichen lang sein").optional(),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein").max(255, "E-Mail darf maximal 255 Zeichen lang sein"),
  phone: z.string().max(30, "Telefonnummer darf maximal 30 Zeichen lang sein").optional(),
  message: z.string().min(1, "Nachricht ist erforderlich").max(2000, "Nachricht darf maximal 2000 Zeichen lang sein"),
});

const Contact = () => {
  const isMobile = useMobileDetection();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setFormData({ name: "", email: "", phone: "", message: "" });
      
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
    <section id="kontakt" className="py-8 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header - Compact on mobile */}
        <div className="text-center mb-4 md:mb-12 space-y-1 md:space-y-4">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Schreib uns kurz
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Frage, Bestellung oder Catering – wir melden uns schnell.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-soft">
          <CardContent className={`${isMobile ? 'p-4' : 'p-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2 text-sm">
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
                  className={`h-11 text-base border-border/50 focus:border-primary transition-colors ${validationErrors.email ? 'border-destructive' : ''}`}
                  disabled={isSubmitting}
                  autoComplete="email"
                  required
                />
                {validationErrors.email && (
                  <p className="text-sm text-destructive">{validationErrors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2 text-sm">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Nachricht <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Womit können wir helfen?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`min-h-[100px] text-base border-border/50 focus:border-primary transition-colors resize-none ${validationErrors.message ? 'border-destructive' : ''}`}
                  disabled={isSubmitting}
                  required
                />
                {validationErrors.message && (
                  <p className="text-sm text-destructive">{validationErrors.message}</p>
                )}
              </div>

              {/* Optional Fields - Collapsed on mobile */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2 text-xs md:text-sm">
                    <User className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Optional"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`h-11 text-base border-border/50 focus:border-primary transition-colors ${validationErrors.name ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2 text-xs md:text-sm">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`h-11 text-base border-border/50 focus:border-primary transition-colors ${validationErrors.phone ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                variant="hero"
                size="lg"
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
            </form>
          </CardContent>
        </Card>

        {/* Quick Contact Info - Compact on mobile */}
        <div className="mt-6 md:mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-3xl mx-auto">
            <a href="mailto:info@sattuni.de" className="flex items-center gap-2 p-2 md:p-4 bg-card/60 rounded-xl border border-border/50 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">info@sattuni.de</span>
            </a>
            <a href="tel:021136180115" className="flex items-center gap-2 p-2 md:p-4 bg-card/60 rounded-xl border border-border/50 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">0211 36180115</span>
            </a>
            <div className="flex items-center gap-2 p-2 md:p-4 bg-card/60 rounded-xl border border-border/50 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-foreground">Antwort &lt; 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
