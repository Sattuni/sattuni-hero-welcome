import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, CheckCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { cateringFormSchema } from '@/services/validation/schemas';

const CONTACT_US_ENDPOINT = "https://submit-form.com/iDr8mtDk";

const CateringContactMultiStep = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Step 1: Essential Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Step 2: Event Details (Optional)
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [occasion, setOccasion] = useState('');
  const [eventDate, setEventDate] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const step1Errors: Record<string, string> = {};
    
    if (!name.trim()) step1Errors.name = 'Name ist erforderlich';
    if (!email.trim()) step1Errors.email = 'E-Mail ist erforderlich';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) step1Errors.email = 'Ungültige E-Mail';
    if (!phone.trim()) step1Errors.phone = 'Telefonnummer ist erforderlich';
    if (!message.trim()) step1Errors.message = 'Nachricht ist erforderlich';
    
    setErrors(step1Errors);
    return Object.keys(step1Errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep1()) {
      setStep(1);
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      company: company.trim() || undefined,
      address: address.trim() || undefined,
      occasion: occasion || undefined,
      eventDate: eventDate || undefined,
      subject: 'Catering Anfrage',
    };

    try {
      // Validate with schema
      cateringFormSchema.parse(formData);

      const response = await fetch(CONTACT_US_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Netzwerkfehler');

      toast.success('Anfrage erfolgreich gesendet! Wir melden uns bei dir.');
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setCompany('');
      setAddress('');
      setOccasion('');
      setEventDate('');
      setStep(1);
      
    } catch (error: any) {
      console.error('Submission error:', error);
      toast.error('Fehler beim Senden. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = step === 1 ? 50 : 100;

  return (
    <section className="py-12 md:py-16 bg-gradient-subtle scroll-mt-24" id="catering-kontakt">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lass uns dein Event besprechen
          </h2>
          <p className="text-lg text-muted-foreground">
            In 2 Schritten zur Catering-Anfrage
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Schritt {step} von 2</span>
                <span>{progress}% abgeschlossen</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <CardTitle className="text-xl mt-4">
              {step === 1 ? 'Deine Kontaktdaten' : 'Event-Details (Optional)'}
            </CardTitle>
            <CardDescription>
              {step === 1 
                ? 'Wie können wir dich erreichen?' 
                : 'Mehr Infos helfen uns, dich besser zu beraten'}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Dein Name"
                      className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@beispiel.de"
                      className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+49 123 456789"
                      className={`h-12 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Deine Nachricht *</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Wann ist dein Event? Wie viele Gäste? Was schwebt dir vor?"
                      rows={4}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 h-12 text-base font-semibold"
                    >
                      Weiter zu Event-Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      type="submit"
                      variant="outline"
                      disabled={isSubmitting}
                      className="h-12"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Direkt absenden'}
                    </Button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma (optional)</Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Deine Firma"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Anlass (optional)</Label>
                    <Select value={occasion} onValueChange={setOccasion}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Wähle einen Anlass" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hochzeit">Hochzeit</SelectItem>
                        <SelectItem value="geburtstag">Geburtstag</SelectItem>
                        <SelectItem value="firmenfeier">Firmenfeier</SelectItem>
                        <SelectItem value="jubilaeum">Jubiläum</SelectItem>
                        <SelectItem value="meeting">Business Meeting</SelectItem>
                        <SelectItem value="weihnachtsfeier">Weihnachtsfeier</SelectItem>
                        <SelectItem value="sonstiges">Sonstiges</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event-Datum (optional)</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Lieferadresse (optional)</Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Straße, PLZ, Stadt"
                      className="h-12"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="h-12"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Zurück
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-12 text-base font-semibold"
                    >
                      {isSubmitting ? (
                        'Wird gesendet...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Anfrage absenden
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}

              <p className="text-xs text-center text-muted-foreground">
                * Pflichtfelder • Wir melden uns innerhalb von 24h bei dir
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Angebot in 24h • Kostenlos & unverbindlich</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringContactMultiStep;
