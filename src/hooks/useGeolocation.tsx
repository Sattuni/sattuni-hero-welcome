import { useState, useEffect } from 'react';

interface LocationData {
  postalCode: string;
  city: string;
  isInDeliveryZone: boolean;
  isInCateringZone: boolean;
  status: 'loading' | 'success' | 'error' | 'denied';
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationData>({
    postalCode: '',
    city: '',
    isInDeliveryZone: false,
    isInCateringZone: false,
    status: 'loading'
  });

  // Düsseldorf delivery postal codes
  const deliveryPostalCodes = [
    '40476', '40468', '40472', '40474', '40477', '40470', 
    '40211', '40237', '40549', '40479', '40667', '40547', 
    '40239', '40235', '40545', '40219'
  ];

  // Düsseldorf and surrounding areas for catering (broader range)
  const cateringRegions = ['40', '41', '42']; // Düsseldorf and surrounding areas

  useEffect(() => {
    // Try to get location from browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Use reverse geocoding service (you might want to use a more robust service)
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=de`
            );
            const data = await response.json();
            
            const postalCode = data.postcode || '';
            const city = data.city || '';
            
            const isInDeliveryZone = deliveryPostalCodes.includes(postalCode);
            const isInCateringZone = cateringRegions.some(region => postalCode.startsWith(region));
            
            setLocation({
              postalCode,
              city,
              isInDeliveryZone,
              isInCateringZone,
              status: 'success'
            });
          } catch (error) {
            setLocation(prev => ({ ...prev, status: 'error' }));
          }
        },
        (error) => {
          setLocation(prev => ({ 
            ...prev, 
            status: error.code === error.PERMISSION_DENIED ? 'denied' : 'error' 
          }));
        },
        { timeout: 10000, maximumAge: 300000 } // 5 minute cache
      );
    } else {
      setLocation(prev => ({ ...prev, status: 'error' }));
    }
  }, []);

  return location;
};