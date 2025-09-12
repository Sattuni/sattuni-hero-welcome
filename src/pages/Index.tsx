import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import Hero from "@/components/features/hero/Hero";
import Header from "@/components/layout/Header";
import Services from "@/components/features/services/Services";
import FoodShowcase from "@/components/features/food/FoodShowcase";
import WhySattuni from "@/components/features/about/WhySattuni";
import HowItWorks from "@/components/features/process/HowItWorks";
import Testimonials from "@/components/features/testimonials/Testimonials";
import Contact from "@/components/features/contact/Contact";
import OpeningHours from "@/components/layout/OpeningHours";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/mobile/MobileCTABar";
import MobileSectionExpander from "@/components/mobile/MobileSectionExpander";
import ChristmasPromo from "@/components/features/marketing/ChristmasPromo";
import SectionNav from "@/components/layout/SectionNav";
import InternalLinks from "@/components/layout/InternalLinks";
import { useLanguageRouting } from '@/hooks/useLanguageRouting';
import { Settings, Star, MessageCircle, Clock } from "lucide-react";

const Index = () => {
  const { t } = useTranslation();
  
  // Enable language routing
  useLanguageRouting();
  // SEO Meta Tags and Structured Data
  useEffect(() => {
    // Dynamic title based on language
    document.title = t('hero.title') + ' | Sattuni';
  }, [t]);

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
      <main className="min-h-screen pt-16 pb-safe-mobile">
        <Hero />
        
        {/* Section Navigation */}
        <SectionNav />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="spezialitaeten">
          <FoodShowcase />
        </div>
        
        <WhySattuni />
        
        {/* Mobile Expandable Sections */}
        <MobileSectionExpander
          title={t('mobile.sections.openingHours')}
          icon={Clock}
          className="bg-gradient-to-b from-muted/30 to-background"
        >
          <div id="oeffnungszeiten">
            <OpeningHours />
          </div>
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title={t('mobile.sections.howItWorks')}
          icon={Settings}
          className="bg-background"
        >
          <HowItWorks />
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title={t('mobile.sections.testimonials')}
          icon={Star}
          className="bg-gradient-hero"
        >
          <Testimonials />
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title={t('mobile.sections.contact')}
          icon={MessageCircle}
          className="bg-gradient-subtle"
        >
          <div id="kontakt">
            <Contact />
          </div>
        </MobileSectionExpander>
        
        {/* Internal Links Section */}
        <InternalLinks />
      </main>
      <Footer />
      <MobileCTABar />
      <ChristmasPromo />
    </>
  );
};

export default Index;
