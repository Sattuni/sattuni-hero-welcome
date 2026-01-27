
# Plan: Pre-Rendering für bessere SEO & Bot-Lesbarkeit

## Zusammenfassung des Problems

Aktuell ist eure Website eine **Single Page Application (SPA)** – das bedeutet, wenn jemand (oder ein Bot) die Seite aufruft, wird zuerst nur eine fast leere HTML-Datei geladen. Der eigentliche Inhalt wird erst durch JavaScript im Browser erzeugt.

**Das Problem:** KI-Bots wie ChatGPT, Perplexity oder Social-Media-Crawler (LinkedIn, Facebook) führen oft kein JavaScript aus. Sie sehen also nur eine leere Seite – keinen Blog-Text, keine Überschriften, nichts.

**Die Lösung:** Pre-Rendering – beim Build-Prozess werden fertige HTML-Dateien für jede Seite erstellt. Bots bekommen dann sofort lesbaren Inhalt.

---

## Was wird gemacht?

### 1. Pre-Rendering-Plugin installieren

Wir fügen `vite-plugin-prerender` oder `vite-react-ssg` zum Projekt hinzu. Diese Tools erstellen beim Build automatisch fertige HTML-Dateien für alle wichtigen Seiten.

### 2. Build-Konfiguration anpassen

Die `vite.config.ts` wird erweitert, um folgende Seiten vorab zu rendern:

**Blog-Artikel:**
- `/catering/blog`
- `/catering/blog/buero-lunch-ideen`
- `/catering/blog/was-bedeutet-mezze`
- `/catering/blog/workshop-catering`
- `/catering/blog/vegane-arabische-klassiker`
- `/catering/blog/veganes-office-buffet-veganuary`
- `/catering/blog/kundenbesuch-catering-abwechslung`

**Hauptseiten:**
- `/` (Landing)
- `/catering`
- `/catering/galerie`
- `/catering/menus`
- `/catering/ueber-uns`
- `/restaurant`
- `/restaurant/spezialitaeten`
- `/restaurant/speisekarte`

### 3. react-helmet durch react-helmet-async ersetzen

Für korrektes Pre-Rendering muss das `react-helmet` Package durch `react-helmet-async` ersetzt werden. Dieses unterstützt Server-Side-Rendering und Pre-Rendering.

### 4. Sitemap aktualisieren

Die `public/sitemap.xml` wird ergänzt um alle Blog-URLs mit korrekten Pfaden unter `/catering/blog/...`.

---

## Ergebnis

Nach dieser Änderung:

| Vorher | Nachher |
|--------|---------|
| ChatGPT sieht leere Seite | ChatGPT kann Blog-Artikel lesen und zitieren |
| LinkedIn-Vorschau zeigt nur Standardtext | LinkedIn zeigt Artikel-Titel, Beschreibung und Bild |
| Google muss JavaScript rendern | Google bekommt fertiges HTML (schnellere Indexierung) |
| Perplexity findet keine Inhalte | Perplexity kann eure Expertise als Quelle nutzen |

---

## Technische Details

### Neue Dependencies

```json
{
  "devDependencies": {
    "vite-plugin-prerender": "^latest",
    "@prerenderer/renderer-puppeteer": "^latest"
  },
  "dependencies": {
    "react-helmet-async": "^2.0.x"
  }
}
```

### Angepasste vite.config.ts

```typescript
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/catering',
        '/catering/blog',
        '/catering/blog/buero-lunch-ideen',
        '/catering/blog/was-bedeutet-mezze',
        // ... alle weiteren Seiten
      ],
    }),
  ],
});
```

### Migrationsschritte für react-helmet-async

1. `react-helmet` entfernen
2. `react-helmet-async` installieren
3. `HelmetProvider` im `App.tsx` hinzufügen
4. Alle `import { Helmet } from "react-helmet"` zu `react-helmet-async` ändern

### Betroffene Dateien

**Konfiguration:**
- `package.json` – neue Dependencies
- `vite.config.ts` – Pre-Render-Plugin

**React-Helmet Migration (~15 Dateien):**
- `src/App.tsx` – HelmetProvider hinzufügen
- `src/pages/Blog.tsx`
- `src/pages/BlogPost1.tsx` bis `BlogPost6.tsx`
- `src/pages/Catering.tsx`
- `src/pages/Landing.tsx`
- `src/pages/Restaurant.tsx`
- `src/pages/Specialties.tsx`
- `src/pages/Speisekarte.tsx`
- `src/pages/AboutUs.tsx`
- `src/pages/CateringGallery.tsx`
- `src/pages/Menus.tsx`
- `src/pages/Impressum.tsx`
- `src/pages/Datenschutz.tsx`

**Sitemap:**
- `public/sitemap.xml` – Blog-URLs hinzufügen

---

## Zeitaufwand

Die Implementierung umfasst ca. 20 Dateiänderungen und ist in einem einzigen Chat-Durchlauf umsetzbar.
