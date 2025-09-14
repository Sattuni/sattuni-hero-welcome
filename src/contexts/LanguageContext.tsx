import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation keys - German is the default, English translations are provided
const translations = {
  // Navigation
  'nav.home': { de: 'Home', en: 'Home' },
  'nav.specialties': { de: 'Spezialitäten', en: 'Specialties' },
  'nav.menu': { de: 'Speisekarte', en: 'Menu' },
  'nav.about': { de: 'Über uns', en: 'About Us' },
  'nav.catering': { de: 'Catering', en: 'Catering' },
  'nav.contact': { de: 'Kontakt', en: 'Contact' },
  'nav.order_now': { de: 'Jetzt bestellen', en: 'Order Now' },
  
  // Settings
  'settings.title': { de: 'Einstellungen', en: 'Settings' },
  'settings.theme': { de: 'Design', en: 'Theme' },
  'settings.language': { de: 'Sprache', en: 'Language' },
  'settings.light_mode': { de: 'Hell', en: 'Light' },
  'settings.dark_mode': { de: 'Dunkel', en: 'Dark' },
  'settings.english': { de: 'Englisch', en: 'English' },
  'settings.german': { de: 'Deutsch', en: 'German' },
  
  // Common
  'common.close': { de: 'Schließen', en: 'Close' },
  'common.open_menu': { de: 'Menü öffnen', en: 'Open Menu' },
  'common.sattuni_logo': { de: 'Sattuni Logo - Arabische Küche Düsseldorf', en: 'Sattuni Logo - Arabic Cuisine Düsseldorf' },
  'common.oriental_bowls': { de: 'Oriental Bowls & More', en: 'Oriental Bowls & More' },
  
  // Page titles and descriptions
  'meta.home_title': { de: 'Zur Startseite - Arabische Küche Düsseldorf', en: 'To Homepage - Arabic Cuisine Düsseldorf' },
  'meta.specialties_title': { de: 'Arabische Spezialitäten - Hummus, Falafel & mehr', en: 'Arabic Specialties - Hummus, Falafel & more' },
  'meta.menu_title': { de: 'Komplette Speisekarte mit Preisen - Orientalische Küche', en: 'Complete Menu with Prices - Oriental Cuisine' },
  'meta.about_title': { de: 'Über das Team von Sattuni - Die Brüder hinter der Küche', en: 'About the Sattuni Team - The Brothers Behind the Kitchen' },
  'meta.catering_title': { de: 'Catering Service Düsseldorf - Arabische Küche für Events', en: 'Catering Service Düsseldorf - Arabic Cuisine for Events' },
  'meta.homepage_label': { de: 'Zur Startseite von Sattuni', en: 'To Sattuni Homepage' },
  'meta.main_navigation': { de: 'Hauptnavigation', en: 'Main Navigation' },
  
  // Additional common translations
  'common.sattuni': { de: 'sattuni', en: 'sattuni' },
  'common.loading': { de: 'Laden...', en: 'Loading...' },
  'common.error': { de: 'Fehler', en: 'Error' },
  'common.success': { de: 'Erfolgreich', en: 'Success' },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('sattuni-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguageState(savedLanguage);
    } else {
      // Default to German
      setLanguageState('de');
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('sattuni-language', newLanguage);
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language];
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
