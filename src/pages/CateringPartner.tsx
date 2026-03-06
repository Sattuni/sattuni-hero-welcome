import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import GoogleReviewBadge from "@/components/common/GoogleReviewBadge";
import { 
  Search, ClipboardList, Salad, Clock, 
  Users, Leaf, Recycle, PackageOpen, 
  Send, UtensilsCrossed, Truck, Check,
  Phone, MessageSquare, Vegan, WheatOff,
  MilkOff, ArrowRight
} from "lucide-react";

import heroImg from "@/assets/partner/hero-office-buffet.jpg";
import teamImg from "@/assets/partner/team-lunch.jpg";
import workshopImg from "@/assets/partner/workshop-catering.jpg";
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
      {/* ===== SECTION 1 — HERO ===== */}
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
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed">
            Meetings, Workshops und Kundenbesuche brauchen regelmäßig Catering. 
            Statt jedes Mal Menüs zu suchen und Caterer zu vergleichen, arbeiten Unternehmen 
            mit Sattuni als festem Catering-Partner.
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

      {/* ===== SECTION 2 — THE PROBLEM ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-6">
            Catering bestellen kostet mehr Zeit als nötig
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
            Office Manager und Teamassistenzen verbringen regelmäßig Zeit mit Aufgaben, 
            die sich bei jedem Event wiederholen:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Search, text: "Caterer suchen und vergleichen" },
              { icon: ClipboardList, text: "Menüs durchgehen und auswählen" },
              { icon: Salad, text: "Ernährungsbedürfnisse koordinieren" },
              { icon: Clock, text: "Bestellung organisieren und nachverfolgen" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-foreground font-medium">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-10 text-base">
            Dieser Aufwand wiederholt sich bei jedem Workshop, Meeting und Teamevent.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3 — THE IDEA ===== */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Ein einfacherer Weg, Catering zu organisieren
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Viele unserer Kunden bestellen regelmäßig Catering für Workshops und Meetings. 
              Durch diese Zusammenarbeit haben wir festgestellt: Die größte Herausforderung 
              ist nicht das Essen — sondern die Organisation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Aus dieser Erfahrung haben wir das <strong className="text-foreground">Sattuni Catering Partner Modell</strong> entwickelt.
            </p>
            <p className="text-foreground font-medium text-lg">
              Ein einfacherer Weg für Unternehmen, Catering zu organisieren.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-warm">
            <img src={teamImg} alt="Team Lunch Catering im Büro" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
            So funktioniert das Catering Partner Modell
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
            Drei einfache Schritte statt stundenlanger Organisation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Send,
                title: "Kurze Anfrage senden",
                desc: "Workshop — Dienstag — 25 Personen — 12:00 Uhr",
                note: "Mehr brauchen wir nicht.",
              },
              {
                step: "2",
                icon: UtensilsCrossed,
                title: "Wir stellen das Menü zusammen",
                desc: "Ein ausgewogenes Catering mit Vorspeisen, warmen Gerichten und Dessert — abgestimmt auf Ihr Team.",
                note: null,
              },
              {
                step: "3",
                icon: Truck,
                title: "Wir liefern alles fertig",
                desc: "Ihr Team kann sich auf das Meeting konzentrieren — wir kümmern uns um das Essen.",
                note: null,
              },
            ].map(({ step, icon: Icon, title, desc, note }) => (
              <div key={step} className="relative p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-5">
                  {step}
                </div>
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                {note && (
                  <p className="mt-3 text-xs text-primary font-medium italic">{note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5 — DESIGNED FOR BUSINESS GROUPS ===== */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-warm order-2 md:order-1">
            <img src={workshopImg} alt="Workshop Catering Setup im Schulungsraum" className="w-full h-80 object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Perfekt für kleine Business-Caterings
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Das Modell ist speziell für Gruppen von <strong className="text-foreground">15 bis 40 Personen</strong> konzipiert — 
              die häufigsten Catering-Situationen in Unternehmen.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Workshops", "Meetings", "Schulungen", "Team Lunches", "Kundenbesuche"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — DIETARY NEEDS ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Ernährungsbedürfnisse werden automatisch berücksichtigt
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Unsere Menüs enthalten von Haus aus Optionen für die häufigsten 
            Ernährungspräferenzen in Unternehmen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Vegan, label: "Vegetarisch" },
              { icon: Leaf, label: "Vegan" },
              { icon: UtensilsCrossed, label: "Halal" },
              { icon: WheatOff, label: "Glutenfrei" },
              { icon: MilkOff, label: "Laktosefrei" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-card border border-border">
                <Icon className="w-4.5 h-4.5 text-primary" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-sm">
            So kann jeder im Team das Catering genießen — ohne zusätzlichen Planungsaufwand.
          </p>
        </div>
      </section>

      {/* ===== SECTION 7 — SUSTAINABILITY ===== */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
              Nachhaltigkeit ist Teil unseres Ansatzes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Unser Catering Partner Modell ist von Anfang an nachhaltig gedacht.
            </p>
            <div className="space-y-5">
              {[
                { icon: Recycle, text: "Essen wird in wiederverwendbaren Porzellanschalen geliefert statt in Einwegverpackungen." },
                { icon: PackageOpen, text: "Wir stellen Take-Away-Boxen bereit, damit Teilnehmer Reste mitnehmen können." },
                { icon: Leaf, text: "So werden Verpackungsmüll und Lebensmittelverschwendung gleichermaßen reduziert." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-warm">
            <img src={sustainableImg} alt="Nachhaltiges Catering mit wiederverwendbaren Schalen" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — FLEXIBLE COLLABORATION ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Flexible Zusammenarbeit für Unternehmen
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Das Catering Partner Modell hat <strong className="text-foreground">keine Bestellpflicht</strong>.
            </p>
            <p>
              Unternehmen können Catering anfragen, wann immer sie es brauchen.
            </p>
            <p>
              Preise werden individuell auf die typischen Bedürfnisse des Unternehmens abgestimmt.
            </p>
            <p className="text-foreground font-medium">
              Ein Probe-Catering kann jederzeit vereinbart werden.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8B — PARTNER PRICING ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-6">
            Ein klarer Preis für Ihr Unternehmen
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
            Wenn ein Unternehmen Sattuni Catering Partner wird, einigen wir uns auf einen festen Catering-Preis pro Person.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center max-w-sm shadow-sm">
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">
                Catering Partner Preis
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2">25 €</p>
              <p className="text-muted-foreground mb-6">netto pro Person</p>
              <p className="text-sm text-muted-foreground">
                für Gruppen von <strong className="text-foreground">15–40 Personen</strong>
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Dieser Preis bleibt für alle künftigen Caterings im Rahmen des Partner-Modells gleich.
            </p>
            <p className="text-foreground font-medium">
              Das bedeutet: Unternehmen brauchen nicht jedes Mal ein neues Angebot anzufordern.
            </p>
            <p>
              Stattdessen teilen Sie uns einfach mit:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              {["Datum", "Uhrzeit", "Personenanzahl"].map((item) => (
                <div key={item} className="p-4 rounded-lg bg-secondary/40 border border-border">
                  <p className="text-foreground font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p>
              Den Rest übernehmen wir.
            </p>
          </div>

          <div className="mt-10 p-5 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Hinweis:</strong> Preise können je nach Anforderungen und Catering-Setup variieren. Aber einmal vereinbart, bleibt der Preis für künftige Bestellungen konsistent.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — THE RESULT ===== */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12">
            Catering wird einfach
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              "Kein Menü-Suchen",
              "Kein Koordinations-Stress",
              "Ein zuverlässiger Catering-Partner",
            ].map((item) => (
              <div key={item} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground italic">
            Ihr Team konzentriert sich auf das Meeting — wir kümmern uns um das Essen.
          </p>
        </div>
      </section>

      {/* ===== SECTION 10 — CTA ===== */}
      <section id="partner-cta" className="py-20 md:py-28 bg-background">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Das Sattuni Catering Partner Modell testen
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Starten Sie mit einem Probe-Catering für Ihren nächsten Workshop oder Ihr nächstes Meeting.
          </p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a 
              href="https://wa.me/492113618115?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20das%20Catering%20Partner%20Modell." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Per WhatsApp schreiben
            </a>
          </div>
          <GoogleReviewBadge variant="default" />
        </div>
      </section>
    </PageLayout>
  );
};

export default CateringPartner;
