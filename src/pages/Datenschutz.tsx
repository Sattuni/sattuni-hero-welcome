import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Eye, Globe, Lock, Mail, MapPin, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Datenschutz = () => {

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Datenschutz", href: "/datenschutz" }
  ];

  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - Sattuni Oriental Bowls & More</title>
        <meta name="description" content="Datenschutzerklärung von Sattuni - Oriental Bowls & More, Düsseldorf. Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten gemäß DSGVO." />
        <link rel="canonical" href="https://sattuni.de/datenschutz" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        <main className="pt-4 pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />
            
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Datenschutzerklärung
                </h1>
              </div>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten
              </p>
            </div>

            {/* Privacy Policy Content */}
            <div className="space-y-6">
              
              {/* Introduction */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Shield className="w-5 h-5 text-primary" />
                    Einleitung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
                  </p>
                  <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
                  <p><strong>Stand:</strong> 25. April 2022</p>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Inhaltsübersicht</CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• Einleitung</li>
                    <li>• Verantwortlicher</li>
                    <li>• Übersicht der Verarbeitungen</li>
                    <li>• Maßgebliche Rechtsgrundlagen</li>
                    <li>• Sicherheitsmaßnahmen</li>
                    <li>• Übermittlung von personenbezogenen Daten</li>
                    <li>• Datenverarbeitung in Drittländern</li>
                    <li>• Löschung von Daten</li>
                    <li>• Einsatz von Cookies</li>
                    <li>• Geschäftliche Leistungen</li>
                    <li>• Bereitstellung des Onlineangebotes und Webhosting</li>
                    <li>• Kontakt- und Anfragenverwaltung</li>
                    <li>• Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</li>
                    <li>• Webanalyse, Monitoring und Optimierung</li>
                    <li>• Onlinemarketing</li>
                    <li>• Präsenzen in sozialen Netzwerken (Social Media)</li>
                    <li>• Plugins und eingebettete Funktionen sowie Inhalte</li>
                    <li>• Änderung und Aktualisierung der Datenschutzerklärung</li>
                    <li>• Rechte der betroffenen Personen</li>
                    <li>• Begriffsdefinitionen</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Responsible Party */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <MapPin className="w-5 h-5 text-primary" />
                    Verantwortlicher
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <div className="text-muted-foreground">
                    <p><strong>Feras Muhammad / Sattuni</strong></p>
                    <p>Johannstrasse 40</p>
                    <p>40476 Düsseldorf</p>
                    <p className="mt-3">
                      <strong>E-Mail-Adresse:</strong> 
                      <a href="mailto:info@sattuni.de" className="text-primary hover:text-primary/80 transition-colors ml-2">
                        info@sattuni.de
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Overview of Processing */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Eye className="w-5 h-5 text-primary" />
                    Übersicht der Verarbeitungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 font-body text-muted-foreground">
                  <p>Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Arten der verarbeiteten Daten</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Bestandsdaten</li>
                        <li>• Zahlungsdaten</li>
                        <li>• Kontaktdaten</li>
                        <li>• Inhaltsdaten</li>
                        <li>• Vertragsdaten</li>
                        <li>• Nutzungsdaten</li>
                        <li>• Meta-/Kommunikationsdaten</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Kategorien betroffener Personen</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Kunden</li>
                        <li>• Interessenten</li>
                        <li>• Kommunikationspartner</li>
                        <li>• Nutzer</li>
                        <li>• Geschäfts- und Vertragspartner</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Zwecke der Verarbeitung</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Erbringung vertraglicher Leistungen</li>
                        <li>• Kontaktanfragen und Kommunikation</li>
                        <li>• Sicherheitsmaßnahmen</li>
                        <li>• Direktmarketing</li>
                        <li>• Reichweitenmessung</li>
                        <li>• Marketing</li>
                        <li>• Bereitstellung des Onlineangebotes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Basis */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Shield className="w-5 h-5 text-primary" />
                    Maßgebliche Rechtsgrundlagen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
                    <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.</li>
                    <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)</strong> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</li>
                    <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Security Measures */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Lock className="w-5 h-5 text-primary" />
                    Sicherheitsmaßnahmen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">SSL-Verschlüsselung (https)</h4>
                    <p className="text-sm">
                      Um Ihre via unserem Online-Angebot übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https:// in der Adresszeile Ihres Browsers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Cookie className="w-5 h-5 text-primary" />
                    Einsatz von Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Cookies sind kleine Textdateien, bzw. sonstige Speichervermerke, die Informationen auf Endgeräten speichern und Informationen aus den Endgeräten auslesen. Z.B. um den Login-Status in einem Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die aufgerufenen Inhalte oder verwendete Funktionen eines Onlineangebotes speichern.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Temporäre Cookies</h4>
                      <p>Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer das Online-Angebot verlassen und sein Endgerät geschlossen hat.</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Permanente Cookies</h4>
                      <p>Permanente Cookies bleiben auch nach dem Schließen des Endgerätes gespeichert und können bis zu zwei Jahre bestehen.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Services */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Geschäftliche Leistungen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B. Kunden und Interessenten (zusammenfassend bezeichnet als "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Rahmen der Kommunikation mit den Vertragspartnern (oder vorvertraglich), z.B., um Anfragen zu beantworten.
                  </p>
                  <p>
                    Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von 4 Jahren, es sei denn, dass die Daten in einem Kundenkonto gespeichert werden oder aus gesetzlichen Gründen der Archivierung aufbewahrt werden müssen (z.B. für Steuerzwecke im Regelfall 10 Jahre).
                  </p>
                </CardContent>
              </Card>

              {/* Web Analysis */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Globe className="w-5 h-5 text-primary" />
                    Webanalyse, Monitoring und Optimierung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Die Webanalyse (auch als "Reichweitenmessung" bezeichnet) dient der Auswertung der Besucherströme unseres Onlineangebotes und kann Verhalten, Interessen oder demographische Informationen zu den Besuchern, wie z.B. das Alter oder das Geschlecht, als pseudonyme Werte umfassen.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                    <p>
                      Webanalyse, Reichweitenmessung sowie Messung von Nutzerströmen. 
                      <br />
                      <strong>Dienstanbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                      <br />
                      <strong>Datenschutzerklärung:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">https://policies.google.com/privacy</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Präsenzen in sozialen Netzwerken (Social Media)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Instagram</h4>
                      <p>Soziales Netzwerk</p>
                      <p><strong>Website:</strong> <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">instagram.com</a></p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Facebook</h4>
                      <p>Profile innerhalb des sozialen Netzwerks Facebook</p>
                      <p><strong>Website:</strong> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">facebook.com</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rights of Data Subjects */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Shield className="w-5 h-5 text-primary" />
                    Rechte der betroffenen Personen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</li>
                    <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
                    <li><strong>Auskunftsrecht:</strong> Sie haben das Recht auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten.</li>
                    <li><strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung oder Berichtigung der Sie betreffenden Daten zu verlangen.</li>
                    <li><strong>Recht auf Löschung:</strong> Sie haben das Recht zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact for Privacy Matters */}
              <Card className="bg-primary/10 backdrop-blur-sm border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        Fragen zum Datenschutz?
                      </h3>
                    </div>
                    <p className="text-muted-foreground font-body">
                      Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten kontaktieren Sie uns gerne.
                    </p>
                    <a 
                      href="mailto:info@sattuni.de" 
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      info@sattuni.de
                    </a>
                  </div>
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

export default Datenschutz;