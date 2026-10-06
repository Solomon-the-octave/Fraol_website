"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import { PageIntro, Intro, Checklist, NoteBand, ActionBand } from "../sections/blocks";

export default function CattleFatteningPage() {
  const { t, p } = useLang();
  const c = p.cattle;

  return (
    <>
      <PageIntro
        variant="split"
        crumb={p.navCattle}
        tag={c.tag}
        h1a={c.h1a}
        h1b={c.h1b}
        lead={c.lead}
        image={IMG.cowClose}
        imageAlt=""
      />
      <Intro body={c.body} />
      <Checklist heading={c.approachHeading} items={c.approach} image={IMG.herd} />
      <NoteBand heading={c.qualityHeading} body={c.qualityBody} />
      <ActionBand
        heading={p.ops.exploreHeading}
        body={p.ops.explore[1].body}
        primary={{ label: p.navFeed, href: "/operations/feed-and-fodder" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
