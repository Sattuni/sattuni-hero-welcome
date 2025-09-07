import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhySattuni from "@/components/WhySattuni";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhySattuni />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
