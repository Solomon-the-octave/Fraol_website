"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import { PageIntro, Intro, Timeline, Checklist, FactStrip, NoteBand, LinkCards, ActionBand } from "../sections/blocks";

export default function OperationsPage() {
  const { t, p } = useLang();
  const o = p.ops;

  return (
    <>
      <PageIntro variant="cream" crumb={p.navOperations} tag={o.tag} h1a={o.h1a} h1b={o.h1b} lead={o.lead} />
      <Intro body={o.body} />
      <Timeline heading={o.processHeading} steps={o.steps} />
      <FactStrip heading={p.factsHeading} note={p.factsNote} facts={p.facts} />
      <Checklist heading={o.infraHeading} items={o.infra} image={IMG.barnFarm} alt />
      <LinkCards
        heading={o.exploreHeading}
        cards={[
          { ...o.explore[0], href: "/operations/cattle-fattening" },
          { ...o.explore[1], href: "/operations/feed-and-fodder" },
        ]}
      />
      <NoteBand heading={o.commitHeading} body={o.commitBody} alt={false} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: p.partners.cta1, href: "/partners" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
