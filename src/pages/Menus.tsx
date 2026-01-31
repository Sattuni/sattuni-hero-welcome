import { useEffect } from 'react';
import { Phone, Mail, MessageCircle, Printer, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATERING_PACKAGES } from '@/constants/catering-packages';
import SEOHead from '@/components/seo/SEOHead';
import ModeHeader from '@/components/layout/ModeHeader';
import Footer from '@/components/layout/Footer';
import { useSiteMode } from '@/contexts/SiteModeContext';
import MenuCard from '@/components/features/catering/MenuCard';

// Menu metadata with occasions, hints and dish counts
interface MenuMeta {
  occasions: string[];
  hint: string;
  dishCounts?: {
    appetizers?: number;
    mains?: number;
    salads?: number;
    dips?: number;
    snacks?: number;
    dessert?: boolean;
    selection?: number;
  };
}

const MENU_METADATA: Record<string, MenuMeta> = {
  'flyingbuffet-mix': {
    occasions: ['Stehempfang', 'Networking-Event', 'After-Work', 'Vernissage'],
    hint: 'Auswahl aus 10 Speisen',
    dishCounts: { selection: 10 },
  },
  'gruene-levante': {
    occasions: ['Office Lunch', 'Kundenbesuch'],
    hint: 'Leichtes vegetarisches Buffet, auch als Ergänzung geeignet',
    dishCounts: { salads: 3, dips: 2, snacks: 3 },
  },
  'sattuni-klassik': {
    occasions: ['Team-Mittagessen', 'Kleiner Geburtstag', 'Familienessen'],
    hint: 'Kalt & warm kombiniert, ausgewogen',
    dishCounts: { appetizers: 7, mains: 2 },
  },
  'sattuni-genuss': {
    occasions: ['Runder Geburtstag', 'Jubiläumsfeier', 'Firmenevent'],
    hint: 'Buffet mit Dessert',
    dishCounts: { appetizers: 7, mains: 3, dessert: true },
  },
  'sattuni-festmahl': {
    occasions: ['Sommerfest', 'Weihnachtsfeier', 'Firmenevent', 'Geburtstag'],
    hint: 'Großzügiges Buffet für größere Feiern',
    dishCounts: { appetizers: 8, mains: 4, dessert: true },
  },
  'sattuni-royal': {
    occasions: ['Hochzeit', 'Verlobung', 'Geburtstag', 'Weihnachtsfeier'],
    hint: 'Premium Buffet mit Lammschulter',
    dishCounts: { appetizers: 8, mains: 4, dessert: true },
  },
};

const Menus = () => {
  const { setMode } = useSiteMode();

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

  return (
    <>
      <SEOHead
        title="Menüs & Preise | Sattuni Catering Düsseldorf"
        description="Orientalische Buffet-Menüs: Klassik, Premium & Vegetarisch. Ab 20 Personen. Jetzt Menükarte ansehen!"
        keywords="Catering Menüs, Buffet Preise, arabisches Buffet, orientalische Menüs, Catering Düsseldorf"
        canonicalUrl="https://sattuni.de/catering/menus/"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />

      <ModeHeader />
      
      <div className="min-h-screen bg-background pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12 print:py-4">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Menüs & Preise</h1>
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

        {/* Menu Cards */}
        <main className="container max-w-5xl mx-auto px-4 py-6 pb-12 print:pb-4">
          <div className="grid gap-6 print:gap-4">
            {CATERING_PACKAGES.map((pkg) => {
              const metadata = MENU_METADATA[pkg.id] || { occasions: [], hint: '' };
              return (
                <MenuCard
                  key={pkg.id}
                  pkg={pkg}
                  occasions={metadata.occasions}
                  hint={metadata.hint}
                  dishCounts={metadata.dishCounts}
                />
              );
            })}
          </div>
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
