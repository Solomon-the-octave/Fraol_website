import type { PageCopy } from "./types";

/* Norsk (bokmål). Translation of the approved English copy.
   Still to be reviewed by a native speaker before launch (see README). */

const no: PageCopy = {
  navOperations:     "Drift",
  navSustainability: "Bærekraft",
  navProjects:       "Prosjekter",
  navPartners:       "Partnere",
  navDocuments:      "Dokumenter",
  navCattle:         "Oppfôring",
  navFeed:           "Fôr og grovfôr",
  navCommunity:      "Lokal virkning",

  learnMore:    "Les mer",
  factsHeading: "Dagens driftsbilde",
  factsNote:    "Tallene er omtrentlige og beskriver dagens drift. Større volumer omtales som planlagt kapasitet, aldri som dagens produksjon.",
  facts: [
    { value: "90 dager", label: "Produksjonssyklus" },
    { value: "120",      label: "Dyr per syklus, omtrentlig" },
    { value: "100 000",  label: "Fôr og grovfôrbunter i året, omtrentlig" },
    { value: "5 000",    label: "Lagerkapasitet i baller, omtrentlig" },
    { value: "1,2 ha",   label: "Driftsområde, omtrentlig" },
    { value: "37 km",    label: "Fra Addis Abeba" },
  ],

  about: {
    vmHeading: "Visjon, oppdrag og formål",
    vision: { title: "Vår visjon", body: "Å bli et ledende etiopisk husdyr og agroselskap, kjent for bærekraftig produksjon, sterke partnerskap med bønder, dyr av god kvalitet og ansvarlig landbruksutvikling." },
    mission: { title: "Vårt oppdrag", body: "Å bygge en effektiv og integrert verdikjede som forener husdyrproduksjon, pålitelige fôrsystemer, dyrehelse, bærekraftig ressursbruk og sterke markedskoblinger." },
    purpose: { title: "Vårt formål", body: "Å knytte etiopiske bønder og husdyrprodusenter til pålitelige markeder, bedre produksjonssystemer og ansvarlig kommersiell vekst." },
    valuesHeading: "Det vi står for",
    values: [
      { title: "Integritet", body: "Vi bygger relasjoner gjennom åpenhet, ansvarlighet og tillit." },
      { title: "Dyrevelferd", body: "Vi fremmer ansvarlig dyrestell og profesjonell husdyrdrift." },
      { title: "Bærekraft", body: "Vi søker produktiv og ansvarlig bruk av jord, fôr, vann og landbruksressurser." },
      { title: "Partnerskap", body: "Vi vokser gjennom samarbeid med bønder, bedrifter, institusjoner og lokalsamfunn." },
      { title: "Nyskaping", body: "Vi tar i bruk praktisk teknologi og bedre styringssystemer som gir målbar verdi." },
      { title: "Lokal virkning", body: "Vi vil skape muligheter for bønder, ansatte, leverandører og lokalsamfunnene rundt oss." },
    ],
  },

  ops: {
    tag:  "Vår drift",
    h1a:  "Et integrert husdyrsystem,",
    h1b:  "fra innkjøp til marked.",
    lead: "Fraol utvikler en integrert driftsmodell som kombinerer innkjøp av dyr, karantene, fôring, dyrehelse, fôrlagring, logistikk, datahåndtering og markedstilgang.",
    body: "Driftsmodellen er utformet for å gi jevnere resultater, redusere unødvendige tap og forberede friske dyr til markedet gjennom strukturerte produksjonssykluser.",

    processHeading: "Driftsprosess",
    steps: [
      { title: "Innkjøp og utvalg av dyr", body: "Friske dyr som egner seg for oppfôring velges fra husdyrproduserende områder og pålitelige kommersielle kanaler." },
      { title: "Karantene og helsekontroll", body: "Nyankomne dyr observeres, vurderes og behandles før de går inn i hovedbesetningen." },
      { title: "Fôring og vannforsyning", body: "Dyrene får strukturerte rasjoner med grovfôr, kraftfôr og mineraler, samt kontinuerlig tilgang til rent vann." },
      { title: "Oppfølging av resultater", body: "Vekt, fôrbruk, helseobservasjoner og behandlinger følges gjennom hele syklusen." },
      { title: "Markedsklargjøring og salg", body: "Ferdige dyr matches mot kjøpernes krav til vekt, hold, kvalitet og tidspunkt." },
    ],

    infraHeading: "Driftsinfrastruktur",
    infra: [
      "Husdyrrom og fôringsarealer",
      "Lager for fôr og grovfôr",
      "Karantene og behandlingsområde",
      "Vannforsyning og drikkesystemer",
      "Drenering og håndtering av husdyrgjødsel",
      "Lasteområde og kjøretøyadkomst",
      "Administrasjon og fasiliteter for ansatte",
      "Framtidig digital merking og resultatoppfølging",
    ],

    commitHeading: "Driftsforpliktelse",
    commitBody:    "Fraols prioritet er disiplinert gjennomføring. Vekst i besetning, infrastruktur eller markedsrekkevidde skjer trinnvis i takt med fôrtilgang, kapasitet innen dyrehelse, arbeidskapital, etterspørsel fra kjøpere og myndighetskrav.",

    exploreHeading: "Inn i driften",
    explore: [
      { title: "Oppfôring", body: "Strukturert utvalg, balansert fôring, veterinærstell og vektoppfølging gjennom en produksjonssyklus på 90 dager." },
      { title: "Fôr og grovfôr", body: "Innkjøp, lagring og rasjonsplanlegging bygget på pålitelige forhold til lokale bønder og leverandører." },
    ],
  },

  cattle: {
    tag:  "Vår drift",
    h1a:  "Friske dyr,",
    h1b:  "strukturert fôring.",
    lead: "Fraols oppfôringsmodell er utformet for å bedre dyrenes hold, markedsverdi og kjøttkvalitet gjennom strukturert fôring og profesjonell husdyrdrift.",
    body: "Dagens drift håndterer omtrent 120 dyr per produksjonssyklus på 90 dager. Syklusen begynner med nøye utvalg og karantene, etterfulgt av kontrollert fôring, helsestell, resultatoppfølging og planlagt salg.",

    approachHeading: "Vår tilnærming",
    approach: [
      "Utvalg av friske dyr som passer oppfôringsprogrammet",
      "Karantene og veterinærkontroll før innsett i besetningen",
      "Balansert bruk av grovfôr, kraftfôr og mineraltilskudd",
      "Kontinuerlig tilgang til rent vann",
      "Rutinemessig oppfølging av vekt og hold",
      "Vaksinering, parasittbehandling og sykdomsforebygging",
      "Rene binger, drenering og godt renhold",
      "Ansvarlig håndtering og dyrevelferd",
      "Produksjonsplanlegging tilpasset etterspørselen",
    ],

    qualityHeading: "Kvalitetsmål",
    qualityBody:    "Målet er å levere friske, godt ivaretatte og markedsklare dyr, med disiplinert dyrestell, sporbare driftsregistreringer og kommersiell bærekraft.",
  },

  feed: {
    tag:  "Vår drift",
    h1a:  "Pålitelig fôring,",
    h1b:  "lokalt innkjøpt.",
    lead: "Pålitelig fôrtilgang er grunnlaget for produktiv husdyrdrift.",
    body: "Fraol kjøper inn og forvalter høy, planterester, kraftfôr, biprodukter fra landbruksindustrien, mineraler og andre lokalt tilgjengelige fôrressurser. Selskapet håndterer i dag et årlig volum på omtrent 100 000 høy og grovfôrbunter, og har lagerkapasitet for omtrent 5 000 høyballer.",

    resourcesHeading: "Fôrressurser",
    resources: [
      { title: "Grovfôr",   body: "Høy, grønnfôr, planterester og gras som støtter fordøyelse og vomfunksjon." },
      { title: "Energifôr", body: "Maisbaserte råvarer, hvetekli og egnede biprodukter fra landbruksindustrien." },
      { title: "Proteinfôr", body: "Oljefrøkaker og andre egnede proteinkilder brukt i en balansert rasjon." },
      { title: "Mineraler", body: "Salt og mineraltilskudd som støtter stoffskifte, tilvekst og fôrutnyttelse." },
      { title: "Vann",      body: "Rent og kontinuerlig vann for fordøyelse, temperaturregulering og dyrehelse." },
    ],

    linkHeading: "Bønder og leverandører",
    linkBody:    "Fraol søker langsiktige forhold til lokale bønder, samvirker, fôrprodusenter og transportører. Disse forholdene styrker tilgangen gjennom hele året og skaper samtidig nye inntektsmuligheter i den lokale landbruksøkonomien.",

    priorityHeading: "Prioriteringer i fôrhåndtering",
    priorities: [
      "Kvalitetskontroll ved innkjøp og levering",
      "Tørr og ryddig lagring",
      "Lager og svinnkontroll",
      "Rasjonsplanlegging tilpasset vekt og hold",
      "Pålitelige sesongavtaler for innkjøp",
      "Framtidig utvikling av grovfôrproduksjon og fôrbehandling",
    ],
  },

  sust: {
    tag:  "Bærekraft",
    h1a:  "Produktiv drift,",
    h1b:  "ansvarlig gjennomføring.",
    lead: "Fraol mener at produktiv agrovirksomhet og miljøansvar må utvikles sammen.",
    body: "Tilnærmingen vår handler om praktiske forbedringer i fôrutnyttelse, gjødselhåndtering, vannbruk, drenering, renhold og bruk av biprodukter fra landbruket. Dette reduserer svinn, beskytter dyrehelsen og styrker driftens motstandskraft over tid.",

    priorityHeading: "Miljøprioriteringer",
    priorities: [
      "Ansvarlig innsamling og håndtering av husdyrgjødsel",
      "Bruk av husdyrgjødsel som organisk gjødsel der det er teknisk egnet",
      "Effektiv vannbruk og pålitelige drikkesystemer",
      "Bedre drenering og rene husdyrrom",
      "Produktiv bruk av planterester og egnede biprodukter",
      "Mindre fôrsvinn under transport, lagring og fôring",
      "Framtidig vurdering av solenergi og biogass",
    ],

    growthHeading: "Ansvarlig vekst",
    growthBody:    "Framtidige miljøpåstander skal bygge på målte driftsdata. Fraol vil unngå å publisere udokumenterte påstander om karbonkutt eller nullutslipp inntil pålitelige referanseverdier, målemetoder og verifiserte resultater foreligger.",

    welfareHeading: "Dyrevelferd",
    welfareBody:    "Ansvarlig husdyrdrift betyr rent vann, riktig fôring, veterinærhjelp i tide, trygg håndtering, rene binger og nok plass. Fraol arbeider for å bygge disse prinsippene inn i rutinene og i framtidig infrastruktur.",
  },

  community: {
    tag:  "Bærekraft",
    h1a:  "Vekst som rekker",
    h1b:  "ut over gården.",
    lead: "Fraols vekst skal skape økonomiske muligheter også utenfor gården.",
    body: "Selskapet skaper etterspørsel etter livdyr, høy, planterester, transport, veterinærtjenester, landbruksinnsats, byggetjenester og lokal arbeidskraft. Gjennom pålitelige kommersielle forhold kan Fraol knytte produsenter på landsbygda til større bymarkeder.",

    goalsHeading: "Våre lokale mål",
    goals: [
      "Støtte lokale husdyrprodusenter og fôrleverandører",
      "Skape direkte og indirekte arbeidsplasser",
      "Bygge pålitelige og langsiktige forhold til bønder",
      "Styrke husdyr og fôrmarkedene mellom landsbygd og by",
      "Fremme praktisk husdyrdrift og god registrering",
      "Utvide mulighetene for ungdom og kvinner etter hvert som driften vokser",
      "Samarbeide konstruktivt med lokale institusjoner og lokalsamfunn",
    ],

    partnerHeading: "Områder for utviklingssamarbeid",
    partnerBody:    "Fraol ønsker utviklingssamarbeid innen opplæring av bønder, dyrehelse, klimatilpassede fôrsystemer, deltakelse for ungdom og kvinner, vannforvaltning, fornybar energi og lokal infrastruktur. Enhver offentlig påstand om deltakere, arbeidsplasser eller miljøvirkning skal knyttes til en avtalt målemetode.",
  },

  projects: {
    tag:  "Prosjekter og utvidelse",
    h1a:  "Bygger for",
    h1b:  "langsiktig vekst.",
    lead: "Fraol utvikler husdyrdriften trinnvis. Utvidelsen bygger på dagens oppfôring, fôrinnkjøp og lagring, og forbedrer infrastruktur, teknologi, bærekraft og markedstilgang.",

    phaseHeading: "Utviklingsplan",
    phases: [
      { label: "Driftsgrunnlag", status: "I dag", items: ["Oppfôring av dyr", "Innkjøp av fôr og grovfôr", "Lager og grunnleggende infrastruktur"] },
      { label: "Kapasitet og teknologi", status: "Planlagt", items: ["Utvidet driftsinfrastruktur", "Veterinær og smittevernfasiliteter", "Digital gårdsdrift"] },
      { label: "Marked og videreforedling", status: "Langsiktig", items: ["Samarbeid om foredling", "Beredskap for kjølekjede", "Regionale og internasjonale markeder"] },
    ],

    areasHeading: "Utviklingsområder",
    areas: [
      { title: "Driftsinfrastruktur",      body: "Bedre husdyrrom, fôringsganger, vannsystemer, karantene, lasteområder, drenering og adkomst." },
      { title: "Fôrlager og fôrbehandling", body: "Utvidet lager, bedre lagerstyring og framtidige systemer for fôrbehandling som støtter pålitelig fôring hele året." },
      { title: "Veterinær og smittevern",  body: "Egne løsninger for karantene, behandling, renhold og oppfølging, støttet av profesjonelle dyrehelsetjenester." },
      { title: "Digital gårdsdrift",       body: "Framtidig bruk av dyremerking, elektronisk veiing, fôrlager, helseregistre, økonomikontroll og styringsoversikt." },
      { title: "Markedsutvikling",         body: "Langsiktige leveranseforhold med kommersielle kjøpere, foredlingsbedrifter og markedspartnere i Etiopia og utvalgte regionale markeder." },
      { title: "Foredling og videreforedling", body: "Fraols langsiktige strategi kan omfatte dypere deltakelse i kjøttforedling og eksportrettet videreforedling, forutsatt mulighetsstudier, finansiering, tekniske partnerskap, markedsavtaler og godkjenninger." },
    ],

    noteHeading: "Slik leser du denne siden",
    note:        "Dagens drift og framtidige planer presenteres hver for seg. Alt som beskrives som planlagt eller langsiktig avhenger av finansiering, tekniske studier, partnerskap og godkjenninger, og er ikke dagens produksjonskapasitet.",
  },

  partners: {
    tag:  "Partnere og investorer",
    h1a:  "Samarbeid for",
    h1b:  "bærekraftig vekst.",
    lead: "Fraol Smart Integrated Agribusiness PLC ønsker samarbeid med organisasjoner som deler vår ambisjon om moderne, bærekraftig og kommersielt levedyktig landbruksutvikling i Etiopia.",
    body: "Vi ønsker partnerskap med kjøpere, strategiske investorer, finansinstitusjoner, utviklingsorganisasjoner, fôrselskaper, teknologileverandører, utstyrsleverandører, universiteter, veterinærfaglige miljøer, foredlingsbedrifter og markedspartnere.",

    routesHeading: "Samarbeidsmuligheter",
    routes: [
      { title: "Strategisk investering", body: "Langsiktig samarbeid om å utvide husdyrproduksjon, infrastruktur og videreforedling." },
      { title: "Teknisk partnerskap",    body: "Anleggsdesign, fôring, veterinærsystemer, digital styring, foredlingsteknologi og driftsstøtte." },
      { title: "Finansielt partnerskap", body: "Bankfinansiering, utviklingsfinansiering, blandet finansiering og kvalifiserte tilskuddsfinansierte deler." },
      { title: "Markedspartnerskap",     body: "Leveranse av dyr, avtaler om avtak, utvikling av kjøttmarkedet og framtidig eksportadgang." },
      { title: "Utviklingssamarbeid",    body: "Inkludering av bønder, klimatilpasset landbruk, opplæring, sysselsetting, fornybar energi, vann og lokal utvikling." },
    ],

    infoHeading: "Informasjon tilgjengelig for kvalifiserte partnere",
    info: [
      "Registrerings og lisensdokumentasjon",
      "Mulighetsstudie og forretningsplan",
      "Informasjon om areal og lokalisering",
      "Drifts og økonomiinformasjon tilpasset henvendelsen",
      "Infrastrukturplaner og utstyrsbehov",
      "Markeds og partnerskapsdokumentasjon",
      "Miljø og samfunnsmessig planinformasjon",
    ],

    ctaHeading: "Ønsker du å samarbeide med Fraol",
    ctaBody:    "Kontakt ledelsen for å be om selskapsprofil, prosjektnotat, partnerskapsforslag eller en kontrollert dokumentasjonspakke.",
    cta1:       "Be om partnerinformasjon",
    cta2:       "Kontakt Fraols ledelse",
  },

  docs: {
    tag:  "Selskapsdokumenter",
    h1a:  "Registrert, dokumentert",
    h1b:  "og klar for gjennomgang.",
    lead: "Fraol Smart Integrated Agribusiness PLC har den selskaps, skatte, lisens og prosjektdokumentasjonen som kreves for virksomheten og for kontakt med myndigheter, finansinstitusjoner og kvalifiserte partnere.",
    notice: "Av hensyn til sikkerhet og personvern publiseres ikke fullstendige versjoner av sensitive dokumenter åpent på nettstedet. Verifiserte kopier kan deles gjennom en kontrollert prosess når det er relevant.",

    catHeading: "Dokumentkategorier",
    cats: [
      { title: "Foretaksregistrering", body: "Registreringsdokumentasjon utstedt av relevant myndighet.", status: "Tilgjengelig ved gjennomgang" },
      { title: "Næringslisens",        body: "Lisensdokumentasjon for selskapets godkjente virksomhet.", status: "Tilgjengelig ved gjennomgang" },
      { title: "Skatteidentifikasjon", body: "Dokumentasjon på selskapets skatteidentifikasjon.", status: "Tilgjengelig ved gjennomgang" },
      { title: "MVA registrering",     body: "Gjeldende dokumentasjon på merverdiavgiftsregistrering.", status: "Tilgjengelig ved gjennomgang" },
      { title: "Selskapsvedtekter",    body: "Stiftelsesdokument og vedtekter.", status: "Tilgjengelig ved gjennomgang" },
      { title: "Areal og tomtedokumenter", body: "Relevant dokumentasjon på arealbruk, tomt og rettigheter.", status: "Tilgjengelig ved gjennomgang" },
      { title: "Mulighetsstudie",      body: "Dokumentasjon på prosjektets mulighetsstudie og driftsplan.", status: "Kontrollert tilgang" },
      { title: "Finansielle dokumenter", body: "Bank, finansierings og regnskapsdokumentasjon.", status: "Kontrollert tilgang" },
      { title: "Tekniske dokumenter",  body: "Dokumentasjon på infrastruktur, miljø og driftsplanlegging.", status: "Kontrollert tilgang" },
    ],
    requestBtn: "Be om verifisert kopi",

    processHeading: "Verifiseringsprosess",
    steps: [
      { title: "Send forespørsel",   body: "Oppgi dokumentkategori og formålet med forespørselen." },
      { title: "Vurdering av part",  body: "Vi vurderer organisasjonen og den tiltenkte bruken av informasjonen." },
      { title: "Konfidensialitet",   body: "Gjensidige konfidensialitetsavtaler bekreftes der det er relevant." },
      { title: "Kontrollert tilgang", body: "Godkjente parter mottar relevant dokumentasjon." },
    ],

    protectHeading: "Slik beskytter vi informasjon",
    protect: [
      { title: "Sladdede forhåndsvisninger", body: "Personidentifikatorer, signaturer, registreringsnumre og maskinlesbare koder fjernes før en dokumentvisning vises." },
      { title: "Kvalifisert tilgang",  body: "Dokumenter deles bare med verifiserte institusjoner, rådgivere og partnere." },
      { title: "Kontrollert deling",   body: "Tilgangen er begrenset til det godkjente formålet med henvendelsen." },
      { title: "Konfidensialitet",     body: "Alle parter forventes å behandle delt materiale konfidensielt." },
    ],
  },
};

export default no;
