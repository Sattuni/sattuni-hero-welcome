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
import sustainableImg from "@/assets/partner/sustainable-catering.jpg";
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
      keywords="Firmen Catering Düsseldorf, Catering Partner, Office Catering, Workshop Catering, Meeting Catering"
      canonicalUrl="https://sattuni.de/catering/partner"
      mode="catering"
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Catering", href: "/catering" },
        { name: "Partner Modell", href: "/catering/partner", current: true },
      ]}
    >
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Office Buffet Catering Düsseldorf" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-36 text-center">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4">
            Für Unternehmen in Düsseldorf
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Catering für Unternehmen —<br className="hidden md:block" /> ohne jedes Mal neu zu organisieren
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ein fester Catering-Partner statt ständig neue Angebote.
            Ab 25&nbsp;€ netto pro Person für 15–40 Gäste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="xl" variant="hero" onClick={scrollToContact}>
              Probe-Catering anfragen
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="hero-secondary" className="border-white/30 text-white hover:bg-white/10" onClick={scrollToContact}>
              Catering-Partner werden
            </Button>
          </div>
          <GoogleReviewBadge variant="hero" />
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-10">
            Catering bestellen kostet mehr Zeit als nötig
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Search, text: "Caterer suchen und vergleichen" },
              { icon: ClipboardList, text: "Menüs durchgehen und auswählen" },
              { icon: Salad, text: "Ernährungsbedürfnisse koordinieren" },
              { icon: Clock, text: "Bestellung organisieren und nachverfolgen" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-foreground font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-8 text-sm">
            Dieser Aufwand wiederholt sich bei jedem Workshop, Meeting und Teamevent.
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-5">
              Ein einfacherer Weg, Catering zu organisieren
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Aus der Zusammenarbeit mit Unternehmen haben wir gelernt: Die größte Herausforderung 
              ist nicht das Essen — sondern die Organisation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Deshalb haben wir das <strong className="text-foreground">Sattuni Catering Partner Modell</strong> entwickelt — 
              speziell für Gruppen von <strong className="text-foreground">15 bis 40 Personen</strong>.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Workshops", "Meetings", "Schulungen", "Team Lunches", "Kundenbesuche"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-foreground">
                  <Users className="w-3.5 h-3.5 text-primary" />
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
                    <img src={src} alt={alt} className="w-full h-80 object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-14">
            So funktioniert es
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Partner werden",
                desc: "Euer Unternehmen erhält einen festen Preis pro Person und einen persönlichen Ansprechpartner für alle Anfragen.",
              },
              {
                icon: MessageSquare,
                title: "Kurze Nachricht senden",
                desc: "Workshop \u2013 Dienstag \u2013 20 Personen \u2013 12:00\n\nKeine Men\u00fc-Auswahl. Keine neuen Angebote.",
              },
              {
                icon: UtensilsCrossed,
                title: "Wir kümmern uns um alles",
                desc: "Ausgewogenes Catering mit Vorspeisen, warmen Gerichten und Dessert — inklusive aller Ernährungspräferenzen.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl bg-card border border-border">
                <Icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-medium text-foreground mt-10">
            Eine Nachricht. Ein Partner. Catering organisiert.
          </p>
        </div>
      </section>

      {/* ===== PARTNER PRICE ===== */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-6">
            Kein Verhandeln, kein Rechnen — einfach bestellen
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Wir wissen, wie es in Unternehmen läuft: Das nächste Meeting steht an, 20 Leute kommen, 
              und irgendjemand muss sich ums Essen kümmern. Angebote vergleichen, Menüs abstimmen, 
              Budget klären — das kostet Zeit, die ihr nicht habt.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Deshalb gibt es bei uns als Partner einen <strong className="text-foreground">festen Preis: 25 € netto pro Person</strong>. 
              Immer. Egal ob Dienstags-Workshop oder Freitags-Teamlunch.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kein neues Angebot, keine Rückfragen. Einfach kurz schreiben:
            </p>
            
            <div className="bg-card border border-border rounded-lg p-5 mb-2">
              <p className="text-foreground font-medium text-center italic">
                „Workshop – Dienstag – 20 Personen – 12:00"
              </p>
            </div>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Das reicht. Um alles andere kümmern wir uns.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-10 text-center max-w-sm shadow-sm w-full relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-primary/20">
                Aktuelles Angebot
              </div>
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-5">
                Euer Partner-Preis
              </p>
              <p className="text-6xl md:text-7xl font-bold text-primary mb-2">25 €</p>
              <p className="text-muted-foreground mb-6">netto pro Person</p>
              <p className="text-sm text-muted-foreground mb-8">
                Für <strong className="text-foreground">15–40 Personen</strong> · Meetings, Workshops & Events
              </p>
              
              <div className="space-y-3 text-left">
                {[
                  "Ihr werdet bei Anfragen bevorzugt behandelt",
                  "Bestellen per kurzer Nachricht oder E-Mail",
                  "Abwechslungsreiche Menüs — kein Event schmeckt wie das letzte",
                  "Vegan, vegetarisch, halal, glutenfrei & laktosefrei? Immer mit dabei",
                  "Lieferung in wiederverwendbaren Porzellanschalen",
                  "Take-Away-Boxen für eure Kolleg:innen — nichts wird verschwendet",
                  "Ein fester Ansprechpartner, der euch und euer Team kennt",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-lg font-medium text-foreground">
            Ein Preis. Ein Partner. Null Orga-Aufwand.
          </p>
        </div>
      </section>

      {/* ===== TRUSTED PARTNERS ===== */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-8">
            Vertrauen uns als Catering Partner
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center max-w-3xl mx-auto">
            {[
              { src: "/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png", alt: "WHU Otto Beisheim School of Management" },
              { src: "/lovable-uploads/Leonardo.png", alt: "Leonardo" },
              { src: "/lovable-uploads/da1a1dd5-81c8-4349-83f7-43f66d08e68e.png", alt: "Rockwell Automation" },
              { src: "/lovable-uploads/ranger-deutschland.gif", alt: "Ranger Deutschland" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex items-center justify-center p-4 md:p-6 bg-card border border-border rounded-lg">
                <img src={src} alt={`${alt} - Partner von Sattuni`} className="max-h-12 md:max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIETARY + SUSTAINABILITY ===== */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Dietary */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Alle Ernährungsbedürfnisse inklusive
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Unsere Menüs decken die häufigsten Präferenzen automatisch ab — ohne zusätzlichen Planungsaufwand.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Vegan, label: "Vegetarisch" },
                  { icon: Leaf, label: "Vegan" },
                  { icon: UtensilsCrossed, label: "Halal" },
                  { icon: WheatOff, label: "Glutenfrei" },
                  { icon: MilkOff, label: "Laktosefrei" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Sustainability */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Nachhaltig von Anfang an
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Recycle, text: "Lieferung in wiederverwendbaren Porzellanschalen" },
                  { icon: PackageOpen, text: "Take-Away-Boxen zum Mitnehmen – nichts wird verschwendet" },
                  { icon: Leaf, text: "Weniger Verpackungsmüll und Lebensmittelverschwendung" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-muted-foreground text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA WITH FORM ===== */}
      <section id="partner-cta" className="py-16 md:py-24 bg-secondary/40">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Testet das Catering Partner Modell
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Schreibt uns kurz — wir melden uns innerhalb von 24 Stunden. Unverbindlich.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-6">
              {["Kein Menü-Suchen", "Kein Koordinations-Stress", "Ein zuverlässiger Partner"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <PartnerContactForm />
          </div>

          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+492113618115" className="gap-2">
                  <Phone className="w-4 h-4" />
                  0211 36180115
                </a>
              </Button>
            </div>
            <div className="mt-2">
              <GoogleReviewBadge variant="default" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CateringPartner;
