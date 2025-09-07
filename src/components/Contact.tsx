import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, User, MessageCircle, Phone, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Bitte alle Felder ausfüllen",
        description: "Name, E-Mail und Nachricht sind erforderlich.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Danke, wir melden uns bald bei dir!",
        description: "Deine Nachricht ist bei uns angekommen. Wir antworten normalerweise innerhalb von 24 Stunden.",
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Schreib uns kurz
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ob Bestellung, Catering oder einfach eine Frage – wir melden uns schnell zurück.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-soft">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Wie heißt du?"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  E-Mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Nachricht
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Erzähl uns, womit wir dir helfen können..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[120px] text-lg border-border/50 focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full gap-3"
                  disabled={isSubmitting}
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
                <div className="text-sm text-muted-foreground">E-Mail</div>
                <div className="font-medium text-foreground">info@sattuni.de</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Telefon</div>
                <div className="font-medium text-foreground">0211 36180115</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 rounded-xl border border-border/50 shadow-sm">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Antwortzeit</div>
                <div className="font-medium text-foreground">Meist &lt; 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;