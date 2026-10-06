"use client";

import { useLang } from "../LangContext";
import { Manifesto, ValueIndex, ActionBand } from "../sections/blocks";

/* The parts of About that come from the approved content guide: vision,
   mission and purpose, then the six values. Both are deliberately built
   from hairline rows rather than cards, so About does not read like the
   operations pages. */
export function AboutManifesto() {
  const { p } = useLang();
  const a = p.about;
  return <Manifesto heading={a.vmHeading} rows={[a.vision, a.mission, a.purpose]} />;
}

export function AboutValues() {
  const { p } = useLang();
  return <ValueIndex heading={p.about.valuesHeading} values={p.about.values} />;
}

export function AboutAction() {
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
