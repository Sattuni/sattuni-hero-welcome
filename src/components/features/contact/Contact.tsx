import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { Send, Mail, User, MessageCircle, Phone, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      toast({
        title: t('contact.requiredError'),
        description: t('contact.requiredErrorDesc'),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.successTitle'),
        description: t('contact.successDesc'),
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-soft">
          <CardContent className="p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{t('contact.formProgress')}</span>
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
                  <span className="text-sm font-medium">{t('contact.readyToSubmit')}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field - Required */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  {t('contact.email')} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.placeholders.email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                  disabled={isSubmitting}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Message Field - Required */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  {t('contact.message')} <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.placeholders.message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px] text-lg border-border/50 focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Optional Fields Section */}
              <div className="border-t border-border/30 pt-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('contact.optional')}</h4>
                </div>

                {/* Name Field - Optional */}
                <div className="space-y-3 mb-4">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    {t('contact.name')} <span className="text-xs text-muted-foreground">{t('contact.optionalLabel')}</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('contact.placeholders.name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    autoComplete="name"
                  />
                </div>

                {/* Phone Field - Optional */}
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {t('contact.phone')} <span className="text-xs text-muted-foreground">{t('contact.phoneLabel')}</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t('contact.placeholders.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                    autoComplete="tel"
                  />
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
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.submit')}
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  <span className="text-destructive">*</span> {t('contact.required')}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quick Contact Info */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t('footer.emailLabel')}</div>
                <div className="font-medium text-foreground">{t('footer.email')}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t('footer.phoneLabel')}</div>
                <div className="font-medium text-foreground">0211 36180115</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">{t('contact.responseLabel')}</div>
                <div className="font-medium text-foreground">{t('contact.responseTime')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;