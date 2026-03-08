import { ChefHat, Leaf, Truck, Calendar } from "lucide-react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const WhySattuni = () => {
  const isMobile = useMobileDetection();

  const benefits = [
    { icon: ChefHat, title: "Frisch gemacht", description: "Am selben Tag zubereitet." },
    { icon: Leaf, title: "Für jeden was", description: "Fleisch, vegetarisch, vegan." },
    { icon: Truck, title: "Schnell da", description: "Fix geliefert in Düsseldorf." },
    { icon: Calendar, title: "Klein oder groß", description: "Einzeln oder fürs Team." },
  ];

  return (
    <section className="py-6 md:py-14 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-lg md:text-3xl font-display font-bold text-foreground text-center mb-4 md:mb-10">
          Warum bei uns bestellen?
        </h2>

        <div className={`grid ${isMobile ? 'grid-cols-4 gap-2' : 'grid-cols-4 gap-6'}`}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center space-y-1.5 md:space-y-3 p-2 md:p-5 rounded-xl hover:bg-card/60 transition-all border border-transparent hover:border-border/50">
                <div className="flex items-center justify-center">
                  <div className={`${isMobile ? 'w-10 h-10' : 'w-14 h-14'} bg-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-elegant`}>
                    <IconComponent className={`${isMobile ? 'w-5 h-5' : 'w-7 h-7'} text-white`} />
                  </div>
                </div>
                <h3 className="text-xs md:text-base font-display font-bold text-foreground leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground hidden md:block">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySattuni;
