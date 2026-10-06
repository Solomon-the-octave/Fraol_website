"use client";

import { useLang } from "../LangContext";
import { PageIntro, NumberedSteps, DocumentGrid, CardGrid, ActionBand } from "../sections/blocks";

export default function DocumentsPage() {
  const { t, p } = useLang();
  const d = p.docs;

  return (
    <>
      <PageIntro variant="plain" crumb={p.navDocuments} tag={d.tag} h1a={d.h1a} h1b={d.h1b} lead={d.lead} />

      {/* Publication rule from the content guide: no full scans, no personal
          identifiers, verified document cards only. */}
      <section style={{ background: "#fff", padding: "48px 32px 8px" }}>
        <div
          className="max-w-6xl mx-auto flex items-start"
          style={{ gap: 16, maxWidth: 860, background: "#F4EFE3", border: "1px solid #DCD4C2", padding: "22px 24px" }}
        >
          <span style={{ width: 8, height: 8, marginTop: 8, background: "#C89B3C", transform: "rotate(45deg)", flexShrink: 0 }} />
          <p className="m-0" style={{ fontSize: 14, lineHeight: 1.8, color: "#3D3B2E" }}>{d.notice}</p>
        </div>
      </section>

      <DocumentGrid heading={d.catHeading} cards={d.cats} button={d.requestBtn} />
      <NumberedSteps heading={d.processHeading} steps={d.steps} />
      <CardGrid heading={d.protectHeading} cards={d.protect} alt columns={2} />
      <ActionBand
        heading={p.partners.ctaHeading}
        body={p.partners.ctaBody}
        primary={{ label: d.requestBtn, href: "/contact" }}
        secondary={{ label: t.navContact, href: "/contact" }}
      />
    </>
  );
}
