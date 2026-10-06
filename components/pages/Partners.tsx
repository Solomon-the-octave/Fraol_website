"use client";

import { useLang } from "../LangContext";
import { PageIntro, Intro, CardGrid, Checklist, ActionBand } from "../sections/blocks";

export default function PartnersPage() {
  const { p } = useLang();
  const pa = p.partners;

  return (
    <>
      <PageIntro variant="green" crumb={p.navPartners} tag={pa.tag} h1a={pa.h1a} h1b={pa.h1b} lead={pa.lead} />
      <Intro body={pa.body} />
      <CardGrid heading={pa.routesHeading} cards={pa.routes} alt />
      <Checklist heading={pa.infoHeading} items={pa.info} />
      <ActionBand
        heading={pa.ctaHeading}
        body={pa.ctaBody}
        primary={{ label: pa.cta1, href: "/contact" }}
        secondary={{ label: pa.cta2, href: "/contact" }}
      />
    </>
  );
}
