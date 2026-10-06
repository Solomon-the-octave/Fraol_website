import type { PageCopy } from "./types";

/* ENGLISH — taken from the approved content guide, September 2026.
   Figures carry "approximately" as the guide requires and stay in FACTS
   (see index.ts) so they can be confirmed in one place before launch. */

const en: PageCopy = {
  navOperations:     "Operations",
  navSustainability: "Sustainability",
  navProjects:       "Projects",
  navPartners:       "Partners",
  navDocuments:      "Documents",
  navCattle:         "Cattle Fattening",
  navFeed:           "Feed and Fodder",
  navCommunity:      "Community Impact",

  learnMore:    "Learn more",
  factsHeading: "Current Operating Position",
  factsNote:    "Figures are approximate and describe current operations. Larger volumes are described as planned capacity, never as current production.",
  facts: [
    { value: "90 days",  label: "Production cycle" },
    { value: "120",      label: "Cattle per cycle, approximate" },
    { value: "100,000",  label: "Hay and fodder bundles a year, approximate" },
    { value: "5,000",    label: "Bale warehouse capacity, approximate" },
    { value: "1.2 ha",   label: "Operational site, approximate" },
    { value: "37 km",    label: "From Addis Ababa" },
  ],

  /* ── Operations ─────────────────────────────────────────────────── */
  about: {
    vmHeading: "Vision, Mission and Purpose",
    vision: { title: "Our Vision", body: "To become a leading Ethiopian livestock and agribusiness company known for sustainable production, strong farmer partnerships, quality livestock and responsible agricultural development." },
    mission: { title: "Our Mission", body: "To build an efficient and integrated livestock value chain that combines cattle production, reliable feed systems, animal health management, sustainable resource use and strong market linkages." },
    purpose: { title: "Our Purpose", body: "To connect Ethiopian farmers and livestock producers with reliable markets, improved production systems and responsible commercial growth." },
    valuesHeading: "What We Stand For",
    values: [
      { title: "Integrity", body: "We build relationships through transparency, accountability and trust." },
      { title: "Animal welfare", body: "We promote responsible animal care and professional livestock management." },
      { title: "Sustainability", body: "We seek productive and responsible use of land, feed, water and agricultural resources." },
      { title: "Partnership", body: "We grow through collaboration with farmers, businesses, institutions and communities." },
      { title: "Innovation", body: "We adopt practical technology and improved management systems that add measurable value." },
      { title: "Community impact", body: "We aim to create opportunities for farmers, employees, suppliers and surrounding communities." },
    ],
  },

  ops: {
    tag:  "Our Operations",
    h1a:  "An Integrated Livestock System,",
    h1b:  "from Sourcing to Market.",
    lead: "Fraol is developing an integrated operating model that combines livestock sourcing, quarantine, feeding, animal health, feed storage, logistics, data management and market access.",
    body: "Our operating approach is designed to improve consistency, reduce avoidable losses and prepare healthy cattle for the market through structured production cycles.",

    processHeading: "Operational Process",
    steps: [
      { title: "Animal sourcing and selection", body: "Healthy cattle suitable for fattening are selected from livestock producing areas and trusted commercial channels." },
      { title: "Quarantine and health screening", body: "Newly arrived cattle are observed, assessed and treated before entering the main herd." },
      { title: "Feeding and water management", body: "Animals receive structured rations using roughage, concentrates, minerals and continuous access to clean water." },
      { title: "Performance monitoring", body: "Weight, feed use, health observations and treatment records are monitored during the cycle." },
      { title: "Market preparation and sale", body: "Finished cattle are matched with buyer requirements based on weight, body condition, quality and timing." },
    ],

    infraHeading: "Operational Infrastructure",
    infra: [
      "Cattle housing and feeding areas",
      "Feed and fodder storage",
      "Quarantine and treatment space",
      "Water supply and drinking systems",
      "Drainage and manure handling areas",
      "Loading and vehicle access",
      "Administrative and staff facilities",
      "Future digital identification and performance monitoring systems",
    ],

    commitHeading: "Operating Commitment",
    commitBody:    "Fraol's priority is disciplined execution. Growth in herd size, infrastructure or market reach will be phased in line with feed availability, animal health capacity, working capital, buyer demand and regulatory requirements.",

    exploreHeading: "Inside the Operation",
    explore: [
      { title: "Cattle Fattening",  body: "Structured selection, balanced feeding, veterinary care and weight monitoring across a 90 day production cycle." },
      { title: "Feed and Fodder",   body: "Sourcing, storage and ration planning built on dependable relationships with local farmers and suppliers." },
    ],
  },

  /* ── Cattle Fattening ───────────────────────────────────────────── */
  cattle: {
    tag:  "Operations",
    h1a:  "Healthy Cattle,",
    h1b:  "Structured Feeding.",
    lead: "Fraol's cattle fattening model is designed to improve animal condition, market value and meat quality through structured feeding and professional livestock management.",
    body: "The current operation manages approximately 120 cattle per 90 day production cycle. The cycle begins with careful animal selection and quarantine, followed by controlled feeding, health care, performance monitoring and planned market sale.",

    approachHeading: "Our Approach",
    approach: [
      "Selection of healthy cattle suited to the fattening programme",
      "Quarantine and veterinary screening before herd entry",
      "Balanced use of roughage, concentrates and mineral supplements",
      "Continuous access to clean water",
      "Routine weight and body condition monitoring",
      "Vaccination, deworming and disease prevention",
      "Clean pens, drainage and sanitation",
      "Responsible animal handling and welfare practices",
      "Production planning aligned with buyer demand",
    ],

    qualityHeading: "Quality Objective",
    qualityBody:    "Our objective is to deliver healthy, well managed and market ready cattle while maintaining disciplined animal care, traceable operational records and commercial viability.",
  },

  /* ── Feed and Fodder ────────────────────────────────────────────── */
  feed: {
    tag:  "Operations",
    h1a:  "Reliable Nutrition,",
    h1b:  "Sourced Locally.",
    lead: "Reliable feed supply is the foundation of productive livestock operations.",
    body: "Fraol sources and manages hay, crop residues, concentrates, agro industrial by products, minerals and other locally available feed resources. The company currently works with an annual volume of approximately 100,000 hay and fodder bundles and has existing warehouse capacity for approximately 5,000 hay bales.",

    resourcesHeading: "Feed Resources",
    resources: [
      { title: "Roughage",     body: "Hay, green fodder, crop residues and grasses that support digestion and rumen function." },
      { title: "Energy feed",  body: "Maize based ingredients, wheat bran and suitable agro industrial by products." },
      { title: "Protein feed", body: "Oilseed cakes and other appropriate protein sources used within a balanced ration." },
      { title: "Minerals",     body: "Salt and mineral supplements that support metabolism, growth and feed utilization." },
      { title: "Water",        body: "Clean and continuous water access for digestion, temperature control and animal health." },
    ],

    linkHeading: "Farmer and Supplier Linkages",
    linkBody:    "Fraol seeks long term relationships with local farmers, cooperatives, feed producers and transport providers. These relationships strengthen year round supply while creating additional income opportunities across the surrounding agricultural economy.",

    priorityHeading: "Feed Management Priorities",
    priorities: [
      "Quality checks at procurement and delivery",
      "Dry and organized storage",
      "Inventory and loss control",
      "Ration planning aligned with cattle weight and condition",
      "Reliable seasonal purchasing arrangements",
      "Future development of fodder production and feed processing capacity",
    ],
  },

  /* ── Sustainability ─────────────────────────────────────────────── */
  sust: {
    tag:  "Sustainability",
    h1a:  "Productive Agribusiness,",
    h1b:  "Responsible Operations.",
    lead: "Fraol believes that productive agribusiness and environmental responsibility should advance together.",
    body: "Our approach focuses on practical improvements in feed efficiency, manure management, water use, drainage, sanitation and agricultural by product utilization. These actions can reduce waste, protect animal health and improve the long term resilience of the operation.",

    priorityHeading: "Environmental Priorities",
    priorities: [
      "Responsible collection and management of manure",
      "Use of manure as organic fertilizer where technically appropriate",
      "Efficient water use and reliable livestock drinking systems",
      "Improved drainage and clean livestock facilities",
      "Productive use of crop residues and suitable agricultural by products",
      "Reduction of feed losses during transport, storage and feeding",
      "Future assessment of solar energy and biogas opportunities",
    ],

    growthHeading: "Responsible Growth",
    growthBody:    "Future environmental claims will be based on measured operating data. Fraol will avoid publishing unsupported carbon reduction or zero waste claims until reliable baselines, monitoring methods and verified results are available.",

    welfareHeading: "Animal Welfare",
    welfareBody:    "Responsible livestock management includes clean water, appropriate nutrition, timely veterinary attention, safe handling, clean pens and adequate space. Fraol aims to integrate these principles throughout its operating procedures and future infrastructure development.",
  },

  /* ── Community Impact ───────────────────────────────────────────── */
  community: {
    tag:  "Sustainability",
    h1a:  "Growth That Reaches",
    h1b:  "Beyond the Farm.",
    lead: "Fraol's growth is intended to create economic opportunity beyond the farm itself.",
    body: "The company creates demand for feeder cattle, hay, crop residues, transport, veterinary services, agricultural inputs, construction services and local labour. By building dependable commercial relationships, Fraol can help connect rural producers with larger urban markets.",

    goalsHeading: "Our Community Goals",
    goals: [
      "Support local livestock producers and fodder suppliers",
      "Create direct and indirect employment opportunities",
      "Build dependable long term relationships with farmers",
      "Strengthen rural to urban livestock and feed markets",
      "Promote practical livestock management and record keeping",
      "Expand opportunities for youth and women as the business grows",
      "Work constructively with local institutions and communities",
    ],

    partnerHeading: "Development Partnership Areas",
    partnerBody:    "Fraol welcomes development partnerships in farmer training, livestock health, climate smart feed systems, youth and women's participation, water management, renewable energy and community infrastructure. Any public claim about beneficiaries, jobs or environmental impact will be linked to an agreed measurement method.",
  },

  /* ── Projects and Expansion ─────────────────────────────────────── */
  projects: {
    tag:  "Projects and Expansion",
    h1a:  "Building for",
    h1b:  "Long Term Growth.",
    lead: "Fraol is developing its livestock operations in phases. Expansion will build on current cattle fattening, fodder sourcing and storage activities while improving infrastructure, technology, sustainability and market access.",

    phaseHeading: "Development Roadmap",
    phases: [
      { label: "Operational Foundation", status: "Current",   items: ["Cattle fattening", "Feed and fodder sourcing", "Warehouse and basic infrastructure"] },
      { label: "Capacity and Technology", status: "Planned",  items: ["Expanded feedlot infrastructure", "Veterinary and biosecurity facilities", "Digital farm management"] },
      { label: "Market and Value Addition", status: "Long term", items: ["Processing partnerships", "Cold chain readiness", "Regional and export markets"] },
    ],

    areasHeading: "Development Areas",
    areas: [
      { title: "Feedlot Infrastructure",        body: "Improved cattle housing, feeding alleys, water systems, quarantine facilities, loading areas, drainage and operational access." },
      { title: "Feed Storage and Processing",   body: "Expanded warehousing, improved inventory management and future feed preparation systems to support reliable year round feeding." },
      { title: "Veterinary and Biosecurity",    body: "Dedicated quarantine, treatment, sanitation and monitoring arrangements supported by professional animal health services." },
      { title: "Digital Farm Management",       body: "Future use of livestock identification, electronic weighing, feed inventory, health records, financial controls and management dashboards." },
      { title: "Market Development",            body: "Long term supply relationships with commercial buyers, processors and livestock market partners in Ethiopia and selected regional markets." },
      { title: "Processing and Value Addition", body: "Fraol's long term strategy may include deeper participation in meat processing and export oriented value addition, subject to feasibility studies, financing, technical partnerships, market agreements and regulatory approvals." },
    ],

    noteHeading: "How to Read This Page",
    note:        "Current operations and future plans are presented separately. Everything described as planned or long term is subject to financing, technical studies, partnerships and regulatory approval, and is not current production capacity.",
  },

  /* ── Partners and Investors ─────────────────────────────────────── */
  partners: {
    tag:  "Partners and Investors",
    h1a:  "Collaboration for",
    h1b:  "Sustainable Growth.",
    lead: "Fraol Smart Integrated Agribusiness PLC welcomes collaboration with organizations that share our vision for modern, sustainable and commercially viable agricultural development in Ethiopia.",
    body: "We are interested in building partnerships with livestock buyers, strategic investors, financial institutions, development organizations, feed companies, technology providers, equipment suppliers, universities, veterinary specialists, processors and market partners.",

    routesHeading: "Partnership Opportunities",
    routes: [
      { title: "Strategic investment",    body: "Long term cooperation to expand livestock production, infrastructure and value addition." },
      { title: "Technical partnership",   body: "Feedlot design, nutrition, veterinary systems, digital management, processing technology and operational support." },
      { title: "Financial partnership",   body: "Commercial lending, development finance, blended finance and eligible grant supported components." },
      { title: "Market partnership",      body: "Livestock supply, offtake, meat market development and future export market access." },
      { title: "Development partnership", body: "Farmer inclusion, climate smart agriculture, training, employment, renewable energy, water and community development." },
    ],

    infoHeading: "Information Available to Qualified Partners",
    info: [
      "Company registration and licensing records",
      "Project feasibility and business planning documents",
      "Land and site information",
      "Operational and financial information appropriate to the enquiry",
      "Infrastructure plans and equipment requirements",
      "Market and partnership documentation",
      "Environmental and social planning information",
    ],

    ctaHeading: "Interested in working with Fraol",
    ctaBody:    "Contact our management team to request a company profile, project brief, partnership proposal or controlled due diligence package.",
    cta1:       "Request Partnership Information",
    cta2:       "Contact Fraol Management",
  },

  /* ── Corporate Documents ────────────────────────────────────────── */
  docs: {
    tag:  "Corporate Documents",
    h1a:  "Registered, Documented",
    h1b:  "and Due Diligence Ready.",
    lead: "Fraol Smart Integrated Agribusiness PLC maintains the corporate, tax, licensing and project documentation required for its business activities and engagement with relevant authorities, financial institutions and qualified partners.",
    notice: "For security and privacy reasons, full versions of sensitive documents are not published openly on this website. Verified copies may be shared through a controlled due diligence process when appropriate.",

    catHeading: "Document Categories",
    cats: [
      { title: "Commercial Registration", body: "Corporate registration documentation issued by the relevant authority.", status: "Available for due diligence" },
      { title: "Business Licence",        body: "Business licensing documentation for the company's approved activities.", status: "Available for due diligence" },
      { title: "Tax Identification",      body: "Company tax identification documentation.", status: "Available for due diligence" },
      { title: "VAT Registration",        body: "Applicable value added tax registration documentation.", status: "Available for due diligence" },
      { title: "Corporate Constitution",  body: "Memorandum and Articles of Association.", status: "Available for due diligence" },
      { title: "Land and Site Records",   body: "Relevant land use, site and ownership or holding documentation.", status: "Available for due diligence" },
      { title: "Feasibility Study",       body: "Project feasibility and operating plan documentation.", status: "Controlled access" },
      { title: "Financial Documents",     body: "Banking, financing and company financial documentation.", status: "Controlled access" },
      { title: "Technical Documents",     body: "Infrastructure, environment and operational planning records.", status: "Controlled access" },
    ],
    requestBtn: "Request Verification Copy",

    processHeading: "Verification Process",
    steps: [
      { title: "Submit request",        body: "Provide the document category and the purpose of your request." },
      { title: "Partner qualification", body: "We assess the organization and the intended use of the information." },
      { title: "Confidentiality review", body: "Mutual confidentiality arrangements are confirmed where appropriate." },
      { title: "Controlled access",     body: "Approved parties receive the relevant documentation." },
    ],

    protectHeading: "How We Protect Information",
    protect: [
      { title: "Redacted previews",   body: "Personal identifiers, signatures, registration numbers and machine readable codes are removed before any document preview is shown." },
      { title: "Qualified access",    body: "Documents are shared only with verified institutions, advisers and partners." },
      { title: "Controlled sharing",  body: "Access is limited to the approved purpose of the enquiry." },
      { title: "Confidentiality",     body: "All parties are expected to maintain confidentiality over shared material." },
    ],
  },
};

export default en;
