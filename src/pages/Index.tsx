import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySattuni from "@/components/WhySattuni";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhySattuni />
      <HowItWorks />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
