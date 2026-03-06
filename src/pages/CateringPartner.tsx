import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { 
  Search, ClipboardList, Salad, Clock, 
  Users, Leaf, Recycle, PackageOpen, 
  UtensilsCrossed, Check,
  Phone, MessageSquare, Vegan, WheatOff,
  MilkOff, ArrowRight, Handshake
} from "lucide-react";

import heroImg from "@/assets/partner/hero-office-buffet.jpg";
import teamImg from "@/assets/partner/team-lunch.jpg";
import sustainableImg from "@/assets/partner/sustainable-catering.jpg";

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
            <img src={teamImg} alt="Team Lunch Catering im Büro" className="w-full h-80 object-cover" />
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
                desc: "Ihr Unternehmen erhält einen festen Preis pro Person und einen persönlichen Ansprechpartner für alle Anfragen.",
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-5">
                Ein klarer Preis für Ihr Unternehmen
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Als Catering Partner einigen wir uns auf einen festen Preis pro Person.
                Dieser bleibt für alle künftigen Bestellungen gleich.
              </p>
              <p className="text-foreground font-medium text-lg mb-4">
                Kein neues Angebot. Einfach Datum, Uhrzeit und Personenanzahl mitteilen.
              </p>
              <p className="text-muted-foreground text-sm">
                Preise können je nach Setup variieren — einmal vereinbart, bleiben sie konsistent.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-10 text-center max-w-xs shadow-sm w-full relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Neukunden-Angebot
                </div>
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase mb-3">
                  Catering Partner Preis
                </p>
                <p className="text-5xl md:text-6xl font-bold text-primary mb-1">25 €</p>
                <p className="text-muted-foreground mb-4">netto pro Person</p>
                <p className="text-xs text-muted-foreground">
                  für Gruppen von <strong className="text-foreground">15–40 Personen</strong>
                </p>
              </div>
            </div>
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
                  { icon: PackageOpen, text: "Take-Away-Boxen für Reste" },
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

      {/* ===== CTA ===== */}
      <section id="partner-cta" className="py-16 md:py-24 bg-secondary/40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Testen Sie das Catering Partner Modell
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Starten Sie mit einem Probe-Catering. Keine Bestellpflicht.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-8">
            {["Kein Menü-Suchen", "Kein Koordinations-Stress", "Ein zuverlässiger Partner"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="xl" variant="hero" asChild>
              <a href="/catering#anfrage">
                Probe-Catering anfragen
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a href="tel:+492113618115" className="gap-2">
                <Phone className="w-4 h-4" />
                0211 36180115
              </a>
            </Button>
          </div>
          <a 
            href="https://wa.me/492113618115?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Catering%20Partner%20Modell." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <MessageSquare className="w-4 h-4" />
            Per WhatsApp schreiben
          </a>
          <div className="mt-4">
            <GoogleReviewBadge variant="default" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CateringPartner;
