"use client";

import { useLang } from "../LangContext";
import { FactStrip, ActionBand } from "../sections/blocks";

/* Homepage sections that carry the approved content guide's copy:
   the verified operating facts below the hero, and the partnership banner
   that the guide places between sustainability and the gallery. */

export function HomeFacts() {
  const { p } = useLang();
  return <FactStrip heading={p.factsHeading} note={p.factsNote} facts={p.facts} />;
}

export function HomePartnerBand() {
  const { t, p } = useLang();
  return (
    <ActionBand
      heading={p.partners.ctaHeading}
      body={p.partners.ctaBody}
      primary={{ label: p.partners.cta1, href: "/partners" }}
      secondary={{ label: t.navContact, href: "/contact" }}
    />
  );
}
