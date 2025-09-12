import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('legal.imprint.title'), href: "/impressum" }
  ];

  return (
    <>
      <Helmet>
        <title>{t('legal.imprint.title')} - Sattuni Oriental Bowls & More</title>
        <meta name="description" content={`${t('legal.imprint.subtitle')} ${t('footer.description')}`} />
        <link rel="canonical" href="https://sattuni.de/impressum" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Header />
        
        <main className="pt-4 pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />
            
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  {t('legal.imprint.title')}
                </h1>
              </div>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                {t('legal.imprint.subtitle')}
              </p>
            </div>

            {/* Legal Information */}
            <div className="space-y-6">
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <MapPin className="w-5 h-5 text-primary" />
                    {t('legal.imprint.sections.provider.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('legal.imprint.sections.provider.name')}</h3>
                    <p className="text-muted-foreground">
                      {t('legal.imprint.sections.provider.company')}<br />
                      {t('legal.imprint.sections.provider.business')}<br />
                      {t('legal.imprint.sections.provider.street')}<br />
                      {t('legal.imprint.sections.provider.city')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Phone className="w-5 h-5 text-primary" />
                    {t('legal.imprint.sections.contact.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('legal.imprint.sections.contact.phone')}</h3>
                      <a 
                        href="tel:021136180115" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        0211 36180115
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('legal.imprint.sections.contact.email')}</h3>
                      <a 
                        href="mailto:info@sattuni.de" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        info@sattuni.de
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Scale className="w-5 h-5 text-primary" />
                    {t('legal.imprint.sections.vat.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted-foreground">
                    {t('legal.imprint.sections.vat.description')}
                    <span className="font-semibold text-foreground ml-2">{t('legal.imprint.sections.vat.number')}</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">
                    {t('legal.imprint.sections.dispute.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted-foreground">
                    {t('legal.imprint.sections.dispute.text')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6 font-body">
                  <p className="text-xs text-muted-foreground">
                    <strong>{t('legal.imprint.sections.source')}:</strong> eRecht24
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Impressum;