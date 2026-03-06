

# Plan: Bilder auf der Catering-Seite optimieren

## Übersicht

Die Catering-Seite wirkt aktuell textlastig und visuell arm. Es fehlen Bilder, die den B2B- und B2C-Kontext untermauern sowie die Qualität des Caterings zeigen. Mit den vorhandenen Galerie-Assets lässt sich das effektiv beheben.

---

## Geplante Änderungen

### 1. Bilder für "Beispiele aus der Praxis"

Passende Bilder direkt in die zwei Praxis-Beispiel-Karten integrieren:

| Beispiel | Bild | Quelle |
|----------|------|--------|
| Veganuary-Teamlunch | Office-Buffet-Setup | `office-catering-40.jpg` oder `buffet-vegan-chafing.jpg` |
| 60. Geburtstag | Festliches Buffet | `geburtstagsbuffet-90.jpg` oder `geburtstagsbuffet-hauptgang.jpg` |

**Umsetzung:** Jeweils ein `<img>` mit `aspect-ratio: 16/9` oder `3/2` oberhalb des Textes in den Cards.

---

### 2. Galerie-Teaser-Sektion hinzufügen

Eine kompakte Vorschau der Catering-Galerie einfügen, die 3-4 randomisierte Bilder zeigt und zur vollständigen Galerie verlinkt.

**Position:** Zwischen "Was unsere Buffets auszeichnet" und "Customer Reviews"

**Optionen:**
- Die bestehende `BuffetGallery`-Komponente nutzen (Carousel)
- Oder eine neue Teaser-Grid-Komponente mit 3 Bildern (1 Buffet, 1 Dip, 1 Fingerfood)

---

### 3. Optionale Bilder für B2B/B2C-Einstiegsboxen

Dezente Hintergrundbilder oder kleine Illustrationen für die "Unternehmen & Teams" und "Private Feiern"-Karten:

| Box | Bildidee |
|-----|----------|
| B2B | `meeting-catering-15.jpg` oder `workshop-catering.jpg` |
| B2C | `geburtstagsbuffet-90.jpg` oder `buffet-terrasse.jpg` |

**Alternative:** Icons belassen, aber auf Hover ein dezentes Bild einblenden.

---

## Technische Umsetzung

### Dateien zu bearbeiten

1. **`src/pages/Catering.tsx`**
   - Import der benötigten Bilder aus `@/assets/gallery/buffets/`
   - "Beispiele aus der Praxis"-Karten mit Bildern erweitern
   - Optional: `BuffetGallery`-Komponente einbinden

2. **Optional: Neue Komponente `CateringGalleryTeaser.tsx`**
   - 3-4 Bilder in einem Grid
   - Link zur `/catering/galerie`-Seite

---

## Vorgeschlagene Bild-Auswahl

```text
Praxis-Beispiele:
├── Business: office-catering-40.jpg (modernes Büro-Setup)
└── Privat: geburtstagsbuffet-90.jpg (festliches Buffet)

Galerie-Teaser:
├── buffet-elegant-saal.jpg (Buffet-Kategorie)
├── hummus.jpg oder tabouleh.jpg (Dips-Kategorie)
└── falafel.jpg (Fingerfood-Kategorie)
```

---

## Zusammenfassung

| Änderung | Aufwand | Priorität |
|----------|---------|-----------|
| Bilder in Praxis-Beispiele | Gering | Hoch |
| Galerie-Teaser-Sektion | Mittel | Mittel |
| B2B/B2C-Box-Bilder | Gering | Optional |

**Ergebnis:** Die Catering-Seite wird visuell ansprechender, die Beispiele werden glaubwürdiger und die vorhandene Galerie erhält mehr Sichtbarkeit.

