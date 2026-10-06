/* Shape of the page copy added from the approved
   "Website Content and Publishing Guide" (September 2026).

   One interface, four language files, so TypeScript keeps every language in
   step. Copy convention, as everywhere in this project: no em dashes in any
   visible string, in any language. */

export interface Pair { title: string; body: string }
export interface DocCard { title: string; body: string; status: string }
export interface Phase { label: string; status: string; items: string[] }
export interface Fact { value: string; label: string }

export interface PageCopy {
  /* Navigation labels for the added routes */
  navOperations: string;
  navSustainability: string;
  navProjects: string;
  navPartners: string;
  navDocuments: string;
  navCattle: string;
  navFeed: string;
  navCommunity: string;

  /* Shared */
  learnMore: string;
  factsHeading: string;
  factsNote: string;
  facts: Fact[];

  about: {
    vmHeading: string;
    vision: Pair;
    mission: Pair;
    purpose: Pair;
    valuesHeading: string;
    values: Pair[];
  };

  ops: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    processHeading: string; steps: Pair[];
    infraHeading: string; infra: string[];
    commitHeading: string; commitBody: string;
    exploreHeading: string; explore: Pair[];
  };

  cattle: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    approachHeading: string; approach: string[];
    qualityHeading: string; qualityBody: string;
  };

  feed: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    resourcesHeading: string; resources: Pair[];
    linkHeading: string; linkBody: string;
    priorityHeading: string; priorities: string[];
  };

  sust: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    priorityHeading: string; priorities: string[];
    growthHeading: string; growthBody: string;
    welfareHeading: string; welfareBody: string;
  };

  community: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    goalsHeading: string; goals: string[];
    partnerHeading: string; partnerBody: string;
  };

  projects: {
    tag: string; h1a: string; h1b: string; lead: string;
    phaseHeading: string; phases: Phase[];
    areasHeading: string; areas: Pair[];
    noteHeading: string; note: string;
  };

  partners: {
    tag: string; h1a: string; h1b: string; lead: string; body: string;
    routesHeading: string; routes: Pair[];
    infoHeading: string; info: string[];
    ctaHeading: string; ctaBody: string; cta1: string; cta2: string;
  };

  docs: {
    tag: string; h1a: string; h1b: string; lead: string; notice: string;
    catHeading: string; cats: DocCard[]; requestBtn: string;
    processHeading: string; steps: Pair[];
    protectHeading: string; protect: Pair[];
  };
}
