# MOMO Kinderhaus – Startseite (Grundstruktur)

Erster Aufschlag: die Startseite als schlichte, textbetonte Seite genau nach dem Screenshot-Layout. Inhalte, Bilder und Typografie werden später verfeinert.

## Aufbau der Startseite (von oben nach unten)

1. Kopfblock (linksbündig, fetter Text, kein klassisches Header-Menü)
   - "MOMO Kinderhaus" / "1-3 Jahre"
   - "Mo-Fr. 07.45 - 13.45 Uhr" / "Mozartstraße 4, 71686 Remseck am Neckar"
2. Navigation als Textzeile: "ÜBER UNS // PREISE // KONTAKT" – jeweils Links auf eigene Seiten
3. Großes Bildfeld (breite, angeschnittene Illustration mit hellgrauem Hintergrund)
4. Zeile "Eröffnung Januar 2027"
5. Eingerückte Zeile "bewusst familiär gestaltet: 9 Kinder, 3 Pädagoginnen, viel Geborgenheit."

Viel Weißraum, keine zusätzlichen Sektionen, kein Footer-Block – bewusst reduziert wie im Screenshot.

## Weitere Seiten

Für die Navigationslinks werden drei schlanke Platzhalterseiten angelegt: /ueber-uns, /preise, /kontakt – gleicher Kopfblock und Navigation, darunter Platzhaltertext zum späteren Befüllen.

## Bild

Das hochgeladene Bild ist ein Mockup-Screenshot, also nicht direkt verwendbar. Für den Bildbereich wird zunächst eine Illustration im gleichen Stil (handgezeichnete Figuren, Artischocke, hellgrauer Hintergrund) erzeugt und später leicht durch euer echtes Motiv ersetzbar gehalten. Wenn ihr die Originaldatei habt, könnt ihr sie einfach hochladen und wir tauschen sie aus.

## Technisches

- Neue Route in `src/routes/index.tsx` (Platzhalterseite wird ersetzt), plus `ueber-uns.tsx`, `preise.tsx`, `kontakt.tsx`.
- Gemeinsame Komponenten `SiteHeader` (Kopfblock + Textnavigation) unter `src/components/`.
- Farb- und Typografie-Tokens in `src/styles.css`: weißer Hintergrund, schwarzer Text, helles Grau für das Bildfeld; serifenlose, fette Schrift als Basis.
- Pro Seite eigene `head()`-Metadaten (Titel, Beschreibung, og-Tags).
