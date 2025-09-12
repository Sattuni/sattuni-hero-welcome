import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} - Sattuni | 404 {t('common.error')}</title>
        <meta name="description" content={`${t('notFound.subtitle')} ${t('common.backHome')}.`} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://sattuni.de/" />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {t('notFound.title')}
          </h2>
          <p className="text-muted-foreground mb-8">
            <span className="font-mono bg-muted px-2 py-1 rounded text-sm">{location.pathname}</span> {t('notFound.subtitle')}
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'} 
              size="lg"
              className="w-full"
            >
              {t('notFound.buttons.home')}
            </Button>
            <Button 
              onClick={() => window.location.href = '/spezialitaeten'} 
              variant="outline"
              size="lg"
              className="w-full"
            >
              {t('notFound.buttons.specialties')}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
