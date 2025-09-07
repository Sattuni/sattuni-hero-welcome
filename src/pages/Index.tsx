import { useEffect } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import WhySattuni from "@/components/WhySattuni";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to contact form if URL parameter is present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo === 'kontakt') {
      setTimeout(() => {
        const element = document.getElementById('kontakt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Services />
        <WhySattuni />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
