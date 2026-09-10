# Bentlie oefensite

Oefenproject om te leren een website te bouwen en onderhouden met AI, als
voorbereiding op het vervangen van de echte Bentlie-website (nu op
WordPress).

## Draaien

```bash
npm install
npm run dev
```

Open daarna http://localhost:4321 in de browser.

## Structuur

- `src/pages/` — de pagina's (home, over-ons, kennisbank).
- `src/content/articles/` — de kennisbank-artikelen, één Markdown-bestand
  per artikel. Dit is de map die later via een eenvoudige beheeromgeving
  (CMS) bewerkbaar wordt zonder code aan te raken.
- `src/layouts/BaseLayout.astro` — gedeelde pagina-opmaak (header/footer).
- `src/styles/global.css` — de stijl van de site.

## Een artikel toevoegen (nu al, zonder CMS)

Maak een nieuw `.md`-bestand aan in `src/content/articles/` met dezelfde
frontmatter-velden als de bestaande artikelen (`title`, `description`,
`pubDate`, `tags`). Het verschijnt automatisch op de kennisbank-pagina.

## Volgende stappen

1. Beheeromgeving (CMS) toevoegen zodat artikelen via een webformulier
   bewerkt kunnen worden in plaats van via bestanden.
2. Live zetten (bijv. via Netlify of Vercel).
3. Zodra dit vertrouwd aanvoelt: dezelfde aanpak toepassen op de echte
   Bentlie-site, met de bevindingen uit de SEO/GEO/AEO-audit als leidraad.
