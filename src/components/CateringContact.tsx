import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Building, Mail, Phone, MapPin, MessageCircle, Calendar, PartyPopper } from "lucide-react";

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
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      occasion: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.address || !formData.occasion || !formData.date) {
      toast({
        title: "Bitte alle Pflichtfelder ausfüllen",
        description: "Name, E-Mail, Adresse, Anlass und Datum sind erforderlich.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Catering-Anfrage gesendet!",
        description: "Wir erstellen dir ein individuelles Angebot und melden uns innerhalb von 24 Stunden.",
        duration: 5000
      });
      
      // Reset form
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
      setIsSubmitting(false);
    }, 1500);
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
    <section id="catering-kontakt" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Catering anfragen
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Erzähl uns von deinem Event – wir erstellen dir ein individuelles Angebot.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-elegant">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="company" className="text-foreground font-medium flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    Firmenname
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
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
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="space-y-3">
                <Label htmlFor="address" className="text-foreground font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Adresse / Veranstaltungsort *
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Straße, PLZ, Stadt"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                  disabled={isSubmitting}
                />
              </div>

              {/* Occasion & Date Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-foreground font-medium flex items-center gap-2">
                    <PartyPopper className="w-4 h-4 text-primary" />
                    Anlass *
                  </Label>
                  <Select value={formData.occasion} onValueChange={handleSelectChange} disabled={isSubmitting}>
                    <SelectTrigger className="h-12 text-lg border-border/50 focus:border-primary">
                      <SelectValue placeholder="Anlass wählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/50">
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion.value} value={occasion.value} className="text-lg">
                          {occasion.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="date" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Datum *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="h-12 text-lg border-border/50 focus:border-primary transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Comment Field */}
              <div className="space-y-3">
                <Label htmlFor="comment" className="text-foreground font-medium flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Weitere Wünsche & Infos
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Anzahl Gäste, besondere Wünsche, Budget, etc."
                  value={formData.comment}
                  onChange={handleInputChange}
                  className="min-h-[120px] text-lg border-border/50 focus:border-primary transition-colors resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full gap-3 shadow-elegant hover:shadow-glow"
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
                      Catering-Anfrage senden
                    </>
                  )}
                </Button>
              </div>

              {/* Note */}
              <div className="text-center text-sm text-muted-foreground pt-4">
                * Pflichtfelder | Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CateringContact;