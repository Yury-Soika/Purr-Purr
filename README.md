# Purr Purr

Live preview: https://demo.plexrs.com/purr-purr/

Repository: https://github.com/Yury-Soika/Purr-Purr

Independent Polish/English landing-page concept for Purr Purr in Warsaw. Next.js App Router, TypeScript and Tailwind CSS 4. No booking backend, analytics, or third-party image/font dependencies.

## Run

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

The default build exports to `out/`. To build for the PlexRS hub:

```sh
NEXT_PUBLIC_BASE_PATH=/purr-purr npm run build
```

From the sibling `plex-demo` project, `npm run build:landings -- purr-purr` rebuilds and copies the export. The hub rewrites `/purr-purr/` to its static index and deploys through its existing Passenger application. See that project's deploy.sh. The hub card thumbnail is a browser screenshot of this project.

## Content

- `app/menu.ts`: selected menu entries, variants, prices, and translations.
- `app/page.tsx`: bilingual copy and contact links.
- `public/menu-purr-purr.pdf`: original, unchanged, 21-page menu supplied by the user.
- `public/images`: photographs extracted from that PDF and optimized as WebP. These are actual café menu images, not synthetic venue photography.
- The decorative sleeping cat is an original SVG illustration, not a portrait of a particular resident cat.
- `CONTENT_SOURCES.md`: source provenance and unverified information.

The demo explicitly identifies itself as an independent, unofficial concept and uses noindex metadata. Current opening hours are intentionally not asserted because public listings conflict. Contact links open the real café's phone, social profiles, or directions. No reservation is submitted by the site.

Local fonts are Inter and Playfair Display, distributed under the SIL Open Font License. See `public/fonts/OFL-*.txt`.

## Verified release — 2026-09-29

Production build, ESLint and TypeScript pass. Browser checks passed locally and on the live domain: Polish/English copy and document language, all five menu filters, PDF download, phone link, mobile navigation, loaded images, hub card, and no horizontal overflow at 320, 390, 768 and 1024 px. No JavaScript errors or failed HTTP responses were observed in those flows. Existing hub project routes also returned HTTP 200.
