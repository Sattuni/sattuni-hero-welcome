

## Analyse der Catering-Seite: 80/20-Optimierung

### Aktuelle Struktur (13 Sektionen)

```text
1. Hero                        ← BEHALTEN (Kernbotschaft + CTAs)
2. Quick Navigation (sticky)   ← BEHALTEN (Orientierung)
3. Anlässe (B2B/B2C Cards)     ← BEHALTEN, kürzen
4. Catering-Konzept (3 Absätze + Deko-Bilder) ← ENTFERNEN (redundant)
5. So läuft's ab (4 Schritte)  ← BEHALTEN, Texte kürzen
6. PraxisBeispiele             ← BEHALTEN (Social Proof)
7. Buffet-Qualitäten (6 Punkte)← ENTFERNEN (redundant mit Hero + Konzept)
8. Gallery Teaser              ← BEHALTEN (visuell stark)
9. Customer Reviews            ← BEHALTEN (Vertrauen)
10. Partner-Logos              ← BEHALTEN, kompakter
11. Booking Form               ← BEHALTEN (Conversion-Ziel)
12. FAQ                        ← BEHALTEN (SEO + Conversion)
13. Final CTA Section          ← ENTFERNEN (Formular existiert bereits)
```

### Was wird entfernt/gekürzt

**Entfernen (3 Sektionen):**
- **"Unser Catering-Konzept"** (Sektion 4): Wiederholt Hero- und Qualitäts-Infos. Die Kernaussagen (frisch, ab 20 Personen, vegan/vegetarisch) stehen bereits im Hero und in den Anlässe-Cards.
- **"Was unsere Buffets auszeichnet"** (Sektion 7): 6 Bullet Points, die dasselbe sagen wie Konzept + Hero. Die stärksten 3 Punkte werden als kompakte Trust-Badges in die Anlässe-Sektion integriert.
- **Final CTA Section** (Sektion 13): Doppelt zum Booking Form direkt darüber. Das Formular + Mobile CTA Bar reichen.

**Kürzen:**
- **Anlässe-Sektion**: Einleitungstext auf 1 Satz. Dafür 3 kompakte Trust-Badges hinzufügen (frisch zubereitet, 200+ Caterings, ab 20 Personen).
- **Prozess-Schritte**: Beschreibungen auf max. 1 kurzen Satz pro Schritt.
- **Partner-Logos Sektion**: Überschrift kürzen.

### Neue kompakte Struktur (10 Sektionen)

```text
1. Hero (unverändert)
2. Quick Navigation (unverändert)
3. Anlässe + Trust-Badges (gekürzt)
4. So läuft's ab (gekürzt)
5. PraxisBeispiele (unverändert)
6. Gallery Teaser (unverändert)
7. Customer Reviews (unverändert)
8. Partner-Logos (kompakter)
9. Booking Form (unverändert)
10. FAQ (unverändert)
```

### Technische Umsetzung

Nur `src/pages/Catering.tsx` wird bearbeitet:
- Sektion 4 (Zeilen 392-460) komplett entfernen inkl. dekorativer Kräuter-Bilder
- Sektion 7 (Zeilen 510-540) entfernen, stattdessen 3 Trust-Badges nach den Anlässe-Cards einfügen
- Sektion 13 (Zeilen 593-626) entfernen
- Imports für `mintLeaves`, `parsleyLeaves`, `lemonSlices` entfernen (werden nicht mehr gebraucht)
- Prozess-Schritte-Texte kürzen
- Anlässe-Einleitung kürzen
- `buffetQualities` Array entfernen

