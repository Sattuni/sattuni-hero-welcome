

# SEO & Conversion-Analyse: sattuni.de

---

## 1. Website-Struktur

**Aktuelle Seitenstruktur:**
```text
/                          → Landing (Mode-Auswahl)
├── /restaurant            → Restaurant-Startseite
│   ├── /spezialitaeten    → Spezialitäten
│   └── /speisekarte       → Speisekarte
├── /catering              → Catering-Hauptseite
│   ├── /menus             → Menüs & Preise
│   ├── /galerie           → Buffet-Galerie
│   ├── /ueber-uns         → Über uns
│   ├── /danke             → Danke-Seite (nach Anfrage)
│   └── /blog              → Blog-Übersicht
│       ├── /buero-lunch-ideen
│       ├── /was-bedeutet-mezze
│       ├── /workshop-catering
│       ├── /vegane-arabische-klassiker
│       ├── /veganes-office-buffet-veganuary
│       ├── /kundenbesuch-catering-abwechslung
│       └── /catering-fuer-firmenfeiern-in-duesseldorf
├── /impressum
└── /datenschutz
```

**Bewertung:**
- **Gut:** Klare Trennung zwischen Restaurant und Catering unter separaten URL-Pfaden. Gute SEO-Isolation.
- **Gut:** Breadcrumbs auf Catering-Seiten vorhanden.
- **Problem: Landing Page (/)** ist eine Mode-Auswahl ("Hey, schön dass ihr da seid / Was darf's sein?") ohne eigenen inhaltlichen SEO-Wert. Der H1 ist "Hey, schön dass ihr da seid" -- das hat null Keyword-Relevanz. Die wichtigste Seite der Domain verschenkt ihr SEO-Potenzial.
- **Problem:** Footer-Links zeigen noch auf alte/flache URLs (`/spezialitaeten`, `/ueber-uns`, `/catering#ablauf-business`, `/catering#ablauf-privat`), die z.T. nicht mehr den aktuellen Routen entsprechen.
- **Fehlende Seiten:**
  - Keine dedizierte **Kontakt-Seite** (nur eingebettetes Formular auf der Catering-Seite)
  - Keine eigene Seite für **"Hochzeit Catering Düsseldorf"** oder **"Geburtstag Catering Düsseldorf"** -- diese Anlässe werden nur als Listenpunkte erwähnt
  - Keine Seite **"Firmen-Catering"** oder **"Business Catering"** als eigenständige Landing Page

---

## 2. SEO Keyword-Abdeckung

| Keyword | Status | Wo abgedeckt? |
|---|---|---|
| **catering düsseldorf** | Teilweise | Catering-Seite Title + H1 enthält "Catering ... in Düsseldorf" |
| **arabisches catering düsseldorf** | Gut | Title: "Arabisches Catering Düsseldorf" |
| **buffet catering düsseldorf** | Schwach | Nur in Keywords-Meta, nicht in Titles/H1/H2 |
| **event catering düsseldorf** | Schwach | Nur als Meta-Keyword, kein eigener Content |
| **corporate catering düsseldorf / firmen catering** | Schwach | Blog-Artikel vorhanden, aber keine Landing Page |
| **birthday catering düsseldorf / geburtstag catering** | Nicht abgedeckt | Nur als Listenpunkt in "Private Feiern" erwähnt |
| **hochzeit catering düsseldorf** | Nicht abgedeckt | Nur als Listenpunkt |
| **office lunch catering düsseldorf** | Teilweise | Blog-Artikel vorhanden, aber keine Landing Page |
| **veganes catering düsseldorf** | Gut | 2 Blog-Artikel, Menüs erwähnen vegane Optionen |
| **arabisches restaurant düsseldorf** | Teilweise | Restaurant-Seite Title ist gut |
| **lieferservice düsseldorf** | Schwach | Nur im globalen index.html Title |

**Fehlende Keywords:**
- "Buffet bestellen Düsseldorf"
- "Fingerfood Catering Düsseldorf"
- "Hochzeit Catering arabisch"
- "Catering ab 20 Personen Düsseldorf"
- "Halal Catering Düsseldorf"
- "Orientalisches Catering NRW"

---

## 3. Seitenspezifische SEO-Analyse

### Landing Page (/)
- **Title:** "Sattuni – Arabische Küche & Catering in Düsseldorf" -- Gut
- **H1:** "Hey, schön dass ihr da seid" -- **Schlecht**, kein Keyword
- **Content:** Minimal, nur Mode-Auswahl-Karten. Kein indexierbarer Text.
- **Empfehlung:** H1 ändern zu etwas Keyword-relevantes, z.B. "Arabische Küche & Catering in Düsseldorf". Kurzer einleitender Text unter der Mode-Auswahl hinzufügen.

### Catering Page (/catering)
- **Title:** "Arabisches Catering Düsseldorf – Events & Feiern | Sattuni" -- Gut
- **H1:** "Arabisches Catering für Events & Feiern in Düsseldorf" -- Gut
- **H2s:** "Für welche Anlässe eignet sich unser Catering?" / "Unser Catering-Konzept" / "So läuft euer Catering ab" / "Was unsere Buffets auszeichnet" -- Gute Struktur
- **Structured Data:** CateringBusiness Schema vorhanden -- Gut
- **Schwächen:**
  - Meta Description (155 Zeichen) ist okay, könnte mehr USPs enthalten
  - Die Quick-Nav verlinkt auf `/menus` statt `/catering/menus` (Zeile 258)
  - Kein interner Link zum Blog von dieser Seite aus (abgesehen von der Navigation)

### Restaurant Page (/restaurant)
- **Title:** "Restaurant & Lieferservice | Sattuni – Arabische Küche Düsseldorf" -- Gut
- **H1:** Befindet sich im RestaurantHero-Komponent (nicht geprüft, aber Title ist gut strukturiert)
- **Schwächen:** Keine Breadcrumbs auf der Restaurant-Seite

### Menüs & Preise (/catering/menus)
- **Title:** "Menüs & Preise | Sattuni Catering Düsseldorf" -- Gut
- **H1:** "Menüs & Preise" -- Okay, könnte spezifischer sein
- **Schwäche:** Keine Breadcrumbs, kein Structured Data (FAQ oder Menu Schema)

### Blog (/catering/blog)
- **Title:** "Blog - Sattuni | Geschichten, Rezepte & Einblicke aus unserer Küche" -- Okay
- **7 Artikel** vorhanden, alle mit SEOHead und BlogPostJsonLd
- **Gut:** Artikel decken relevante Long-Tail-Keywords ab
- **Schwäche:** Blog wird nicht von der Catering-Hauptseite verlinkt (nur über Navigation)

### Galerie (/catering/galerie)
- **Gut:** Viele Bilder vorhanden, was für visuelles SEO (Image Search) hilft
- **Schwäche:** Alt-Texte und Bild-SEO nicht geprüft

---

## 4. Conversion-Optimierung

**Was gut funktioniert:**
- Mobile CTA-Bar fixiert am unteren Bildschirmrand ("Catering anfragen") -- Sehr gut
- Google Review Badge (4.9/5, 228 Bewertungen) an mehreren Stellen -- Starkes Trust-Signal
- Firmen-Logos (WHU, Leonardo, Rockwell) als Social Proof -- Gut
- 4-Schritte Ablauf-Sektion -- Reduziert Unsicherheit
- FAQ-Sektion -- Beantwortet Einwände
- Formular mit Fortschrittsanzeige und Auto-Save -- Gut
- Facebook Pixel + Google Analytics + Google Ads Conversion -- Tracking ist solid

**Verbesserungspotenzial:**
- **Landing Page (/)**: Kein CTA für Catering-Anfrage. User müssen erst klicken, dann scrollen. Ein direkter "Catering anfragen" Button fehlt auf der Startseite.
- **Telefonnummer**: Auf der Catering-Seite ist die Telefonnummer nur im Menüs-Bereich und Footer sichtbar, nicht prominent im Hero oder im Seitenbereich.
- **WhatsApp**: WhatsApp-Float-Button ist vorhanden, aber die Sichtbarkeit/Konfiguration ist unklar.
- **Menüs-Seite**: Der CTA "Catering anfragen" verlinkt auf `/catering` statt direkt zum Formular (`/catering?scrollTo=contact`).
- **Keine Preis-Transparenz im Hero**: Der Hero erwähnt keine Preise. Ein "Ab XX€ pro Person" könnte Conversions steigern.
- **Testimonials/Reviews**: Auf der Catering-Seite sind CustomerReviews vorhanden, aber nicht unmittelbar neben dem Formular platziert.

---

## 5. B2B vs. B2C Kommunikation

**Aktueller Stand:**
- Die Catering-Seite hat eine **duale Einstiegs-Sektion** mit "Unternehmen & Teams" und "Private Feiern" Karten -- das ist gut.
- Beide Karten listen relevante Anlässe auf.
- Der finale CTA-Bereich hat auch zwei separate Buttons ("Catering für Unternehmen anfragen" / "Catering für private Feiern anfragen").

**Schwächen:**
- Beide Buttons führen zum **selben Formular** -- kein Unterschied im Ablauf.
- Es gibt keine dedizierten Landing Pages für B2B (z.B. `/catering/unternehmen`) oder B2C (z.B. `/catering/private-feiern`).
- Der Blog-Content ist stark B2B-lastig (Office Lunch, Workshop, Kundenbesuch, Firmenfeiern). Nur 1-2 Artikel sprechen B2C an.
- **Empfehlung:** Im Formular könnte der Anlass vorausgewählt werden, wenn der User über den B2B- oder B2C-Button kommt. Langfristig: separate Landing Pages für "Firmen-Catering" und "Hochzeits-Catering".

---

## 6. Blog & Content-Chancen

**Aktueller Blog-Status:**
- 7 Artikel, gut geschrieben (Julia Voice), mit Bildern und JSON-LD
- Themen decken primär B2B ab
- Interne Verlinkung zur Catering-Seite vorhanden

**10 Blog-Themen mit SEO-Potenzial in Düsseldorf:**

1. **"Hochzeit Catering Düsseldorf – Arabisches Buffet für eure Feier"** (fehlt komplett, hohes Suchvolumen)
2. **"Geburtstag Catering Düsseldorf – So wird die Feier unvergesslich"** (fehlt, B2C)
3. **"Halal Catering Düsseldorf – Was ihr wissen müsst"** (Nischen-Keyword, kaum Konkurrenz)
4. **"Sommerfest Catering: Ideen für euer Firmen-Sommerfest"** (saisonal, B2B)
5. **"Fingerfood für Events – 10 orientalische Häppchen, die ankommen"** (Keyword: Fingerfood Catering)
6. **"Weihnachtsfeier Catering Düsseldorf – Planung & Menü-Ideen"** (saisonal, hohes Volumen)
7. **"Buffet für 50 Personen – Was kostet Catering wirklich?"** (Preis-Transparenz, Conversion)
8. **"Veganes Hochzeitsbuffet: Arabische Küche als perfekte Lösung"** (Nische)
9. **"Catering Düsseldorf Umgebung – Lieferung nach Neuss, Ratingen, Meerbusch"** (lokales SEO)
10. **"Team-Event Ideen Düsseldorf: Essen als Teambuilding"** (B2B, Long-Tail)

---

## 7. Technisches SEO

**Was gut funktioniert:**
- Pre-Rendering via `vite-plugin-html-prerender` für alle kritischen Routen
- Sitemap.xml mit Image-Tags vorhanden
- robots.txt korrekt konfiguriert
- Structured Data (Restaurant, CateringBusiness, BlogPosting) auf relevanten Seiten
- Canonical URLs mit Trailing Slashes konsistent
- hreflang-Tags vorhanden
- Facebook Domain Verification eingerichtet
- Google Analytics + Google Ads + Meta Pixel korrekt implementiert

**Probleme:**
1. **Duplicate OG-Tags**: `index.html` setzt globale OG-Tags, und `SEOHead` setzt per-page OG-Tags via react-helmet. Crawlers die kein JS ausführen sehen die globalen Tags -- aber Pre-Rendering sollte das lösen.
2. **Inkonsistente Structured Data**: Landing Page hat `aggregateRating` mit 228 Reviews, index.html hat 127 Reviews. Sollte konsistent sein.
3. **Footer Quick-Links** zeigen auf alte/nicht-prefixed URLs (`/spezialitaeten`, `/ueber-uns`). Diese funktionieren nur als Legacy-Routen und könnten Crawl-Budget verschwenden.
4. **Quick-Nav auf Catering-Seite** verlinkt auf `/menus` statt `/catering/menus`.
5. **Sitemap lastmod** ist überall `2026-01-31`, auch für ältere Blog-Artikel. Sollte das tatsächliche Änderungsdatum widerspiegeln.
6. **Keine `<link rel="canonical">` in index.html** (nur per SEOHead gesetzt, was für Nicht-JS-Crawler problematisch sein könnte, wenn Pre-Rendering nicht alle Seiten abdeckt).
7. **BlogPost7** (Firmenfeiern) fehlt in der Sitemap.

---

## 8. Priorisierter Aktionsplan

### Quick Wins (hoher Impact, wenig Aufwand)

1. **Landing Page H1 optimieren**: "Hey, schön dass ihr da seid" → "Arabische Küche & Catering in Düsseldorf" + kurzen SEO-Text darunter
2. **Footer-Links korrigieren**: Alte URLs (`/spezialitaeten`, `/ueber-uns`) durch korrekte prefixed URLs ersetzen (`/restaurant/spezialitaeten`, `/catering/ueber-uns`)
3. **Quick-Nav Link-Fix**: `/menus` → `/catering/menus` auf der Catering-Seite (Zeile 258)
4. **Structured Data vereinheitlichen**: aggregateRating konsistent auf 228 Reviews / 4.9 setzen
5. **Menüs-Seite CTA verbessern**: "Catering anfragen" → Link auf `/catering?scrollTo=contact` statt `/catering`
6. **Sitemap aktualisieren**: BlogPost7 (Firmenfeiern) hinzufügen, lastmod-Daten korrigieren
7. **Breadcrumbs auf Menüs-Seite hinzufügen**

### Mittelfristige Verbesserungen

8. **Blog-Artikel für B2C schreiben**: "Hochzeit Catering Düsseldorf" und "Geburtstag Catering Düsseldorf" als priorisierte Artikel
9. **Preis-Hinweis im Catering-Hero**: "Ab XX€ pro Person" als Trust-Signal
10. **Interne Verlinkung stärken**: Von der Catering-Seite direkt zu passenden Blog-Artikeln verlinken (z.B. bei "Unternehmen & Teams" → Blog-Artikel zu Office Lunch)
11. **Telefonnummer prominenter auf Catering-Seite**: Im Hero oder als Sticky-Element
12. **Menüs-Seite H1 optimieren**: "Menüs & Preise" → "Catering Menüs & Preise – Arabisches Buffet Düsseldorf"

### Langfristige SEO-Chancen

13. **Dedizierte Landing Pages** für Top-Keywords: `/catering/firmen`, `/catering/hochzeit`, `/catering/geburtstag`
14. **Blog-Content-Kalender**: 1-2 Artikel pro Monat, saisonale Themen (Sommerfest, Weihnachtsfeier)
15. **Lokales SEO ausbauen**: Seiten für Düsseldorf-Umgebung (Neuss, Ratingen, Meerbusch)
16. **Google Business Profile optimieren** (extern, nicht auf der Website)
17. **Newsletter implementieren** (aktuell als "Coming Soon" deaktiviert) für Kundenbindung und Wiederkehr

