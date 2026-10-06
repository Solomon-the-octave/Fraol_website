"use client";

import { useLang } from "../LangContext";
import { PageIntro, Roadmap, CardGrid, NoteBand, FactStrip, ActionBand } from "../sections/blocks";

export default function ProjectsPage() {
  const { t, p } = useLang();
  const pr = p.projects;

  return (
    <>
      <PageIntro variant="cream" crumb={p.navProjects} tag={pr.tag} h1a={pr.h1a} h1b={pr.h1b} lead={pr.lead} />
      <Roadmap heading={pr.phaseHeading} phases={pr.phases} />
      <CardGrid heading={pr.areasHeading} cards={pr.areas} alt />
      <FactStrip heading={p.factsHeading} note={p.factsNote} facts={p.facts} />
      <NoteBand heading={pr.noteHeading} body={pr.note} alt={false} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: p.partners.cta1, href: "/partners" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
