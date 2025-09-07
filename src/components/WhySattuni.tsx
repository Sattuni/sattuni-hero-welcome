import { ChefHat, Leaf, Truck, Calendar } from "lucide-react";

const WhySattuni = () => {
  const benefits = [
    {
      icon: ChefHat,
      title: "Hausgemacht & frisch",
      description: "Von Pita bis Hummus – alles frisch aus unserer Küche."
    },
    {
      icon: Leaf,
      title: "Vielfalt für alle",
      description: "Ob Fleisch, vegetarisch oder vegan – wir haben für jeden was."
    },
    {
      icon: Truck,
      title: "Schnell & zuverlässig",
      description: "Lieferung in Düsseldorf – direkt zu dir oder zu deinem Event."
    },
    {
      icon: Calendar,
      title: "Alltag & Anlässe",
      description: "Egal ob Mittagspause oder Party – wir machen euch satt."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Warum Sattuni?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Weil's bei uns nicht nur lecker ist, sondern auch easy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-4 p-6 rounded-2xl hover:bg-card/50 transition-all duration-300 hover:shadow-soft"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-warm">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full text-accent-foreground">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">
              Authentisch orientalisch in Düsseldorf
            </span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySattuni;