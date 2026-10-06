"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import { PageIntro, Intro, Checklist, NoteBand, ActionBand } from "../sections/blocks";

export default function CommunityImpactPage() {
  const { t, p } = useLang();
  const c = p.community;

  return (
    <>
      <PageIntro variant="plain" crumb={p.navCommunity} tag={c.tag} h1a={c.h1a} h1b={c.h1b} lead={c.lead} />
      <Intro body={c.body} alt />
      <Checklist heading={c.goalsHeading} items={c.goals} image={IMG.sunsetCow} alt />
      <NoteBand heading={c.partnerHeading} body={c.partnerBody} alt={false} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: p.partners.cta1, href: "/partners" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
