import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySattuni from "@/components/WhySattuni";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhySattuni />
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default Index;
