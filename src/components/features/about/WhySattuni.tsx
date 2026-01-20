import { ChefHat, Leaf, Truck, Calendar } from "lucide-react";

const WhySattuni = () => {
  const benefits = [
    {
      icon: ChefHat,
      title: "Frisch gemacht",
      description: "Alles am selben Tag zubereitet. Schmeckt man."
    },
    {
      icon: Leaf,
      title: "Für jeden was",
      description: "Fleisch, vegetarisch, vegan – hier findet jeder was."
    },
    {
      icon: Truck,
      title: "Schnell da",
      description: "In Düsseldorf liefern wir fix zu dir."
    },
    {
      icon: Calendar,
      title: "Klein oder groß",
      description: "Einzelbestellung oder fürs ganze Team – kein Problem."
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Warum bei uns bestellen?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Ganz einfach: Weil's schmeckt und unkompliziert ist.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-2 md:space-y-4 p-3 md:p-6 rounded-xl md:rounded-2xl hover:bg-card/60 transition-all duration-500 hover:shadow-elegant border border-transparent hover:border-border/50"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center mb-2 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-1 md:space-y-3">
                  <h3 className="text-sm md:text-xl font-display font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed font-body hidden md:block">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhySattuni;