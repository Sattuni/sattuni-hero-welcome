import { useState } from 'react';
import { ChevronDown, Users, Leaf, Sparkles, HandPlatter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { type CateringPackage, type PackageDishItem, formatPrice } from '@/constants/catering-packages';

interface MenuCardProps {
  pkg: CateringPackage;
  occasions: string[];
  hint?: string;
}

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

const MenuCard = ({ pkg, occasions, hint }: MenuCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasCategories = pkg.detailedItems.some(group => group.category);

  return (
    <Card className="overflow-hidden print:break-inside-avoid print:shadow-none print:border transition-shadow hover:shadow-md">
      <CardHeader className="pb-4">
        {/* Row 1: Name + Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
            {pkg.popular && (
              <Badge className="bg-primary text-primary-foreground text-xs">Beliebt</Badge>
            )}
            {pkg.isVegetarian && (
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                <Leaf className="w-3 h-3 mr-1" />
                Vegetarisch
              </Badge>
            )}
            {pkg.isFingerFood && (
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 text-xs">
                <HandPlatter className="w-3 h-3 mr-1" />
                Fingerfood
              </Badge>
            )}
          </div>
        </div>

        {/* Row 2: Price */}
        <div className="mt-3">
          <div className="flex items-baseline gap-1">
            {pkg.pricePerPersonMax ? (
              <span className="text-2xl font-bold text-primary">
                {formatPrice(pkg.pricePerPerson)} – {formatPrice(pkg.pricePerPersonMax)}
              </span>
            ) : (
              <span className="text-2xl font-bold text-primary">{formatPrice(pkg.pricePerPerson)}</span>
            )}
            <span className="text-sm text-muted-foreground">pro Person</span>
          </div>
        </div>

        {/* Row 3: Hint */}
        {hint && (
          <p className="text-sm text-muted-foreground mt-2">{hint}</p>
        )}

        {/* Row 4: Occasions */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {occasions.map((occasion) => (
            <Badge 
              key={occasion} 
              variant="secondary" 
              className="text-xs font-normal bg-muted/50 text-muted-foreground"
            >
              {occasion}
            </Badge>
          ))}
        </div>

        {/* Row 5: Guest Count */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-3">
          <Users className="w-4 h-4" />
          <span>ab {pkg.minGuests} Personen</span>
        </div>

        {/* Row 6: Features */}
        <div className="flex flex-wrap gap-2 mt-3">
          {pkg.includesDessert && (
            <Badge variant="outline" className="text-xs bg-amber-50/50 text-amber-700 border-amber-200/50">
              <Sparkles className="w-3 h-3 mr-1" />
              Inkl. Dessert
            </Badge>
          )}
          <Badge variant="outline" className="text-xs">
            Lieferung inklusive
          </Badge>
        </div>
      </CardHeader>
      
      {/* Expand Button */}
      <div className="px-6 pb-4 print:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between text-sm font-medium"
        >
          <span>Speisenauswahl anzeigen</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isExpanded && "rotate-180"
          )} />
        </Button>
      </div>

      {/* Expandable Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 print:max-h-none print:opacity-100"
      )}>
        <CardContent className="pt-0 pb-6 border-t border-border/50">
          <div className="pt-4">
            {hasCategories ? (
              <div className="space-y-4">
                {pkg.detailedItems.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    {group.category && (
                      <h4 className="font-semibold text-sm text-primary mb-2">
                        {group.category}
                      </h4>
                    )}
                    <div className="grid gap-2">
                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 py-1.5 border-b border-border/30 last:border-0">
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
                  <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 py-1.5 border-b border-border/30 last:border-0">
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
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MenuCard;
