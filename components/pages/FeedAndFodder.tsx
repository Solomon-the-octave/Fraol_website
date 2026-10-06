"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import { PageIntro, Intro, CardGrid, Checklist, NoteBand, ActionBand } from "../sections/blocks";

export default function FeedAndFodderPage() {
  const { t, p } = useLang();
  const f = p.feed;

  return (
    <>
      <PageIntro
        variant="split"
        crumb={p.navFeed}
        tag={f.tag}
        h1a={f.h1a}
        h1b={f.h1b}
        lead={f.lead}
        image={IMG.pasture}
        imageAlt=""
      />
      <Intro body={f.body} />
      <CardGrid heading={f.resourcesHeading} cards={f.resources} alt />
      <Checklist heading={f.priorityHeading} items={f.priorities} image={IMG.barn} />
      <NoteBand heading={f.linkHeading} body={f.linkBody} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: p.partners.cta1, href: "/partners" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
