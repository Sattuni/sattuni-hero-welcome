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
    <section className="py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Warum Sattuni?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Weil's bei uns nicht nur lecker ist, sondern auch easy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-4 p-6 rounded-2xl hover:bg-card/60 transition-all duration-500 hover:shadow-elegant border border-transparent hover:border-border/50"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border/50 shadow-soft">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-foreground font-body">
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