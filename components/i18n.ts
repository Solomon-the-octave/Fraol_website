export type Lang = "en" | "am" | "om" | "no";

/* Short codes rather than flag emoji: a flag is a country, not a language,
   and Amharic and Afaan Oromoo would carry the same one. */
export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English",      short: "EN" },
  { code: "am", label: "አማርኛ",         short: "አማ" },
  { code: "om", label: "Afaan Oromoo", short: "OM" },
  { code: "no", label: "Norsk",        short: "NO" },
];

/* Confirmed company contact details, supplied by Fraol, 6 October 2026. */
export const CONTACT = {
  email:      "f.erenamideksa@yahoo.com",
  phone:      "+251 95 918 6059",
  mobile:     "+47 973 77 270",
} as const;

/* One shared shape for every language, so TypeScript can index T[lang]
   without collapsing into a union of readonly tuples. */
export interface Pair { title: string; body: string }
export interface Translations {
  brandName: string;
  brandSub: string;
  tagline: string;
  pillars: string[];
  navAbout: string;
  navServices: string;
  navProcess: string;
  navWhyUs: string;
  navGallery: string;
  navContact: string;
  navCta: string;
  heroTag: string;
  heroH1a: string;
  heroH1b: string;
  heroBody: string;
  heroCta1: string;
  heroCta2: string;
  stat1l: string;
  stat2l: string;
  stat3l: string;
  stat4l: string;
  aboutTag: string;
  aboutH2a: string;
  aboutH2b: string;
  aboutP1: string;
  aboutP2: string;
  aboutLocations: string[];
  aboutCta: string;
  servicesTag: string;
  servicesH2: string;
  servicesBody: string;
  services: Pair[];
  processTag: string;
  processH2: string;
  processBody: string;
  processPrev: string;
  processNext: string;
  processSteps: Pair[];
  whyTag: string;
  whyH2a: string;
  whyH2b: string;
  whyBody: string;
  whyCta: string;
  whyCards: Pair[];
  sustTag: string;
  sustH2a: string;
  sustH2b: string;
  sustBody: string;
  sustPoints: Pair[];
  sustMetricLabels: string[];
  galleryTag: string;
  galleryH2: string;
  contactTag: string;
  contactH2a: string;
  contactH2b: string;
  contactBody: string;
  contactInfoLabels: string[];
  contactInfoVals: string[];
  certLabel: string;
  certs: string[];
  formTitle: string;
  formName: string;
  formEmail: string;
  formOrg: string;
  formMsg: string;
  formPhone: string;
  formInterest: string;
  formInterestOpts: string[];
  formConsent: string;
  formPH: string[];
  formSubmit: string;
  formSuccess: string;
  formSuccessB: string;
  footerDesc: string;
  footerCols: { heading: string; links: string[] }[];
  footerCopy: string;
  footerPrivacy: string;
  footerTerms: string;
}

export const T: Record<Lang, Translations> = {
  /* ── ENGLISH ─────────────────────────────────────────────────────── */
  en: {
    brandName:    "FRAOL",
    brandSub:     "Smart Integrated Agribusiness PLC",
    tagline:      "Growing Value · Creating Opportunities · Building a Better Future",
    pillars:      ["Feed", "Fatten", "Process", "Export"],
    navAbout:     "About",
    navServices:  "Services",
    navProcess:   "Process",
    navWhyUs:     "Why Us",
    navGallery:   "Gallery",
    navContact:   "Contact",
    navCta:       "Partner With Us",

    heroTag:      "Fraol Smart Integrated Agribusiness PLC",
    heroH1a:      "Building Ethiopia's Next Generation",
    heroH1b:      "Livestock Value Chain.",
    heroBody:     "Modern livestock production, reliable feed systems and stronger market linkages, from our base in the Sendafa area of Oromia.",
    heroCta1:     "Explore Our Operations",
    heroCta2:     "Partner With Fraol",

    stat1l: "Head of Cattle",
    stat2l: "In Operation",
    stat3l: "Integrated Sites",
    stat4l: "Traceable Sourcing",

    aboutTag:     "About FRAOL",
    aboutH2a:     "Ethiopia's Livestock Value Chain,",
    aboutH2b:     "Built End to End.",
    aboutP1:      "Fraol Smart Integrated Agribusiness PLC is an Ethiopian agribusiness company focused on livestock development, cattle fattening, animal feed, agricultural value addition and sustainable rural enterprise. Our purpose is to build a modern agribusiness platform that connects Ethiopian farmers and livestock producers with reliable markets, improved production systems and responsible commercial growth.",
    aboutP2:      "The company operates in the Sendafa area of Oromia, close to Addis Ababa and the surrounding agricultural communities. The location supports access to livestock, feed resources, labour, veterinary services, transport infrastructure and major consumer markets. Fraol combines current commercial activity with a phased development strategy.",
    aboutLocations: [
      "Cattle fattening",
      "Feed and fodder systems",
      "Animal health and biosecurity",
      "Market linkage",
    ],
    aboutCta:     "Request Company Profile",

    servicesTag:  "What We Do",
    servicesH2:   "Integrated Livestock Services",
    servicesBody: "Four pillars, one operation. From the feed trough to the export dock, built on operational depth rather than brokerage.",
    services: [
      { title: "Cattle Fattening", body: "Fraol uses structured cattle selection, balanced feeding, veterinary care, weight monitoring and disciplined production cycles to prepare healthy cattle for commercial markets." },
      { title: "Feed and Fodder", body: "Reliable feed is central to livestock performance. Fraol sources and manages hay, crop residues, concentrates, mineral supplements and other locally available feed resources while strengthening relationships with farmers and suppliers." },
      { title: "Animal Health and Biosecurity", body: "Veterinary screening, quarantine, vaccination, sanitation and disease prevention are integrated into our livestock management system." },
      { title: "Market Linkage", body: "Fraol connects quality livestock production with traders, butcheries, hotels, restaurants, processors and other commercial buyers while developing future regional and export market pathways." },
      { title: "Sustainable Agriculture", body: "We seek to improve resource efficiency through better feed utilization, responsible manure management, careful water use and closer integration between livestock and crop production." },
    ],

    processTag:   "How We Work",
    processH2:    "The Cattle Fattening Process",
    processBody:  "A disciplined five-stage programme that consistently delivers healthy, well-conditioned animals to market.",
    processPrev:  "← Previous",
    processNext:  "Next Step →",
    processSteps: [
      { title: "Sourcing & Procurement",          body: "We procure healthy cattle from trusted smallholder networks and livestock markets, prioritising indigenous breeds with strong growth potential and sound frame." },
      { title: "Quarantine & Health Screening",   body: "All incoming cattle pass through quarantine. Veterinary examination, parasite treatment, vaccination and individual tagging are completed before entry to the fattening pens." },
      { title: "Nutritional Fattening Programme", body: "Cattle follow a structured 90 to 180 day feeding programme with balanced rations of silage, hay, concentrate and mineral supplements, adjusted as the animal gains." },
      { title: "Records & Performance Tracking",  body: "Feed amounts, feed types, weight gain and health events are recorded per animal. The data drives ration adjustments and gives buyers a verifiable history." },
      { title: "Market Preparation & Dispatch",   body: "Animals reaching target weight are prepared for market or export: final veterinary certification, documentation, loading and transport coordination." },
    ],

    whyTag:   "Why Choose Us",
    whyH2a:   "Built on Trust.",
    whyH2b:   "Delivered with Precision.",
    whyBody:  "Owning every link in the chain, from feed and fattening through processing and export, means quality is managed rather than hoped for, and every claim can be traced back to a record.",
    whyCta:   "Schedule a Farm Visit",
    whyCards: [
      { title: "Strategic location", body: "Our Sendafa area location provides access to Addis Ababa and surrounding livestock producing areas." },
      { title: "Integrated value chain", body: "We connect livestock, feed, farmers, infrastructure and markets in one practical operating model." },
      { title: "Market oriented production", body: "Our operations are planned around animal quality, efficient cycles and reliable market access." },
      { title: "Local farmer linkages", body: "Our model creates opportunities for suppliers of cattle, fodder and agricultural inputs." },
      { title: "Scalable vision", body: "Fraol is building an operating foundation that can support responsible future expansion." },
    ],

    sustTag:   "Sustainability",
    sustH2a:   "Farming Responsibly",
    sustH2b:   "for the Next Generation",
    sustBody:  "Profitable agribusiness and environmental stewardship are inseparable. Our operations are designed to regenerate land, conserve water and strengthen the communities we source from.",
    sustPoints: [
      { title: "Rangeland Restoration", body: "Grazing rotation and restoration across the rangeland under our management." },
      { title: "Water Conservation",    body: "Rainwater harvesting and controlled water troughs cut consumption against conventional systems." },
      { title: "Manure Management",     body: "Manure returned to feed crops and converted to on-farm energy, reducing fossil fuel dependency." },
      { title: "Community Employment",  body: "Permanent and seasonal work across farm operations, feed production and the supply chain." },
    ],
    sustMetricLabels: [
      "Rangeland Under Management",
      "Water Consumption Reduction",
      "Permanent Jobs Created",
      "Net Zero Target",
    ],

    galleryTag: "Farm Gallery",
    galleryH2:  "Life on the Farm",

    contactTag:   "Get in Touch",
    contactH2a:   "Partner With",
    contactH2b:   "FRAOL",
    contactBody:  "Whether you are a buyer, investor, development partner or smallholder farmer, we welcome enquiries about our operations and partnership opportunities.",
    contactInfoLabels: ["Address", "Email", "Telephone", "International"],
    contactInfoVals: ["Sendafa City Administration, Oromia Regional State, Ethiopia", CONTACT.email, CONTACT.phone, CONTACT.mobile],
    certLabel:    "How can we help",
    certs: ["Livestock and sales", "Farmers and suppliers", "Investment and finance", "Technology and partnerships", "Development cooperation"],
    formTitle:    "Send an Enquiry",
    formName:     "Full Name",
    formEmail:    "Email Address",
    formOrg:      "Organisation / Role",
    formMsg:      "Message",
    formPhone:    "Telephone",
    formInterest: "Area of interest",
    formInterestOpts: ["Buyer", "Supplier", "Investment", "Finance", "Technology", "Development partnership", "Other"],
    formConsent:  "I agree that Fraol may use this information to respond to my enquiry.",
    formPH:       ["Your name", "you@company.com", "Company name", "Tell us about your enquiry..."],
    formSubmit:   "Submit Enquiry",
    formSuccess:  "Enquiry received",
    formSuccessB: "Thank you for contacting Fraol Smart Integrated Agribusiness PLC. A member of our team will respond using the contact information you provided.",

    footerDesc:   "Modern livestock. Stronger farmers. Sustainable growth. An integrated livestock value chain built from Sendafa, Oromia.",
    footerCols: [
      { heading: "Company", links: [] },
      { heading: "Operations", links: [] },
      { heading: "Sustainability", links: [] },
    ],
    footerCopy:    "© 2026 Fraol Smart Integrated Agribusiness PLC. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms:   "Terms of Service",
  },

  /* ── አማርኛ (AMHARIC) ──────────────────────────────────────────────── */
  am: {
    brandName:    "ፍራኦል",
    brandSub:     "ስማርት ኢንተግሬትድ አግሪቢዝነስ ኃ.የ.የ.ማ.",
    tagline:      "እሴት ማሳደግ · ዕድል መፍጠር · የተሻለ ወደፊት መገንባት",
    pillars:      ["ምግብ", "ማደለብ", "ማቀነባበር", "ወደ ውጭ መላክ"],
    navAbout:     "ስለ እኛ",
    navServices:  "አገልግሎቶች",
    navProcess:   "ሂደት",
    navWhyUs:     "ለምን እኛ",
    navGallery:   "ጋለሪ",
    navContact:   "ያግኙን",
    navCta:       "አጋር ይሁኑ",

    heroTag:      "ፍራኦል ስማርት አግሪቢዝነስ ኃ.የ.የ.ማ.",
    heroH1a:      "የኢትዮጵያን የቀጣይ ትውልድ",
    heroH1b:      "የከብት እሴት ሰንሰለት መገንባት።",
    heroBody:     "ዘመናዊ የከብት ምርት፣ አስተማማኝ የመኖ ሥርዓቶችና የተጠናከረ የገበያ ትስስር፤ ከኦሮሚያ ሰንዳፋ አካባቢ መሠረታችን።",
    heroCta1:     "ሥራዎቻችንን ይመልከቱ",
    heroCta2:     "ከፍራኦል ጋር ይተባበሩ",

    stat1l: "የከብት ብዛት",
    stat2l: "የሥራ ዓመታት",
    stat3l: "የተቀናጁ ቦታዎች",
    stat4l: "ሙሉ ምንጭ ክትትል",

    aboutTag:     "ስለ ፍራኦል",
    aboutH2a:     "የኢትዮጵያ የከብት እሴት ሰንሰለት፣",
    aboutH2b:     "ከጅምር እስከ ፍጻሜ።",
    aboutP1:      "ፍራኦል ስማርት አግሪቢዝነስ ኃ.የ.የ.ማ. በከብት ልማት፣ በከብት ማደለብ፣ በእንስሳት መኖ፣ በግብርና እሴት መጨመርና በዘለቄታዊ የገጠር ሥራ ላይ ያተኮረ የኢትዮጵያ አግሪቢዝነስ ኩባንያ ነው። ዓላማችን የኢትዮጵያ ገበሬዎችንና የከብት አምራቾችን ከአስተማማኝ ገበያዎች፣ ከተሻሻሉ የምርት ሥርዓቶችና ኃላፊነት ከተሞላበት የንግድ ዕድገት ጋር የሚያገናኝ ዘመናዊ መድረክ መገንባት ነው።",
    aboutP2:      "ኩባንያው በኦሮሚያ ሰንዳፋ አካባቢ ይሠራል፤ ከአዲስ አበባና ከአካባቢው የግብርና ማህበረሰቦች ቅርብ ነው። ቦታው ለከብት፣ ለመኖ ሀብቶች፣ ለሰው ኃይል፣ ለእንስሳት ሕክምና አገልግሎት፣ ለትራንስፖርት መሠረተ ልማትና ለዋና ዋና የሸማች ገበያዎች ተደራሽነትን ይሰጣል። ፍራኦል የአሁኑን የንግድ እንቅስቃሴ ከደረጃ በደረጃ የልማት ስትራቴጂ ጋር ያጣምራል።",
    aboutLocations: [
      "የከብት ማደለብ",
      "የመኖና ሳር ሥርዓቶች",
      "የእንስሳት ጤናና ደህንነት",
      "የገበያ ትስስር",
    ],
    aboutCta:     "የኩባንያ መገለጫ ጠይቅ",

    servicesTag:  "የምናደርገው",
    servicesH2:   "የተቀናጁ የእንስሳት አገልግሎቶች",
    servicesBody: "አራት ምሰሶዎች፣ አንድ ሥራ፤ ከምግብ ገንዳ እስከ ወጪ ወደብ ድረስ በጥልቅ የሥራ ልምድ ላይ የተመሠረተ።",
    services: [
      { title: "የከብት ማደለብ", body: "ፍራኦል ጤናማ ከብቶችን ለንግድ ገበያ ለማዘጋጀት የተደራጀ የከብት ምርጫ፣ ሚዛናዊ አመጋገብ፣ የእንስሳት ሕክምና፣ የክብደት ክትትልና የተግሣጽ ያለው የምርት ዑደት ይጠቀማል።" },
      { title: "መኖና ሳር", body: "አስተማማኝ መኖ ለከብት አፈጻጸም ማዕከላዊ ነው። ፍራኦል ሳር፣ የሰብል ተረፈ ምርት፣ የተከማቸ መኖ፣ የማዕድን ተጨማሪዎችና በአካባቢው የሚገኙ ሌሎች የመኖ ሀብቶችን ይገዛል፣ ያስተዳድራል፤ ከገበሬዎችና ከአቅራቢዎች ጋር ያለውን ግንኙነትም ያጠናክራል።" },
      { title: "የእንስሳት ጤናና ደህንነት", body: "የእንስሳት ሕክምና ምርመራ፣ ለይቶ ማቆያ፣ ክትባት፣ ንጽህናና የበሽታ መከላከል በከብት አያያዝ ሥርዓታችን ውስጥ ተካተዋል።" },
      { title: "የገበያ ትስስር", body: "ፍራኦል ጥራት ያለው የከብት ምርትን ከነጋዴዎች፣ ከሥጋ ቤቶች፣ ከሆቴሎች፣ ከሬስቶራንቶች፣ ከአቀነባባሪዎችና ከሌሎች የንግድ ገዢዎች ጋር ያገናኛል፤ ወደፊትም የክልልና የወጪ ገበያ መንገዶችን ያዘጋጃል።" },
      { title: "ዘለቄታዊ ግብርና", body: "በተሻለ የመኖ አጠቃቀም፣ ኃላፊነት በተሞላበት የፍግ አያያዝ፣ በጥንቃቄ የውሃ አጠቃቀምና በከብትና በሰብል ምርት መካከል በጠበቀ ትስስር የሀብት ቅልጥፍናን ለማሻሻል እንሠራለን።" },
    ],

    processTag:   "እንዴት እንሠራለን",
    processH2:    "የከብት ማደለብ ሂደት",
    processBody:  "ሁልጊዜ ጤናማና በጥሩ ሁኔታ ላይ ያሉ ከብቶችን ለገበያ የሚያቀርብ የተደራጀ አምስት ደረጃ ፕሮግራም።",
    processPrev:  "← ቀዳሚ",
    processNext:  "ቀጣይ ደረጃ →",
    processSteps: [
      { title: "ምንጭ እና ግዥ",             body: "ከታመኑ የአነስተኛ ገበሬ መረቦችና የከብት ገበያዎች ጤናማ ከብቶችን እንገዛለን፤ ጥሩ የዕድገት አቅምና አካል ያላቸው ተወላጅ ዝርያዎችን ቅድሚያ እንሰጣለን።" },
      { title: "ለይቶ ማቆያ እና የጤና ምርመራ", body: "አዲስ የሚገቡ ከብቶች በሙሉ በለይቶ ማቆያ ያልፋሉ። የእንስሳት ሕክምና ምርመራ፣ የጥገኛ ትል ሕክምና፣ ክትባትና የግል ምልክት ማድረግ ወደ ማደለቢያ ጋጣ ከመግባታቸው በፊት ይጠናቀቃል።" },
      { title: "የምግብ ማደለብ ፕሮግራም",     body: "ከብቶች ከ90 እስከ 180 ቀናት የተደራጀ የአመጋገብ ፕሮግራም ይከተላሉ፦ ሲላጅ፣ ሳር፣ የተከማቸ ምግብና የማዕድን ተጨማሪዎች ያሉት ሚዛናዊ ራሽን፣ ከክብደት ጭማሪ ጋር እየተስተካከለ።" },
      { title: "መዝገብ እና የአፈጻጸም ክትትል", body: "የምግብ መጠን፣ የምግብ ዓይነት፣ የክብደት ጭማሪና የጤና ክስተቶች ለእያንዳንዱ እንስሳ ይመዘገባሉ። መረጃው የራሽን ማስተካከያን ይመራል፤ ለገዢዎችም የሚረጋገጥ ታሪክ ይሰጣል።" },
      { title: "ለገበያ ዝግጅት እና ማስተላለፍ", body: "ዒላማ ክብደት የደረሱ ከብቶች ለገበያ ወይም ለወጪ ይዘጋጃሉ፦ የመጨረሻ የእንስሳት ሕክምና ምስክር ወረቀት፣ ሰነዶች፣ ጭነትና የትራንስፖርት ቅንጅት።" },
    ],

    whyTag:   "ለምን እኛን ይምረጡ",
    whyH2a:   "በእምነት ላይ የተመሠረተ።",
    whyH2b:   "በትክክለኛነት የሚሰጥ።",
    whyBody:  "የሰንሰለቱን እያንዳንዱን ክፍል፣ ማለትም ምግብ፣ ማደለብ፣ ማቀነባበር፣ ወጪ ምርት፣ በራስ መያዝ ማለት ጥራት ይተዳደራል እንጂ በተስፋ አይተውም፤ እያንዳንዱ ቃል ወደ መዝገብ ይመለሳል ማለት ነው።",
    whyCta:   "የእርሻ ጉብኝት ያስይዙ",
    whyCards: [
      { title: "ስትራቴጂክ ቦታ", body: "በሰንዳፋ አካባቢ ያለን ቦታ ወደ አዲስ አበባና ወደ አካባቢው የከብት አምራች ቦታዎች ተደራሽነት ይሰጣል።" },
      { title: "የተቀናጀ እሴት ሰንሰለት", body: "ከብትን፣ መኖን፣ ገበሬዎችን፣ መሠረተ ልማትንና ገበያዎችን በአንድ ተግባራዊ የሥራ ሞዴል እናገናኛለን።" },
      { title: "ለገበያ ያተኮረ ምርት", body: "ሥራዎቻችን በእንስሳት ጥራት፣ በቀልጣፋ ዑደትና በአስተማማኝ የገበያ ተደራሽነት ዙሪያ የታቀዱ ናቸው።" },
      { title: "ከአካባቢ ገበሬዎች ጋር ትስስር", body: "ሞዴላችን ለከብት፣ ለመኖና ለግብርና ግብዓት አቅራቢዎች ዕድል ይፈጥራል።" },
      { title: "ሊያድግ የሚችል ራዕይ", body: "ፍራኦል ኃላፊነት የተሞላበት የወደፊት ማስፋፊያን ሊደግፍ የሚችል የሥራ መሠረት እየገነባ ነው።" },
    ],

    sustTag:   "ዘለቄታዊነት",
    sustH2a:   "በኃላፊነት ማልማት",
    sustH2b:   "ለሚቀጥለው ትውልድ",
    sustBody:  "ትርፋማ አግሪቢዝነስና የአካባቢ ጥበቃ የማይነጣጠሉ ናቸው። ሥራዎቻችን መሬትን ለማደስ፣ ውሃን ለመቆጠብና የምንሠራባቸውን ማህበረሰቦች ለማጠናከር የተነደፉ ናቸው።",
    sustPoints: [
      { title: "የግጦሽ መሬት ማደስ",  body: "በእኛ አስተዳደር ስር ባለው የግጦሽ መሬት ላይ የሣር ሽክርክሪትና የማደስ ሥራ።" },
      { title: "የውሃ ቁጠባ",        body: "የዝናብ ውሃ መሰብሰብና ቁጥጥር ያለው ማጠጫ ከተለምዶ ስርዓት አንጻር ፍጆታን ይቀንሳል።" },
      { title: "የፍግ አያያዝ",       body: "ፍግ ወደ መኖ ሰብል ይመለሳል፤ ወደ የእርሻ ኃይልም ይቀየራል፤ የነዳጅ ጥገኝነትን ይቀንሳል።" },
      { title: "የማህበረሰብ ሥራ",    body: "በእርሻ ሥራ፣ በምግብ ምርትና በአቅርቦት ሰንሰለት ቋሚና ወቅታዊ የሥራ ዕድል።" },
    ],
    sustMetricLabels: [
      "በአስተዳደር ስር ያለ የግጦሽ መሬት",
      "የውሃ ፍጆታ ቅነሳ",
      "የተፈጠሩ ቋሚ ሥራዎች",
      "የኔት ዜሮ ዒላማ",
    ],

    galleryTag: "የእርሻ ጋለሪ",
    galleryH2:  "በእርሻ ላይ ያለ ሕይወት",

    contactTag:   "ያግኙን",
    contactH2a:   "ከፍራኦል ጋር",
    contactH2b:   "ይተባበሩ",
    contactBody:  "ገዢ፣ ኢንቨስተር፣ የልማት አጋር ወይም አነስተኛ ገበሬ ቢሆኑ ስለ ሥራዎቻችንና ስለ ሽርክና ዕድሎች ጥያቄዎን በደስታ እንቀበላለን።",
    contactInfoLabels: ["አድራሻ", "ኢሜይል", "ስልክ", "ዓለም አቀፍ"],
    contactInfoVals: ["ሰንዳፋ ከተማ አስተዳደር፣ ኦሮሚያ ክልል፣ ኢትዮጵያ", CONTACT.email, CONTACT.phone, CONTACT.mobile],
    certLabel:    "እንዴት ልንረዳዎት እንችላለን",
    certs: ["ከብትና ሽያጭ", "ገበሬዎችና አቅራቢዎች", "ኢንቨስትመንትና ፋይናንስ", "ቴክኖሎጂና ሽርክና", "የልማት ትብብር"],
    formTitle:    "ጥያቄ ይላኩ",
    formName:     "ሙሉ ስም",
    formEmail:    "ኢሜይል አድራሻ",
    formOrg:      "ድርጅት / ሚና",
    formMsg:      "መልእክት",
    formPhone:    "ስልክ",
    formInterest: "የፍላጎት መስክ",
    formInterestOpts: ["ገዢ", "አቅራቢ", "ኢንቨስትመንት", "ፋይናንስ", "ቴክኖሎጂ", "የልማት ሽርክና", "ሌላ"],
    formConsent:  "ፍራኦል ለጥያቄዬ ምላሽ ለመስጠት ይህን መረጃ እንዲጠቀም እስማማለሁ።",
    formPH:       ["ስምዎ", "you@company.com", "የኩባንያ ስም", "ጥያቄዎን ይግለጹ..."],
    formSubmit:   "ጥያቄ ላክ",
    formSuccess:  "ጥያቄው ደርሶናል",
    formSuccessB: "ፍራኦል ስማርት አግሪቢዝነስ ኃ.የ.የ.ማ.ን ስላገኙ እናመሰግናለን። የቡድናችን አባል ባቀረቡት የመገናኛ መረጃ ምላሽ ይሰጥዎታል።",

    footerDesc:   "ዘመናዊ ከብት። የተጠናከሩ ገበሬዎች። ዘለቄታዊ ዕድገት። ከኦሮሚያ ሰንዳፋ የተገነባ የተቀናጀ የከብት እሴት ሰንሰለት።",
    footerCols: [
      { heading: "ኩባንያ", links: [] },
      { heading: "ሥራዎች", links: [] },
      { heading: "ዘለቄታዊነት", links: [] },
    ],
    footerCopy:    "© 2026 ፍራኦል ስማርት አግሪቢዝነስ ኃ.የ.የ.ማ.። መብቱ በሙሉ የተጠበቀ ነው።",
    footerPrivacy: "የግል መረጃ ፖሊሲ",
    footerTerms:   "የአገልግሎት ውሎች",
  },

  /* ── AFAAN OROMOO ────────────────────────────────────────────────── */
  om: {
    brandName:    "FRAOL",
    brandSub:     "Smart Integrated Agribusiness PLC",
    tagline:      "Gatii Guddisuu · Carraa Uumuu · Boru Gaarii Ijaaruu",
    pillars:      ["Soorata", "Gabbisuu", "Qopheessuu", "Alergii"],
    navAbout:     "Waa'ee keenya",
    navServices:  "Tajaajila",
    navProcess:   "Adeemsa",
    navWhyUs:     "Maaliif nu?",
    navGallery:   "Suuraalee",
    navContact:   "Nu qunnamaa",
    navCta:       "Nu waliin hojjadhaa",

    heroTag:      "Fraol Smart Integrated Agribusiness PLC",
    heroH1a:      "Sakattaa gatii loonii dhaloota itti aanuu",
    heroH1b:      "Itoophiyaa keessatti ijaaruu.",
    heroBody:     "Oomisha loonii ammayyaa, sirna nyaataa amanamaa fi hidhata gabaa cimaa, buufata keenya naannoo Sandaafaa Oromiyaa irraa.",
    heroCta1:     "Hojiiwwan keenya ilaalaa",
    heroCta2:     "Fraol waliin hojjadhaa",

    stat1l: "Baay'ina loonii",
    stat2l: "Waggaa hojii",
    stat3l: "Iddoowwan walitti hidhaman",
    stat4l: "Madda hordofamu",

    aboutTag:     "Waa'ee FRAOL",
    aboutH2a:     "Sakattaa gatii loonii Itoophiyaa,",
    aboutH2b:     "jalqabaa hanga dhumaatti.",
    aboutP1:      "Fraol Smart Integrated Agribusiness PLC dhaabbata qonnaa Itoophiyaa kan misooma loonii, loon gabbisuu, nyaata beeyladaa, gatii qonnaa dabaluu fi hojii baadiyyaa itti fufiinsa qabu irratti xiyyeeffatedha. Kaayyoon keenya qonnaan bultootaa fi oomishtoota loonii Itoophiyaa gabaa amanamaa, sirna oomishaa fooyya'aa fi guddina daldalaa itti gaafatamummaa qabu waliin kan walqunnamsiisu waltajjii ammayyaa ijaaruudha.",
    aboutP2:      "Dhaabbatichi naannoo Sandaafaa Oromiyaa keessatti hojjeta, Finfinnee fi hawaasa qonnaa naannootti dhihoo jira. Iddoon kun loon, qabeenya nyaataa, humna namaa, tajaajila fayyaa beeyladaa, bu'uuraalee geejjibaa fi gabaa fayyadamtootaa gurguddaa argachuuf ni gargaara. Fraol hojii daldalaa ammaa tarsiimoo misooma sadarkaan raawwatamu waliin walitti fida.",
    aboutLocations: [
      "Loon gabbisuu",
      "Sirna nyaataa fi margaa",
      "Fayyaa beeyladaa fi ittisa dhukkubaa",
      "Hidhata gabaa",
    ],
    aboutCta:     "Ibsa dhaabbataa gaafadhaa",

    servicesTag:  "Waan hojjennu",
    servicesH2:   "Tajaajila loonii walitti hidhame",
    servicesBody: "Utubaa afur, hojii tokko. Mannee sooprataa irraa hanga buufata alergiitti, muuxannoo hojii gadi fagoo irratti hundaa'e.",
    services: [
      { title: "Loon gabbisuu", body: "Fraol loon fayyaalessa gabaa daldalaaf qopheessuuf filannoo sirreeffame, nyaachisuu madaalawaa, kunuunsa fayyaa beeyladaa, hordoffii ulfaatinaa fi marsaa oomishaa sirreeffame fayyadama." },
      { title: "Nyaataa fi marga", body: "Nyaanni amanamaan raawwii loonii keessatti bu'uuraadha. Fraol marga, hafteewwan midhaanii, konsantireetii, dabalata albuudaa fi qabeenya nyaataa naannootti argaman biroo ni bita, ni bulcha; hariiroo qonnaan bultootaa fi dhiyeessitootaa waliin qabus ni cimsa." },
      { title: "Fayyaa beeyladaa fi ittisa dhukkubaa", body: "Qorannoon fayyaa beeyladaa, adda baasanii eeguun, talaalliin, qulqullinni fi ittisni dhukkubaa sirna bulchiinsa loonii keenya keessatti hammatamaniiru." },
      { title: "Hidhata gabaa", body: "Fraol oomisha loonii qulqullina qabu daldaltoota, mana foonii, hoteelota, mana nyaataa, qopheessitootaa fi bitattoota daldalaa biroo waliin walqunnamsiisa; gara fuulduraattis karaa gabaa naannawaa fi alaa ni qopheessa." },
      { title: "Qonna itti fufiinsa qabu", body: "Itti fayyadama nyaataa fooyya'aa, bulchiinsa kosii loonii itti gaafatamummaa qabu, itti fayyadama bishaanii of eeggannoo qabuu fi walitti dhufeenya loonii fi midhaanii cimaadhaan bu'a qabeessummaa qabeenyaa fooyyessuuf ni hojjenna." },
    ],

    processTag:   "Akkamitti hojjenna",
    processH2:    "Adeemsa gabbisuu loonii",
    processBody:  "Sagantaa sadarkaa shan sirna qabu kan yeroo hunda loon fayyaa qaban, haala gaarii irra jiran gabaaf dhiheessu.",
    processPrev:  "← Duraa",
    processNext:  "Tarkaanfii itti aanu →",
    processSteps: [
      { title: "Madda fi bittaa",              body: "Loon fayyaa qaban sakattaa qonnaan bultoota amanamoo fi gabaa loonii irraa bitna; sanyiiwwan biyya keessaa dandeettii guddinaa fi bifa gaarii qaban dursa kennina." },
      { title: "Addaan baasanii eeguu fi sakatta'iinsa fayyaa", body: "Loon haaraan hundi addaan baafamanii eegamu. Qorannoon ogeessa fayyaa beeyladaa, yaalli raammoo, talaalliin fi mallattoon dhuunfaa gola gabbisaa seenuu dura ni xumurama." },
      { title: "Sagantaa gabbisuu soorataa",   body: "Loon sagantaa nyaachisuu guyyaa 90 hanga 180 sirna qabu hordofu: silaajii, okaa, soorata cuunfamaa fi dabalataa albuudaa kan madaalame, akkuma ulfaatinni dabaluun sirreeffama." },
      { title: "Galmee fi hordoffii raawwii",  body: "Hamma soorataa, gosa soorataa, dabala ulfaatinaa fi taateewwan fayyaa tokkoon tokkoon beeyladaatiif ni galmaa'u. Ragaan kun sirreeffama soorataa geggeessa; bitattootaafis seenaa mirkaneeffamu kenna." },
      { title: "Qophii gabaa fi ergaa",        body: "Loon ulfaatina kaayyoo ga'an gabaaf yookiin alergiif qophaa'u: ragaa fayyaa beeyladaa xumuraa, sanadoota, feesisuu fi qindoomina geejjibaa." },
    ],

    whyTag:   "Maaliif nu filattu",
    whyH2a:   "Amanamummaa irratti ijaarame.",
    whyH2b:   "Sirriitti kennama.",
    whyBody:  "Sakattaa kana keessaa qaama hunda ofii qabaachuun, jechuunis soorata, gabbisuu, qopheessuu fi alergii, qulqullinni abdiidhaan osoo hin taane bulchiinsaan mirkanaa'a; wanti jennu hundinuu galmeetti deebi'a.",
    whyCta:   "Daawwannaa oyiruu qabadhaa",
    whyCards: [
      { title: "Iddoo tarsiimawaa", body: "Iddoon keenya naannoo Sandaafaa Finfinnee fi naannoo loon oomishan argachuuf nu gargaara." },
      { title: "Sakattaa gatii walitti hidhame", body: "Loon, nyaata, qonnaan bultoota, bu'uuraalee fi gabaa moodeela hojii tokko keessatti walitti hidhina." },
      { title: "Oomisha gabaadhaaf qophaa'e", body: "Hojiin keenya qulqullina beeyladaa, marsaa bu'a qabeessaa fi gabaa amanamaa irratti karoorfama." },
      { title: "Hidhata qonnaan bultoota naannoo", body: "Moodeelli keenya dhiyeessitoota loonii, margaa fi galteewwan qonnaatiif carraa uuma." },
      { title: "Mul'ata guddachuu danda'u", body: "Fraol bu'uura hojii babal'ina gara fuulduraa itti gaafatamummaa qabu deeggaruu danda'u ijaaraa jira." },
    ],

    sustTag:   "Itti fufiinsa",
    sustH2a:   "Itti gaafatamummaadhaan qotuu",
    sustH2b:   "dhaloota itti aanuuf",
    sustBody:  "Daldalli qonnaa bu'aa qabuu fi eegumsi naannoo adda hin bahan. Hojiiwwan keenya lafa deebisanii dhaabuuf, bishaan qusachuuf fi hawaasa waliin hojjennu cimsuuf qophaa'an.",
    sustPoints: [
      { title: "Deebisanii dhaabuu lafa dheedumsaa", body: "Lafa dheedumsaa bulchiinsa keenya jala jiru irratti marsaa dheedichaa fi hojii deebisanii dhaabuu." },
      { title: "Qusannoo bishaanii",                 body: "Bishaan roobaa walitti qabuu fi dhugaatii to'atamaan sirna aadaa waliin wal bira qabamee itti fayyadama hir'isa." },
      { title: "Bulchiinsa kosii beeyladaa",         body: "Kosiin gara midhaan soorataatti deebi'a, humna oyiruu keessaatti jijjiirama; hirkattummaa boba'aa hir'isa." },
      { title: "Hojii hawaasaa",                     body: "Hojii yeroo dheeraa fi yeroo murtaa'e hojii oyiruu, oomisha soorataa fi sakattaa dhiheessii keessatti." },
    ],
    sustMetricLabels: [
      "Lafa dheedumsaa bulchiinsa jala jiru",
      "Hir'ina itti fayyadama bishaanii",
      "Hojiiwwan yeroo dheeraa uumaman",
      "Kaayyoo Net Zero",
    ],

    galleryTag: "Suuraalee oyiruu",
    galleryH2:  "Jireenya oyiruu keessaa",

    contactTag:   "Nu qunnamaa",
    contactH2a:   "FRAOL waliin",
    contactH2b:   "hojjadhaa",
    contactBody:  "Bitataa, invasteraa, michuu misoomaa yookiin qonnaan bulaa xiqqaa taatanis, gaaffii waa'ee hojii keenyaa fi carraa hariiroo gammachuun simanna.",
    contactInfoLabels: ["Teessoo", "Imeelii", "Bilbila", "Idil addunyaa"],
    contactInfoVals: ["Bulchiinsa Magaalaa Sandaafaa, Naannoo Oromiyaa, Itoophiyaa", CONTACT.email, CONTACT.phone, CONTACT.mobile],
    certLabel:    "Akkamitti isin gargaaruu dandeenya",
    certs: ["Loon fi gurgurtaa", "Qonnaan bultootaa fi dhiyeessitoota", "Invastimantii fi faayinaansii", "Teeknoolojii fi michummaa", "Waliin hojjechuu misoomaa"],
    formTitle:    "Gaaffii ergaa",
    formName:     "Maqaa guutuu",
    formEmail:    "Teessoo imeelii",
    formOrg:      "Dhaabbata / Gahee",
    formMsg:      "Ergaa",
    formPhone:    "Bilbila",
    formInterest: "Damee fedhii",
    formInterestOpts: ["Bitataa", "Dhiyeessaa", "Invastimantii", "Faayinaansii", "Teeknoolojii", "Michummaa misoomaa", "Kan biroo"],
    formConsent:  "Fraol gaaffii kootiif deebii kennuuf odeeffannoo kana akka fayyadamu nan hayyama.",
    formPH:       ["Maqaa kee", "you@company.com", "Maqaa dhaabbataa", "Waa'ee gaaffii keessanii nutti himaa..."],
    formSubmit:   "Gaaffii ergi",
    formSuccess:  "Gaaffiin keessan nu ga'eera",
    formSuccessB: "Fraol Smart Integrated Agribusiness PLC quunnamtaniif galatoomaa. Miseensi garee keenyaa odeeffannoo quunnamtii kennitaniin deebii isiniif kenna.",

    footerDesc:   "Loon ammayyaa. Qonnaan bultoota cimaa. Guddina itti fufiinsa qabu. Sakattaan gatii loonii walitti hidhame Sandaafaa Oromiyaa irraa ijaarame.",
    footerCols: [
      { heading: "Dhaabbata", links: [] },
      { heading: "Hojiiwwan", links: [] },
      { heading: "Itti fufiinsa", links: [] },
    ],
    footerCopy:    "© 2026 Fraol Smart Integrated Agribusiness PLC. Mirgi hundi seeraan kan eegamedha.",
    footerPrivacy: "Imaammata iccitii",
    footerTerms:   "Haala tajaajilaa",
  },

  /* ── NORSK ───────────────────────────────────────────────────────── */
  no: {
    brandName:    "FRAOL",
    brandSub:     "Smart Integrated Agribusiness PLC",
    tagline:      "Skape verdi · Skape muligheter · Bygge en bedre framtid",
    pillars:      ["Fôr", "Oppfôring", "Foredling", "Eksport"],
    navAbout:     "Om oss",
    navServices:  "Tjenester",
    navProcess:   "Prosess",
    navWhyUs:     "Hvorfor oss",
    navGallery:   "Galleri",
    navContact:   "Kontakt",
    navCta:       "Bli partner",

    heroTag:      "Fraol Smart Integrated Agribusiness PLC",
    heroH1a:      "Bygger Etiopias neste generasjons",
    heroH1b:      "verdikjede for husdyr.",
    heroBody:     "Moderne husdyrproduksjon, pålitelige fôrsystemer og sterkere markedskoblinger, fra basen vår i Sendafa i Oromia.",
    heroCta1:     "Se driften vår",
    heroCta2:     "Bli partner med Fraol",

    stat1l: "Antall storfe",
    stat2l: "År i drift",
    stat3l: "Integrerte anlegg",
    stat4l: "Sporbar opprinnelse",

    aboutTag:     "Om FRAOL",
    aboutH2a:     "Etiopias verdikjede for storfe,",
    aboutH2b:     "bygget fra start til slutt.",
    aboutP1:      "Fraol Smart Integrated Agribusiness PLC er et etiopisk agroselskap som arbeider med husdyrutvikling, oppfôring, dyrefôr, videreforedling i landbruket og bærekraftig virksomhet på landsbygda. Formålet er å bygge en moderne plattform som knytter etiopiske bønder og husdyrprodusenter til pålitelige markeder, bedre produksjonssystemer og ansvarlig kommersiell vekst.",
    aboutP2:      "Selskapet driver i Sendafa i Oromia, nær Addis Abeba og de omkringliggende landbruksmiljøene. Beliggenheten gir tilgang til dyr, fôrressurser, arbeidskraft, veterinærtjenester, transport og store forbrukermarkeder. Fraol kombinerer dagens kommersielle drift med en trinnvis utviklingsstrategi.",
    aboutLocations: [
      "Oppfôring av storfe",
      "Fôr og grovfôrsystemer",
      "Dyrehelse og smittevern",
      "Markedskobling",
    ],
    aboutCta:     "Be om selskapsprofil",

    servicesTag:  "Hva vi gjør",
    servicesH2:   "Integrerte husdyrtjenester",
    servicesBody: "Fire pilarer, én operasjon. Fra fôrbrettet til eksportkaia, bygget på driftserfaring framfor mellomledd.",
    services: [
      { title: "Oppfôring", body: "Fraol bruker strukturert utvalg av dyr, balansert fôring, veterinærstell, vektoppfølging og disiplinerte produksjonssykluser for å gjøre friske dyr klare for markedet." },
      { title: "Fôr og grovfôr", body: "Pålitelig fôr er avgjørende for resultatene. Fraol kjøper inn og forvalter høy, planterester, kraftfôr, mineraltilskudd og andre lokalt tilgjengelige fôrressurser, og styrker samtidig forholdet til bønder og leverandører." },
      { title: "Dyrehelse og smittevern", body: "Veterinærkontroll, karantene, vaksinering, renhold og sykdomsforebygging er en integrert del av driften." },
      { title: "Markedskobling", body: "Fraol kobler kvalitetsdyr til handlere, slaktere, hoteller, restauranter, foredlingsbedrifter og andre kommersielle kjøpere, og utvikler framtidige regionale og internasjonale markedsveier." },
      { title: "Bærekraftig landbruk", body: "Vi arbeider for bedre ressursbruk gjennom bedre fôrutnyttelse, ansvarlig gjødselhåndtering, nøktern vannbruk og tettere samspill mellom husdyrhold og planteproduksjon." },
    ],

    processTag:   "Slik arbeider vi",
    processH2:    "Oppfôringsprosessen",
    processBody:  "Et disiplinert femtrinnsprogram som konsekvent leverer sunne dyr i god kondisjon til markedet.",
    processPrev:  "← Forrige",
    processNext:  "Neste trinn →",
    processSteps: [
      { title: "Innkjøp og anskaffelse",       body: "Vi kjøper sunne dyr fra pålitelige småbondenettverk og husdyrmarkeder, med prioritet på stedegne raser med godt vekstpotensial og solid kroppsbygning." },
      { title: "Karantene og helsesjekk",      body: "Alle innkommende dyr gjennom karantene. Veterinærundersøkelse, parasittbehandling, vaksinering og individuell merking fullføres før innsett i oppfôringsbingene." },
      { title: "Ernæringsprogram",             body: "Dyrene følger et strukturert fôringsprogram på 90 til 180 dager med balanserte rasjoner av ensilasje, høy, kraftfôr og mineraltilskudd, justert etter tilvekst." },
      { title: "Journal og resultatoppfølging", body: "Fôrmengde, fôrtype, tilvekst og helsehendelser journalføres per dyr. Dataene styrer rasjonsjusteringer og gir kjøperen en etterprøvbar historikk." },
      { title: "Markedsklargjøring og forsendelse", body: "Dyr som når målvekt klargjøres for marked eller eksport: endelig veterinærattest, dokumentasjon, lasting og transportkoordinering." },
    ],

    whyTag:   "Hvorfor velge oss",
    whyH2a:   "Bygget på tillit.",
    whyH2b:   "Levert med presisjon.",
    whyBody:  "Når vi eier hvert ledd, fra fôr og oppfôring til foredling og eksport, blir kvalitet styrt framfor håpet på, og hver påstand kan spores tilbake til en journal.",
    whyCta:   "Avtal et gårdsbesøk",
    whyCards: [
      { title: "Strategisk beliggenhet", body: "Beliggenheten i Sendafa gir tilgang til Addis Abeba og til områdene rundt som produserer husdyr." },
      { title: "Integrert verdikjede", body: "Vi knytter dyr, fôr, bønder, infrastruktur og marked sammen i én praktisk driftsmodell." },
      { title: "Markedsrettet produksjon", body: "Driften planlegges rundt dyrekvalitet, effektive sykluser og pålitelig markedstilgang." },
      { title: "Kobling til lokale bønder", body: "Modellen skaper muligheter for leverandører av dyr, grovfôr og landbruksinnsats." },
      { title: "Skalerbar ambisjon", body: "Fraol bygger et driftsgrunnlag som kan bære ansvarlig vekst over tid." },
    ],

    sustTag:   "Bærekraft",
    sustH2a:   "Ansvarlig drift",
    sustH2b:   "for neste generasjon",
    sustBody:  "Lønnsomt landbruk og miljøforvaltning henger sammen. Driften er utformet for å gjenoppbygge jord, spare vann og styrke lokalsamfunnene vi kjøper fra.",
    sustPoints: [
      { title: "Restaurering av beitemark", body: "Beiterotasjon og restaurering på beitearealene vi forvalter." },
      { title: "Vannsparing",               body: "Regnvannsoppsamling og kontrollerte vanntrau reduserer forbruket mot konvensjonelle systemer." },
      { title: "Gjødselhåndtering",         body: "Gjødsel føres tilbake til fôrvekstene og omdannes til energi på gården, noe som reduserer avhengigheten av fossilt brensel." },
      { title: "Sysselsetting lokalt",      body: "Faste og sesongbaserte stillinger på tvers av gårdsdrift, fôrproduksjon og forsyningskjede." },
    ],
    sustMetricLabels: [
      "Beitemark under forvaltning",
      "Reduksjon i vannforbruk",
      "Faste stillinger opprettet",
      "Net zero-mål",
    ],

    galleryTag: "Gårdsgalleri",
    galleryH2:  "Livet på gården",

    contactTag:   "Kontakt oss",
    contactH2a:   "Samarbeid med",
    contactH2b:   "FRAOL",
    contactBody:  "Enten du er kjøper, investor, utviklingspartner eller småbonde, tar vi gjerne imot henvendelser om driften og mulige samarbeid.",
    contactInfoLabels: ["Adresse", "E-post", "Telefon", "Internasjonalt"],
    contactInfoVals: ["Sendafa bykommune, Oromia, Etiopia", CONTACT.email, CONTACT.phone, CONTACT.mobile],
    certLabel:    "Hva kan vi hjelpe med",
    certs: ["Dyr og salg", "Bønder og leverandører", "Investering og finans", "Teknologi og partnerskap", "Utviklingssamarbeid"],
    formTitle:    "Send en forespørsel",
    formName:     "Fullt navn",
    formEmail:    "E-postadresse",
    formOrg:      "Organisasjon / rolle",
    formMsg:      "Melding",
    formPhone:    "Telefon",
    formInterest: "Interesseområde",
    formInterestOpts: ["Kjøper", "Leverandør", "Investering", "Finansiering", "Teknologi", "Utviklingssamarbeid", "Annet"],
    formConsent:  "Jeg samtykker i at Fraol kan bruke denne informasjonen for å svare på henvendelsen min.",
    formPH:       ["Ditt navn", "deg@firma.no", "Firmanavn", "Fortell oss om henvendelsen..."],
    formSubmit:   "Send forespørsel",
    formSuccess:  "Henvendelsen er mottatt",
    formSuccessB: "Takk for at du kontaktet Fraol Smart Integrated Agribusiness PLC. En av våre medarbeidere svarer deg på kontaktinformasjonen du oppga.",

    footerDesc:   "Moderne husdyrhold. Sterkere bønder. Bærekraftig vekst. En integrert verdikjede bygget fra Sendafa i Oromia.",
    footerCols: [
      { heading: "Selskapet", links: [] },
      { heading: "Drift", links: [] },
      { heading: "Bærekraft", links: [] },
    ],
    footerCopy:    "© 2026 Fraol Smart Integrated Agribusiness PLC. Alle rettigheter reservert.",
    footerPrivacy: "Personvern",
    footerTerms:   "Vilkår for tjenesten",
  },
};
