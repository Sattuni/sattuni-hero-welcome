import { ChefHat, Leaf, Truck, Calendar } from "lucide-react";

const WhySattuni = () => {
  const benefits = [
    {
      icon: ChefHat,
      title: "Frisch gemacht",
      description: "Am selben Tag zubereitet."
    },
    {
      icon: Leaf,
      title: "Für jeden was",
      description: "Fleisch, vegetarisch, vegan."
    },
    {
      icon: Truck,
      title: "Schnell da",
      description: "Fix geliefert in Düsseldorf."
    },
    {
      icon: Calendar,
      title: "Klein oder groß",
      description: "Einzeln oder fürs Team."
    }
  ];

  return (
    <section className="py-6 md:py-16 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-4 md:mb-12 space-y-1 md:space-y-4">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Warum bei uns bestellen?
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed hidden md:block">
            Ganz einfach: Weil's schmeckt und unkompliziert ist.
          </p>
        </div>

        {/* Benefits Grid - 4 columns on mobile too, ultra compact */}
        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-1.5 md:space-y-4 p-2 md:p-6 rounded-xl md:rounded-2xl hover:bg-card/60 transition-all duration-500 hover:shadow-elegant border border-transparent hover:border-border/50"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-elegant">
                    <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-0.5 md:space-y-3">
                  <h3 className="text-xs md:text-xl font-display font-bold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[10px] md:text-base text-muted-foreground leading-relaxed font-body hidden md:block">
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
