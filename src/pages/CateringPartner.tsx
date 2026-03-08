import PageLayout from "@/components/layout/PageLayout";
import PartnerContactForm from "@/components/features/catering/PartnerContactForm";
import { Button } from "@/components/ui/button";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { 
  Search, ClipboardList, Salad, Clock, 
  Users, Leaf, Recycle, PackageOpen, 
  UtensilsCrossed, Check,
  Phone, MessageSquare, Vegan, WheatOff,
  MilkOff, ArrowRight, Handshake
} from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import heroImg from "@/assets/partner/hero-delivery.jpg";
import buffetChafing from "@/assets/partner/buffet-chafing.jpg";
import fingerfoodOffice from "@/assets/partner/fingerfood-office.jpg";
import bowlsBar from "@/assets/partner/bowls-bar.jpg";
import chafingDishes from "@/assets/partner/chafing-dishes.jpg";
import bowlsOffice from "@/assets/partner/bowls-office.jpg";

const solutionImages = [
  { src: buffetChafing, alt: "Warmes Buffet mit Chafing Dishes im Büro" },
  { src: fingerfoodOffice, alt: "Fingerfood Catering im Office" },
  { src: bowlsBar, alt: "Salate und Dips in Porzellanschalen" },
  { src: chafingDishes, alt: "Hauptgerichte im Chafing Dish" },
  { src: bowlsOffice, alt: "Catering Bowls im Meetingraum" },
];

const CateringPartner = () => {
  const scrollToContact = () => {
    const el = document.getElementById("partner-cta");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout
      title="Catering Partner Modell für Unternehmen – Sattuni Düsseldorf"
      description="Workshops, Meetings und Kundenbesuche regelmäßig catern? Mit dem Sattuni Catering Partner Modell wird Firmen-Catering in Düsseldorf einfach und zuverlässig."
      keywords="Firmen Catering Düsseldorf, Catering Partner, Office Catering"
      canonicalUrl="https://sattuni.de/catering/partner"
      mode="catering"
      breadcrumbs={[
        { name: "Catering", href: "/catering" },
        { name: "Partner Modell", href: "/catering/partner", current: true },
      ]}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Office Buffet Catering Düsseldorf" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="text-primary-foreground/70 text-xs md:text-sm font-medium tracking-widest uppercase mb-3">
            Für Unternehmen in Düsseldorf
          </p>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Catering ohne jedes Mal neu zu organisieren
          </h1>
          <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Ein fester Catering-Partner statt ständig neue Angebote. Ab 25€ netto pro Person.
          </p>
          <Button size="xl" variant="hero" onClick={scrollToContact}>
            Probe-Catering anfragen
            <ArrowRight className="w-5 h-5" />
          </Button>
          <div className="mt-6">
            <GoogleReviewBadge variant="hero" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-8">
            Catering bestellen kostet mehr Zeit als nötig
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { icon: Search, text: "Caterer suchen und vergleichen" },
              { icon: ClipboardList, text: "Menüs durchgehen und auswählen" },
              { icon: Salad, text: "Ernährungsbedürfnisse koordinieren" },
              { icon: Clock, text: "Bestellung organisieren" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-card border border-border">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-foreground font-medium text-xs md:text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-12 md:py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-4">
              Ein einfacherer Weg
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4">
              Das <strong className="text-foreground">Sattuni Partner Modell</strong> – für Gruppen von <strong className="text-foreground">15 bis 40 Personen</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Workshops", "Meetings", "Team Lunches", "Kundenbesuche"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs md:text-sm font-medium text-foreground">
                  <Users className="w-3 h-3 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-warm">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent>
                {solutionImages.map(({ src, alt }) => (
                  <CarouselItem key={alt}>
                    <img src={src} alt={alt} className="w-full h-64 md:h-80 object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-10">
            So funktioniert es
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Handshake, title: "Partner werden", desc: "Fester Preis pro Person und ein persönlicher Ansprechpartner." },
              { icon: MessageSquare, title: "Kurze Nachricht", desc: "Workshop – Dienstag – 20 Personen – 12:00. Fertig." },
              { icon: UtensilsCrossed, title: "Wir kümmern uns", desc: "Ausgewogenes Catering mit allem – inkl. aller Ernährungspräferenzen." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 md:p-6 rounded-2xl bg-card border border-border">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-3" />
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER PRICE */}
      <section className="py-12 md:py-20 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-6">
            Einfach bestellen – kein Verhandeln
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8 text-center max-w-sm shadow-sm w-full relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/20">
                Neukunden-Angebot
              </div>
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-4">
                Euer Partner-Preis
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-1">25 €</p>
              <p className="text-muted-foreground mb-5">netto pro Person</p>
              <p className="text-sm text-muted-foreground mb-6">
                Für <strong className="text-foreground">15–40 Personen</strong>
              </p>
              
              <div className="space-y-2.5 text-left">
                {[
                  "Bevorzugte Behandlung bei Anfragen",
                  "Bestellen per kurzer Nachricht",
                  "Abwechslungsreiche Menüs",
                  "Vegan, vegetarisch, halal, glutenfrei inklusive",
                  "Lieferung in Porzellanschalen",
                  "Ein fester Ansprechpartner",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS */}
      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-xs md:text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">
            Vertrauen uns als Catering Partner
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center max-w-3xl mx-auto">
            {[
              { src: "/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png", alt: "WHU" },
              { src: "/lovable-uploads/Leonardo.png", alt: "Leonardo" },
              { src: "/lovable-uploads/da1a1dd5-81c8-4349-83f7-43f66d08e68e.png", alt: "Rockwell Automation" },
              { src: "/lovable-uploads/ranger-deutschland.gif", alt: "Ranger Deutschland" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex items-center justify-center p-3 md:p-5 bg-card border border-border rounded-lg h-16 md:h-20">
                <img src={src} alt={`${alt} - Partner von Sattuni`} className="max-h-8 md:max-h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIETARY + SUSTAINABILITY - Compact */}
      <section className="py-10 md:py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
                Alle Ernährungsbedürfnisse inklusive
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Vegan, label: "Vegetarisch" },
                  { icon: Leaf, label: "Vegan" },
                  { icon: UtensilsCrossed, label: "Halal" },
                  { icon: WheatOff, label: "Glutenfrei" },
                  { icon: MilkOff, label: "Laktosefrei" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
                Nachhaltig
              </h2>
              <div className="space-y-3">
                {[
                  { icon: Recycle, text: "Wiederverwendbare Porzellanschalen" },
                  { icon: PackageOpen, text: "Take-Away-Boxen – nichts wird verschwendet" },
                  { icon: Leaf, text: "Weniger Verpackungsmüll" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WITH FORM */}
      <section id="partner-cta" className="py-12 md:py-20 bg-secondary/40">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-3">
              Testet das Partner Modell
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Schreibt uns – wir melden uns innerhalb von 24h. Unverbindlich.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 md:p-7 shadow-sm">
            <PartnerContactForm />
          </div>

          <div className="flex justify-center mt-6">
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+492113618115" className="gap-2">
                <Phone className="w-4 h-4" />
                0211 36180115
              </a>
            </Button>
          </div>
          <div className="flex justify-center mt-3">
            <GoogleReviewBadge variant="compact" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CateringPartner;
