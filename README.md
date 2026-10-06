# FRAOL Smart Integrated Agribusiness PLC — Website

Marketing site for the Fraol Kenani Cattle Fattening Project, built from the
approved "Premium Agribusiness" design and the approved
"Website Content and Publishing Guide" (September 2026), which supplies the
public copy, the site structure and the publication rules.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4
**Languages:** English · አማርኛ · Afaan Oromoo · Norsk (switcher in the nav)

---

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build).

---

## Pages

Each nav item is its own route:

| Route | Opening header | Then |
|---|---|---|
| `/` | Full-screen photo hero + approved facts bar | facts · pillars · about · operations · why Fraol · sustainability · partnership · gallery · enquiry |
| `/about` | Cream, two-column, heading left, photo right | pillars · about · sustainability · CTA |
| `/operations` | Cream, left-aligned | intro · five stage process · facts · infrastructure · sub pages · commitment |
| `/operations/cattle-fattening` | White split, photo left | approach checklist · quality objective |
| `/operations/feed-and-fodder` | White split, photo left | feed resources · management priorities · farmer linkages |
| `/sustainability` | Cream, left-aligned | environmental priorities · animal welfare · community and projects · responsible growth |
| `/sustainability/community-impact` | White, centred, gold diamond rule | community goals · development partnership areas |
| `/projects` | Cream, left-aligned | three phase roadmap · development areas · facts · reading note |
| `/partners` | Forest green, centred | partnership routes · information for qualified partners |
| `/documents` | White, centred | publication notice · document categories · verification process · safeguards |
| `/gallery` | Full-bleed photo, bottom-aligned title | nine-image grid · CTA |
| `/contact` | White, heading left + contact chips right | details + enquiry form |
| `/services` | Forest green, centred, four numbered pillar chips | core operations · CTA (linked from Operations) |
| `/process` | Cream, left-aligned, ghost numeral + 5-stage rail | tabbed process · CTA (linked from Operations) |
| `/why-us` | White, centred, typographic | five reasons · sustainability · CTA (linked from About) |

Top level navigation follows the content guide's main menu. `/services`,
`/process` and `/why-us` pre date the guide, stay live, and hang off the parent
they belong to in the nav sub-menus.

Each header lives in `components/headers/` and is built only from strings that
already exist in `i18n.ts`, so no page needs new copy translated four times.
Pages listed in `DARK_TOP_ROUTES` (`components/ui.tsx`) keep the transparent nav
over their dark header until the visitor scrolls.

The nav and footer come from `components/ui.tsx` → `ROUTES`, which supports one
level of sub-menu. Add a page by creating `app/<slug>/page.tsx`, adding a nav
label to `components/i18n.ts` or `components/pagecopy/`, and adding one entry to
`ROUTES`. Labels are resolved by `useLabel()` in `LangContext`, which looks in
both string sets.

---

## Structure

```
Janka_website/
├── app/
│   ├── layout.tsx           # nav + footer + language provider, shared by all pages
│   ├── globals.css          # brand palette + all component styles
│   ├── page.tsx             # home, in the content guide's section order
│   ├── about/ · services/ · process/ · why-us/ · gallery/ · contact/
│   ├── operations/          # + cattle-fattening/ · feed-and-fodder/
│   ├── sustainability/      # + community-impact/
│   ├── projects/ · partners/ · documents/
├── components/
│   ├── i18n.ts              # original copy, 4 languages + the TBD block
│   ├── pagecopy/            # approved content guide copy, 4 languages
│   │   ├── types.ts         # one shape, so all four stay in step
│   │   └── en.ts am.ts om.ts no.ts index.ts
│   ├── LangContext.tsx      # language state + useLabel(), persisted across pages
│   ├── Nav.tsx              # nav bar with sub-menus, logo lockup, language switcher
│   ├── Footer.tsx           # three columns of real routes
│   ├── headers/             # one distinct page header per original route
│   ├── pages/               # the pages added from the content guide
│   ├── CTABand.tsx
│   ├── ui.tsx               # ROUTES, image map, icons
│   └── sections/            # Hero, PillarBand, About, Services, Process, WhyUs,
│                            # Sustainability, Gallery, Contact + blocks.tsx
├── public/logo/             # drop the delivered logo files here
└── README.md
```

`components/sections/blocks.tsx` holds the shared building blocks the added
pages are composed from: `PageIntro` (four header treatments), `NumberedSteps`,
`CardGrid`, `Checklist`, `FactStrip`, `Roadmap`, `DocumentGrid`, `NoteBand`,
`LinkCards` and `ActionBand`.

Sections are reusable: each takes `showHeading` so the home page can render a
section with its own heading while an inner page uses the page header instead.

All copy lives in `components/i18n.ts` and `components/pagecopy/`. Nothing is
hard-coded in the components except image URLs. One TypeScript shape covers all
four languages in each, so a missing translation is a build error rather than a
silent gap.

---

## Logo

Drop the delivered files into `public/logo/` (see `public/logo/README.md`):

| Filename         | From                     | Used for                          |
|------------------|--------------------------|-----------------------------------|
| `fraol-icon.png` | `JANKA_icon_badge.png`   | nav bar mark, favicon, avatar     |
| `fraol-logo.png` | `JANKA_logo_primary.png` | optional — press kit, letterhead  |

The nav deliberately uses the **crest badge**, not the primary lockup: the
primary file stacks crest + wordmark + pillar row + tagline and is unreadable at
46px. The badge sits beside the Poppins type lockup instead.

The file is probed before it is rendered, so a missing logo shows the type
lockup alone rather than a broken-image box.

---

## ⚠️ Before the site goes live

**Operating figures (`components/pagecopy/*.ts` → `facts`)**

These come from the approved content guide and are published with
"approximately". The guide requires final company confirmation of each one:

- [ ] 120 cattle per 90 day production cycle
- [ ] 100,000 hay and fodder bundles a year
- [ ] 5,000 bale warehouse capacity
- [ ] 1.2 hectare operational site (the outdated 1.6 hectare feasibility figure
      must not be published)
- [ ] 37 km from Addis Ababa

**Contact details (`TBD` in `components/i18n.ts`)**

- [ ] `phone` — currently `+251 000 000 000`
- [ ] `email` — currently `info@fraol.et`
- [ ] `exportEmail` — partnership and investment inbox, currently `exports@fraol.et`
- [ ] Final website domain, for the metadata in `app/layout.tsx`

**Publication rules from the content guide**

- [ ] Do not publish the business licence photograph, bank letters, signatures,
      registration or tax numbers, or complete licence scans. The Documents page
      deliberately shows verified document cards only.
- [ ] Do not claim certifications, export approvals, grants, partnerships or
      completed facilities before they are formally obtained.
- [ ] Larger cattle, abattoir or export volumes stay described as planned
      capacity, never as current production.
- [ ] Partner logos only with written permission.
- [ ] Photography — every image is Unsplash stock, set in `IMG` at the top of
      `components/ui.tsx`. Replace with authentic Fraol photographs and label any
      rendering of a future facility as planned or proposed.
- [ ] Add a privacy notice and secure handling for enquiry form data.

**Translation review**

- [ ] Amharic, Afaan Oromoo and Norsk copy needs a native-speaker pass before
      launch, including the added pages in `components/pagecopy/`.

---

## Copy conventions

No em dashes anywhere in visible copy. Use a comma, a colon, a semicolon or a
full stop instead, in every language (Amharic uses `፣` and `፦`). Number ranges
are written out ("90 to 180 days", "90 hanga 180", "90 til 180"). Keep to this
when editing `components/i18n.ts` or any page metadata.

Hyphens inside real compound words stay: `high-quality`, `agro-industrial`,
`end-to-end`, `third-party`.

---

## Contact form

The form currently shows a success state without sending anything
(`onSubmit` in `components/sections/Contact.tsx`). To make it live, either:

- add a Next.js route handler at `app/api/contact/route.ts` and POST to it, or
- point it at a hosted form service (Formspree, Web3Forms) — one fetch call.

---

## Deploying

The project is a standard Next.js app: push to a Git repo and import it on
Vercel, or run `npm run build && npm start` on any Node 20+ host.
All fifteen routes are statically prerendered.

---

## Housekeeping

The superseded single-page components (`FraolWebsite.tsx`, `PageHeader.tsx`)
have been removed. The split routes under `app/` are the only markup now.
