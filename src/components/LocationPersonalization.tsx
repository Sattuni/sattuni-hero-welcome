import { MapPin, CheckCircle, Clock, Truck, PartyPopper } from 'lucide-react';
import { useGeolocation } from '@/hooks/useGeolocation';

interface LocationPersonalizationProps {
  type: 'delivery' | 'catering';
  className?: string;
}

const LocationPersonalization = ({ type, className = '' }: LocationPersonalizationProps) => {
  const location = useGeolocation();

  if (location.status === 'loading') {
    return (
      <div className={`flex items-center gap-2 text-muted-foreground text-sm ${className}`}>
        <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <span>Prüfe Liefergebiet...</span>
      </div>
    );
  }

  if (location.status === 'denied' || location.status === 'error') {
    return (
      <div className={`flex items-center gap-2 text-muted-foreground text-sm ${className}`}>
        <MapPin className="w-4 h-4" />
        <span>Standort freigeben für personalisierte Infos</span>
      </div>
    );
  }

  if (type === 'delivery') {
    if (location.isInDeliveryZone) {
      return (
        <div className={`flex items-center gap-2 text-primary font-medium text-sm ${className}`}>
          <CheckCircle className="w-4 h-4" />
          <span>Wir liefern zu dir nach {location.postalCode}!</span>
        </div>
      );
    } else if (location.city && location.city.toLowerCase().includes('düsseldorf')) {
      return (
        <div className={`flex items-center gap-2 text-amber-600 font-medium text-sm ${className}`}>
          <MapPin className="w-4 h-4" />
          <span>{location.postalCode}: Lieferung momentan nicht verfügbar</span>
        </div>
      );
    } else {
      return (
        <div className={`flex items-center gap-2 text-muted-foreground text-sm ${className}`}>
          <MapPin className="w-4 h-4" />
          <span>Lieferung in Düsseldorf verfügbar</span>
        </div>
      );
    }
  }

  if (type === 'catering') {
    if (location.isInCateringZone) {
      return (
        <div className={`flex items-center gap-2 text-primary font-medium text-sm ${className}`}>
          <PartyPopper className="w-4 h-4" />
          <span>Catering nach {location.city} ohne Lieferkosten!</span>
        </div>
      );
    } else {
      return (
        <div className={`flex items-center gap-2 text-muted-foreground text-sm ${className}`}>
          <Truck className="w-4 h-4" />
          <span>Catering in ganz Düsseldorf & Umgebung</span>
        </div>
      );
    }
  }

  return null;
};

export default LocationPersonalization;