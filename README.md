# Runa Natura 2.0 – Starter

Neues, responsives Frontend für Runa Natura mit Next.js 15, React 19, TypeScript und Tailwind CSS.

## Lokal starten

1. Node.js 20 oder neuer installieren.
2. Im Projektordner `npm install` ausführen.
3. `npm run dev` ausführen.
4. Im Browser `http://localhost:3000` öffnen.

## Enthalten

- Startseite mit natürlichem Design in Salbeigrün und Creme
- Einzel- und Gruppencoaching-Seite
- Workshop-Seite
- Community-Vorschau
- Buchungsformular als **nicht angebundene Demo**
- Login-, Konto- und Administrations-Platzhalter
- Datenbankentwurf unter `supabase/schema.sql`

## Wichtig: Noch nicht produktionsbereit

Das Formular speichert **keine** Buchungen. Login, Community-Beiträge, Admin-Berechtigungen, Bezahlungen und echte Terminverfügbarkeiten sind **noch nicht implementiert**. Es gibt keine Live-Buchungen und keine aktiven Zahlungsdienste. Die Datenbankdatei ist ein Schemaentwurf, kein vollständig abgesichertes Produktionsschema.

## Nächste Schritte

1. Supabase-Projekt einrichten und Umgebungsvariablen konfigurieren.
2. Sichere Row-Level-Security-Policies und serverseitige Rollenprüfung implementieren.
3. Angebots- und Terminverwaltung mit realen Daten umsetzen.
4. Buchungslogik mit transaktionaler Kapazitätsprüfung, Überschneidungsschutz und Reservierungsablauf implementieren.
5. Zahlungsanbieter für TWINT/Karten integrieren; signierte Webhooks und idempotente Verarbeitung.
6. E-Mail-Bestätigungen, Stornierungen und Warteliste ergänzen.
7. Community-CRUD, Moderation, Datei-Uploads und Datenschutzprozesse ergänzen.
8. Impressum, Datenschutzerklärung, AGB, Accessibility, Tests, Monitoring, Backups und Domainumstellung.

## Bilder

Der Hero-Bereich verwendet derzeit einen bewusst gekennzeichneten grafischen Platzhalter. Vor dem Livegang eigene, lizenzierte Naturfotos ergänzen.
