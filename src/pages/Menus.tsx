import { useEffect, useState, useMemo } from 'react';
import { Phone, Mail, MessageCircle, Printer, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATERING_PACKAGES } from '@/constants/catering-packages';
import SEOHead from '@/components/seo/SEOHead';
import ModeHeader from '@/components/layout/ModeHeader';
import Footer from '@/components/layout/Footer';
import { useSiteMode } from '@/contexts/SiteModeContext';
import MenuCard from '@/components/features/catering/MenuCard';
import MenuFilters, { type OccasionFilter, type GuestCountFilter } from '@/components/features/catering/MenuFilters';

// Menu metadata with occasions and hints
const MENU_METADATA: Record<string, { occasions: string[]; hint: string; occasionTags: OccasionFilter[] }> = {
  'flyingbuffet-mix': {
    occasions: ['Empfang', 'Get-together', 'Team-Event', 'Sommerfest', 'Firmenfeier'],
    hint: 'Auswahl aus 10 Speisen',
    occasionTags: ['feier', 'firmen'],
  },
  'gruene-levante': {
    occasions: ['Office Lunch', 'Workshops', 'Health-Days', 'Private Feiern'],
    hint: 'Leichtes vegetarisches Buffet, auch als Ergänzung geeignet',
    occasionTags: ['office', 'feier'],
  },
  'sattuni-klassik': {
    occasions: ['Gemeinsames Essen', 'Team-Lunch', 'Kleine Geburtstage', 'Familienfeiern'],
    hint: 'Kalt & warm kombiniert, ausgewogen',
    occasionTags: ['office', 'geburtstag', 'feier'],
  },
  'sattuni-genuss': {
    occasions: ['Geburtstage', 'Feiern in Locations', 'Kleine Firmenevents'],
    hint: 'Buffet mit Dessert',
    occasionTags: ['geburtstag', 'feier', 'firmen'],
  },
  'sattuni-festmahl': {
    occasions: ['Große Feiern', 'Sommerfeste', 'Weihnachtsfeiern', 'Firmenevents'],
    hint: 'Großzügiges Buffet für größere Feiern',
    occasionTags: ['feier', 'firmen'],
  },
  'sattuni-royal': {
    occasions: ['Hochzeiten', 'Runde Geburtstage', 'Exklusive Feiern'],
    hint: 'Premium Buffet mit Lammschulter',
    occasionTags: ['hochzeit', 'geburtstag', 'feier'],
  },
};

const Menus = () => {
  const { setMode } = useSiteMode();
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionFilter>('alle');
  const [selectedGuestCount, setSelectedGuestCount] = useState<GuestCountFilter>('alle');

  // Set catering mode on page load
  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent('Schau dir die Catering-Menüs von Sattuni an: https://sattuni.de/menus');
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  // Filter menus based on selected filters
  const filteredMenus = useMemo(() => {
    return CATERING_PACKAGES.filter((pkg) => {
      const metadata = MENU_METADATA[pkg.id];
      
      // Filter by occasion
      if (selectedOccasion !== 'alle') {
        if (!metadata?.occasionTags.includes(selectedOccasion)) {
          return false;
        }
      }
      
      // Filter by guest count
      if (selectedGuestCount !== 'alle') {
        switch (selectedGuestCount) {
          case '20-40':
            if (pkg.minGuests > 40) return false;
            break;
          case '40-60':
            if (pkg.minGuests > 60) return false;
            break;
          case 'ab60':
            // Show all menus that work for 60+ guests
            break;
        }
      }
      
      return true;
    });
  }, [selectedOccasion, selectedGuestCount]);

  return (
    <>
      <SEOHead
        title="Buffet Catering Menüs | Sattuni"
        description="Orientalische Buffet-Menüs: Klassik, Premium & Vegetarisch. Für jeden Anlass das passende Paket."
        canonicalUrl="https://sattuni.de/catering/menus"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
        noIndex={true}
      />

      <ModeHeader />
      
      <div className="min-h-screen bg-background pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12 print:py-4">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Buffet Catering Menüs</h1>
                <p className="text-muted-foreground text-sm sm:text-base mt-1">Orientalische Vielfalt für jeden Anlass</p>
              </div>
              
              {/* Action buttons - hidden on print */}
              <div className="flex gap-2 print:hidden">
                <Button variant="outline" size="sm" onClick={handlePrint}>
                  <Printer className="w-4 h-4 mr-2" />
                  Als PDF
                </Button>
                <Button variant="outline" size="sm" onClick={handleWhatsAppShare}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Teilen
                </Button>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground print:mt-2">
              <a href="tel:+492113618115" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                0211 36180115
              </a>
              <a href="mailto:info@sattuni.de" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@sattuni.de
              </a>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container max-w-5xl mx-auto px-4 py-6">
          <MenuFilters
            selectedOccasion={selectedOccasion}
            selectedGuestCount={selectedGuestCount}
            onOccasionChange={setSelectedOccasion}
            onGuestCountChange={setSelectedGuestCount}
          />
        </section>

        {/* Menu Cards */}
        <main className="container max-w-5xl mx-auto px-4 pb-12 print:pb-4">
          {filteredMenus.length > 0 ? (
            <div className="grid gap-6 print:gap-4">
              {filteredMenus.map((pkg) => {
                const metadata = MENU_METADATA[pkg.id] || { occasions: [], hint: '' };
                return (
                  <MenuCard
                    key={pkg.id}
                    pkg={pkg}
                    occasions={metadata.occasions}
                    hint={metadata.hint}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Keine Menüs für diese Filterauswahl gefunden.</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setSelectedOccasion('alle');
                  setSelectedGuestCount('alle');
                }}
                className="mt-2"
              >
                Filter zurücksetzen
              </Button>
            </div>
          )}
        </main>

        {/* CTA Section - hidden on print */}
        <section className="bg-primary/5 py-8 print:hidden">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Interesse geweckt?</h2>
            <p className="text-muted-foreground mb-4">
              Jetzt unverbindlich anfragen – wir beraten euch gerne persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <a href="/catering">
                  <ChefHat className="w-4 h-4 mr-2" />
                  Catering anfragen
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+492113618115">
                  <Phone className="w-4 h-4 mr-2" />
                  0211 36180115
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />

        {/* Print-only footer */}
        <div className="hidden print:block text-center text-xs text-muted-foreground py-4 border-t">
          <p>Sattuni – Orientalische Küche | Tel: 0211 36180115 | info@sattuni.de | www.sattuni.de</p>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
};

export default Menus;
