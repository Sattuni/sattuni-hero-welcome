

# Plan: Pre-Rendering für ChatGPT & Bot-Lesbarkeit (Vollständige Implementierung)

## Problem-Ursache

Die bisherige Arbeit hat `react-helmet-async` migriert, aber das **eigentliche Pre-Rendering wurde nie implementiert**:
- Kein Pre-Rendering-Plugin in `vite.config.ts`
- Kein GitHub Actions Workflow für den Build mit Puppeteer
- Die Seite liefert nur `<div id="root"></div>` – komplett leer für Bots

---

## Was wird gemacht?

### 1. Pre-Rendering-Plugin installieren und konfigurieren

**Neue Dependencies in `package.json`:**
- `@prerenderer/rollup-plugin` – das Vite-kompatible Pre-Rendering-Plugin
- `@prerenderer/renderer-puppeteer` – der Headless-Browser-Renderer
- `puppeteer` – der Browser selbst

**Anpassung `vite.config.ts`:**
- Plugin hinzufuegen mit allen wichtigen Routen
- Post-Processing: localhost-URLs durch sattuni.de ersetzen

### 2. GitHub Actions Workflow erstellen

Da GitHub Pages keinen Browser starten kann, brauchen wir einen Workflow der:
1. Den Code auscheckt
2. Node.js mit Puppeteer-Dependencies installiert
3. `vite build` ausfuehrt (mit Pre-Rendering)
4. Die generierten statischen HTML-Dateien auf GitHub Pages deployed

**Neue Datei:** `.github/workflows/deploy.yml`

### 3. Routen die pre-gerendert werden (Empfehlung)

**Blog (Prioritaet 1 – fuer ChatGPT/Perplexity):**
- `/catering/blog`
- `/catering/blog/buero-lunch-ideen`
- `/catering/blog/was-bedeutet-mezze`
- `/catering/blog/workshop-catering`
- `/catering/blog/vegane-arabische-klassiker`
- `/catering/blog/veganes-office-buffet-veganuary`
- `/catering/blog/kundenbesuch-catering-abwechslung`

**Hauptseiten (Prioritaet 2 – fuer Google/LinkedIn):**
- `/` (Landing)
- `/catering`
- `/catering/galerie`
- `/catering/menus`
- `/catering/ueber-uns`
- `/restaurant`
- `/restaurant/spezialitaeten`
- `/restaurant/speisekarte`

**Legal/Shared:**
- `/impressum`
- `/datenschutz`

---

## Technische Details

### Neue Dependencies (package.json)

```json
{
  "devDependencies": {
    "@prerenderer/rollup-plugin": "^0.4.0",
    "@prerenderer/renderer-puppeteer": "^1.2.0",
    "puppeteer": "^21.0.0"
  }
}
```

### Angepasste vite.config.ts

```typescript
import prerender from '@prerenderer/rollup-plugin';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      routes: [
        '/',
        '/catering',
        '/catering/blog',
        '/catering/blog/buero-lunch-ideen',
        '/catering/blog/was-bedeutet-mezze',
        '/catering/blog/workshop-catering',
        '/catering/blog/vegane-arabische-klassiker',
        '/catering/blog/veganes-office-buffet-veganuary',
        '/catering/blog/kundenbesuch-catering-abwechslung',
        '/catering/galerie',
        '/catering/menus',
        '/catering/ueber-uns',
        '/restaurant',
        '/restaurant/spezialitaeten',
        '/restaurant/speisekarte',
        '/impressum',
        '/datenschutz',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 3000, // Warten bis React geladen hat
      },
      postProcess(renderedRoute) {
        // localhost durch echte Domain ersetzen
        renderedRoute.html = renderedRoute.html
          .replace(/http:\/\/localhost:\d+/g, 'https://sattuni.de')
          .replace(/http:/g, 'https:');
        return renderedRoute;
      },
    }),
  ].filter(Boolean),
}));
```

### GitHub Actions Workflow (.github/workflows/deploy.yml)

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Puppeteer browser
        run: npx puppeteer browsers install chrome
      
      - name: Build with pre-rendering
        run: npm run build
        env:
          CI: true
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Ergebnis nach Implementierung

| Vorher | Nachher |
|--------|---------|
| ChatGPT sieht: `<div id="root"></div>` | ChatGPT sieht: vollstaendiger Blog-Text als HTML |
| LinkedIn-Vorschau: nur Meta-Tags | LinkedIn-Vorschau: Titel + Beschreibung + Bild |
| Google: muss JavaScript rendern | Google: bekommt fertiges HTML |
| Perplexity: keine Inhalte | Perplexity: kann euch als Quelle zitieren |

---

## Betroffene Dateien

| Datei | Aktion |
|-------|--------|
| `package.json` | Dependencies hinzufuegen |
| `vite.config.ts` | Pre-Render-Plugin konfigurieren |
| `.github/workflows/deploy.yml` | Neuer Workflow fuer Build + Deploy |

---

## Wichtige Hinweise

1. **Erster Build dauert laenger:** Puppeteer muss jede Seite einzeln rendern (~20 Seiten x ~3 Sek = ~1 Min extra)

2. **Lokaler Test:** Pre-Rendering laeuft nur bei `npm run build` (production mode), nicht bei `npm run dev`

3. **GitHub Pages Konfiguration:** Nach dem ersten Workflow-Run muss in den Repository-Settings unter "Pages" die Source auf "GitHub Actions" gestellt werden

4. **Dynamische Inhalte:** Seiten die sich auf Nutzer-Sessions verlassen (z.B. eingeloggte Bereiche) sollten NICHT pre-gerendert werden – das betrifft euch aber nicht

