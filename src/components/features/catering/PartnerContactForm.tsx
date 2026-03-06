import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface PartnerContactFormProps {
  defaultMessage?: string;
}

const PartnerContactForm = ({ defaultMessage = "" }: PartnerContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    comment: defaultMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Bitte füllt Name und E-Mail aus.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Bitte gebt eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-partner-inquiry", {
        body: {
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          comment: formData.comment.trim(),
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Anfrage erfolgreich gesendet!");
    } catch (err) {
      console.error("Partner inquiry error:", err);
      toast.error("Etwas ist schiefgelaufen. Bitte versucht es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Danke für eure Anfrage!</h3>
        <p className="text-muted-foreground">
          Wir melden uns innerhalb von 24 Stunden bei euch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="partner-name">Name *</Label>
          <Input
            id="partner-name"
            placeholder="Euer Name"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            required
            maxLength={100}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="partner-company">Firma</Label>
          <Input
            id="partner-company"
            placeholder="Firmenname"
            value={formData.company}
            onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
            maxLength={200}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="partner-email">E-Mail *</Label>
        <Input
          id="partner-email"
          type="email"
          placeholder="email@firma.de"
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          required
          maxLength={255}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="partner-comment">Nachricht</Label>
        <Textarea
          id="partner-comment"
          placeholder="Erzählt uns kurz, wofür ihr regelmäßig Catering braucht…"
          value={formData.comment}
          onChange={(e) => setFormData((p) => ({ ...p, comment: e.target.value }))}
          maxLength={2000}
          rows={3}
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Wird gesendet…
          </>
        ) : (
          <>
            Anfrage senden
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
};

export default PartnerContactForm;
