import { ClipboardList, Mail, UtensilsCrossed } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      emoji: "📝",
      step: "Schritt 1",
      title: "Anfragen oder Bestellen",
      description: "Wähle: Heute bestellen oder Catering planen."
    },
    {
      icon: Mail,
      emoji: "📩",
      step: "Schritt 2", 
      title: "Angebot & Bestätigung",
      description: "Wir bestätigen deine Bestellung oder schicken dir dein Catering-Angebot."
    },
    {
      icon: UtensilsCrossed,
      emoji: "🍽️",
      step: "Schritt 3",
      title: "Genießen",
      description: "Frisch gekocht, pünktlich geliefert – und einfach lecker."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            So funktioniert&apos;s
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ob Bestellung oder Catering – bei uns geht&apos;s easy in drei Schritten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-6 relative"
              >
                {/* Connection Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-transparent opacity-30 z-0"></div>
                )}
                
                {/* Step Number & Icon */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-20 h-20 bg-gradient-warm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-warm">
                      <IconComponent className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {step.emoji}
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full">
                    <span className="text-sm font-semibold text-accent-foreground">
                      {step.step}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-medium text-foreground">
              Ready? Lass uns loslegen!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;