"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import { PageIntro, Intro, Checklist, NoteBand, LinkCards, ActionBand } from "../sections/blocks";

export default function SustainabilityPage() {
  const { t, p } = useLang();
  const s = p.sust;

  return (
    <>
      <PageIntro variant="cream" crumb={p.navSustainability} tag={s.tag} h1a={s.h1a} h1b={s.h1b} lead={s.lead} />
      <Intro body={s.body} />
      <Checklist heading={s.priorityHeading} items={s.priorities} image={IMG.aboutField} />
      <NoteBand heading={s.welfareHeading} body={s.welfareBody} />
      <LinkCards
        heading={p.navCommunity}
        cards={[
          { title: p.community.h1a + " " + p.community.h1b, body: p.community.lead, href: "/sustainability/community-impact" },
          { title: p.projects.h1a + " " + p.projects.h1b, body: p.projects.lead, href: "/projects" },
        ]}
      />
      <NoteBand heading={s.growthHeading} body={s.growthBody} alt={false} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: p.partners.cta1, href: "/partners" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
