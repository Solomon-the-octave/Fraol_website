/* Shared icons, image map and small building blocks. */

/* TBD: stock photography stands in for real FRAOL farm photos.
   Replace with the client's own images (see README.md). */
export const IMG = {
  hero:        "https://images.unsplash.com/photo-1784385305989-b72d2533b2bb?w=1800&h=1000&fit=crop&auto=format",
  aboutField:  "https://images.unsplash.com/photo-1583095117886-ddb019562ee0?w=900&h=700&fit=crop&auto=format",
  cowPortrait: "https://images.unsplash.com/photo-1741666356775-c515db8564f4?w=900&h=600&fit=crop&auto=format",
  pasture:     "https://images.unsplash.com/photo-1597801038590-9e3a24bcd6b7?w=1400&h=700&fit=crop&auto=format",
  barn:        "https://images.unsplash.com/photo-1636998980792-63f27ddea4e3?w=800&h=600&fit=crop&auto=format",
  cowClose:    "https://images.unsplash.com/photo-1583364428520-fa6c5013c0c3?w=800&h=600&fit=crop&auto=format",
  herd:        "https://images.unsplash.com/photo-1504868531014-6f6787aa186f?w=800&h=600&fit=crop&auto=format",
  sunsetCow:   "https://images.unsplash.com/photo-1760973877058-40d61b620082?w=800&h=600&fit=crop&auto=format",
  whiteCow:    "https://images.unsplash.com/photo-1778664769892-5bae64b51956?w=800&h=600&fit=crop&auto=format",
  barnFarm:    "https://images.unsplash.com/photo-1713108910282-511f0bd711b2?w=800&h=600&fit=crop&auto=format",
};

export const GALLERY_IMGS = [
  { src: IMG.hero,        alt: "Cattle at sunrise",  wide: true  },
  { src: IMG.barn,        alt: "Feeding barn",       wide: false },
  { src: IMG.cowClose,    alt: "Cattle close up",    wide: false },
  { src: IMG.aboutField,  alt: "Herd on farmland",   wide: false },
  { src: IMG.whiteCow,    alt: "Cattle in the pen",  wide: false },
  { src: IMG.barnFarm,    alt: "Farm buildings",     wide: true  },
  { src: IMG.pasture,     alt: "Pasture land",       wide: true  },
  { src: IMG.herd,        alt: "Herd grazing",       wide: false },
  { src: IMG.sunsetCow,   alt: "Cattle at sunset",   wide: false },
];

export const PROCESS_IMGS = [IMG.herd, IMG.cowPortrait, IMG.barn, IMG.cowClose, IMG.sunsetCow];

export const PROCESS_ALTS = [
  "Sourcing cattle",
  "Health screening",
  "Cattle in the feeding barn",
  "Recording weight and feed data",
  "Cattle at market dispatch",
];

/* Route table — the single source of truth for the nav and footer links.

   Top level follows the approved content guide's main menu. Pages that pre
   date the guide (/services, /process, /why-us) stay live and are reachable
   from the parent they belong to, so no earlier work is stranded.

   `key` is looked up in the base translations first and then in the page copy
   (components/pagecopy), so both string sets can feed the same nav. */
export type SubRoute = { href: string; key: string };
export type RouteDef = { href: string; key: string; children?: SubRoute[] };

export const ROUTES: RouteDef[] = [
  {
    href: "/about",
    key: "navAbout",
    children: [{ href: "/why-us", key: "navWhyUs" }],
  },
  {
    href: "/operations",
    key: "navOperations",
    children: [
      { href: "/operations/cattle-fattening", key: "navCattle" },
      { href: "/operations/feed-and-fodder", key: "navFeed" },
      { href: "/services", key: "navServices" },
      { href: "/process", key: "navProcess" },
    ],
  },
  {
    href: "/sustainability",
    key: "navSustainability",
    children: [{ href: "/sustainability/community-impact", key: "navCommunity" }],
  },
  { href: "/projects",  key: "navProjects"  },
  { href: "/partners",  key: "navPartners"  },
  { href: "/documents", key: "navDocuments" },
  { href: "/gallery",   key: "navGallery"   },
  { href: "/contact",   key: "navContact"   },
];

/* Routes whose header is dark and full-bleed — the nav stays transparent
   over them until the visitor scrolls, exactly like the home hero. */
export const DARK_TOP_ROUTES: string[] = ["/", "/services", "/gallery", "/partners"];

export const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M3 7.5h9M8 4l3.5 3.5L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M3 5l3.5 3.5L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
