import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLanguageRouting = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const langParam = urlParams.get('lang');
    
    // If language parameter exists in URL, change language and clean URL
    if (langParam && (langParam === 'en' || langParam === 'de')) {
      if (i18n.language !== langParam) {
        i18n.changeLanguage(langParam);
      }
      
      // Clean the URL by removing the lang parameter
      const newParams = new URLSearchParams(location.search);
      newParams.delete('lang');
      const newSearch = newParams.toString();
      const newUrl = location.pathname + (newSearch ? `?${newSearch}` : '');
      
      // Replace current URL without the lang parameter
      window.history.replaceState({}, '', newUrl);
    }
  }, [location.search, i18n, navigate]);

  // Function to generate language-specific URLs
  const generateLanguageUrl = (targetLang: string) => {
    const baseUrl = location.pathname;
    const params = new URLSearchParams(location.search);
    params.set('lang', targetLang);
    return `${baseUrl}?${params.toString()}`;
  };

  return {
    generateLanguageUrl,
    currentLanguage: i18n.language
  };
};