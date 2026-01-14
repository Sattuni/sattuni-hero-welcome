import { Helmet } from 'react-helmet';
import { Phone, Mail, MessageCircle, Printer, Leaf, Sparkles, ArrowUp, Star, Users, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CATERING_PACKAGES, formatPrice, type CateringPackage, type PackageDishItem } from '@/constants/catering-packages';
import sattLogo from '@/assets/sattuni-logo.png';

const Menus = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent('Schau dir die Catering-Menüs von Sattuni an: https://sattuni.de/menus');
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const getHighlightBadge = (highlight?: PackageDishItem['highlight']) => {
    if (!highlight) return null;
    
    const badges = {
      neu: { label: '+ Extra', className: 'bg-green-100 text-green-700 border-green-200' },
      upgrade: { label: '↑ Upgrade', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      premium: { label: '★ Premium', className: 'bg-amber-100 text-amber-700 border-amber-200' },
    };
    
    const badge = badges[highlight];
    return (
      <Badge variant="outline" className={`ml-2 text-xs font-medium ${badge.className}`}>
        {badge.label}
      </Badge>
    );
  };

  const renderPackageCard = (pkg: CateringPackage) => {
    const hasCategories = pkg.detailedItems.some(group => group.category);
    
    return (
      <Card key={pkg.id} className="overflow-hidden print:break-inside-avoid print:shadow-none print:border">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                {pkg.popular && (
                  <Badge className="bg-primary text-primary-foreground">Beliebt</Badge>
                )}
                {pkg.isVegetarian && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Leaf className="w-3 h-3 mr-1" />
                    Vegetarisch
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{pkg.subtitle}</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="flex items-baseline gap-1">
                {pkg.pricePerPersonMax ? (
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(pkg.pricePerPerson)} – {formatPrice(pkg.pricePerPersonMax)}
                  </span>
                ) : (
                  <span className="text-lg font-bold text-primary">{formatPrice(pkg.pricePerPerson)}</span>
                )}
                <span className="text-sm text-muted-foreground">/ Person</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Users className="w-3 h-3" />
                <span>ab {pkg.minGuests} Gäste</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
        </CardHeader>
        
        <CardContent className="pt-4">
          {hasCategories ? (
            <div className="space-y-4">
              {pkg.detailedItems.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {group.category && (
                    <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                      <ChefHat className="w-4 h-4" />
                      {group.category}
                    </h4>
                  )}
                  <div className="grid gap-2">
                    {group.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 py-1.5 border-b border-border/50 last:border-0">
                        <div className="flex items-center">
                          <span className="font-medium text-sm text-foreground">{item.name}</span>
                          {getHighlightBadge(item.highlight)}
                        </div>
                        {item.description && (
                          <span className="text-xs text-muted-foreground sm:ml-auto sm:text-right max-w-xs">
                            {item.description}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {groupIndex < pkg.detailedItems.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-2">
              {pkg.detailedItems[0]?.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 py-1.5 border-b border-border/50 last:border-0">
                  <div className="flex items-center">
                    <span className="font-medium text-sm text-foreground">{item.name}</span>
                    {getHighlightBadge(item.highlight)}
                  </div>
                  {item.description && (
                    <span className="text-xs text-muted-foreground sm:ml-auto sm:text-right max-w-xs">
                      {item.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Package features */}
          <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap gap-2">
            {pkg.includesDessert && (
              <Badge variant="secondary" className="text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                Inkl. Dessert
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              Lieferung inklusive
            </Badge>
            <Badge variant="outline" className="text-xs">
              Geschirr optional
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>Catering-Menüs | Sattuni</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header - Print optimized */}
        <header className="bg-gradient-to-b from-primary/5 to-background py-8 sm:py-12 print:py-4">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src={sattLogo} 
                  alt="Sattuni Logo" 
                  className="h-16 sm:h-20 w-auto print:h-12"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Unsere Catering-Menüs</h1>
                  <p className="text-muted-foreground text-sm sm:text-base">Orientalische Vielfalt für jeden Anlass</p>
                </div>
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
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground print:mt-2">
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
        </header>

        {/* Legend */}
        <section className="container max-w-5xl mx-auto px-4 py-4 print:py-2">
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="text-muted-foreground font-medium">Legende:</span>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 text-xs">+ Extra</Badge>
              <span className="text-muted-foreground">Zusätzliches Gericht</span>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 text-xs">↑ Upgrade</Badge>
              <span className="text-muted-foreground">Verbesserte Variante</span>
            </div>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200 text-xs">★ Premium</Badge>
              <span className="text-muted-foreground">Premium-Zutat</span>
            </div>
          </div>
        </section>

        {/* Menu Cards */}
        <main className="container max-w-5xl mx-auto px-4 pb-12 print:pb-4">
          <div className="grid gap-6 print:gap-4">
            {CATERING_PACKAGES.map(renderPackageCard)}
          </div>
        </main>

        {/* Footer CTA - hidden on print */}
        <footer className="bg-primary/5 py-8 print:hidden">
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
            
            <div className="mt-6 pt-6 border-t border-border/50 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Sattuni – Orientalische Küche, Düsseldorf</p>
              <p className="mt-1">
                <a href="/" className="hover:text-primary transition-colors">www.sattuni.de</a>
              </p>
            </div>
          </div>
        </footer>

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
