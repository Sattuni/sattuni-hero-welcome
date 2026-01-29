import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type OccasionFilter = 
  | 'alle'
  | 'office'
  | 'geburtstag'
  | 'feier'
  | 'hochzeit'
  | 'firmen';

export type GuestCountFilter = 'alle' | '20-40' | '40-60' | 'ab60';

interface MenuFiltersProps {
  selectedOccasion: OccasionFilter;
  selectedGuestCount: GuestCountFilter;
  onOccasionChange: (occasion: OccasionFilter) => void;
  onGuestCountChange: (guestCount: GuestCountFilter) => void;
}

const OCCASION_OPTIONS: { value: OccasionFilter; label: string }[] = [
  { value: 'alle', label: 'Alle Anlässe' },
  { value: 'office', label: 'Office & Workshop' },
  { value: 'geburtstag', label: 'Geburtstag' },
  { value: 'feier', label: 'Feier & Event' },
  { value: 'hochzeit', label: 'Hochzeit' },
  { value: 'firmen', label: 'Firmenevents' },
];

const GUEST_COUNT_OPTIONS: { value: GuestCountFilter; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: '20-40', label: '20–40' },
  { value: '40-60', label: '40–60' },
  { value: 'ab60', label: 'ab 60' },
];

const MenuFilters = ({ 
  selectedOccasion, 
  selectedGuestCount, 
  onOccasionChange, 
  onGuestCountChange 
}: MenuFiltersProps) => {
  return (
    <div className="space-y-4 print:hidden">
      {/* Occasion Filter */}
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-2">Anlass</p>
        <div className="flex flex-wrap gap-2">
          {OCCASION_OPTIONS.map((option) => (
            <Badge
              key={option.value}
              variant="outline"
              className={cn(
                "cursor-pointer transition-colors text-sm px-3 py-1.5",
                selectedOccasion === option.value
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  : "hover:bg-muted"
              )}
              onClick={() => onOccasionChange(option.value)}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Guest Count Filter */}
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-2">Personenanzahl</p>
        <div className="flex flex-wrap gap-2">
          {GUEST_COUNT_OPTIONS.map((option) => (
            <Badge
              key={option.value}
              variant="outline"
              className={cn(
                "cursor-pointer transition-colors text-sm px-3 py-1.5",
                selectedGuestCount === option.value
                  ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                  : "hover:bg-muted"
              )}
              onClick={() => onGuestCountChange(option.value)}
            >
              {option.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;
