"use client";

import Link from "next/link";
import { useLang, useLabel } from "./LangContext";
import { ROUTES } from "./ui";
import { CONTACT } from "./i18n";

/* Footer.

   Three link columns grouped the way the nav groups them, plus a brand
   column that carries the real registered contact details. Nothing here
   points at a page that does not exist: the placeholder social row and the
   non-functional privacy and terms text were removed rather than left as
   dead links, which is what made the old footer read as unfinished. */

const GROUPS: string[][] = [
  ["/about", "/why-us", "/projects", "/partners", "/documents"],
  ["/operations", "/operations/cattle-fattening", "/operations/feed-and-fodder", "/services", "/process"],
  ["/sustainability", "/sustainability/community-impact", "/gallery", "/contact"],
];

export default function Footer() {
  const { t } = useLang();
  const label = useLabel();
  const flat = ROUTES.flatMap((r) => [r, ...(r.children ?? [])]);

  const contactRows = [
    { label: t.contactInfoLabels[0], value: t.contactInfoVals[0], href: null },
    { label: t.contactInfoLabels[1], value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: t.contactInfoLabels[2], value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { label: t.contactInfoLabels[3], value: CONTACT.mobile, href: `tel:${CONTACT.mobile.replace(/\s/g, "")}` },
  ];

  return (
    <footer style={{ background: "#162C23" }}>
      <div className="max-w-6xl mx-auto px-8" style={{ paddingTop: 72 }}>
        <div
          className="footer-grid grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          {/* Brand and registered contact details */}
          <div>
            <div className="flex items-center" style={{ gap: 11, marginBottom: 18 }}>
              <img src="/logo/fraol-icon-light.png" alt="" aria-hidden="true" style={{ height: 42, width: "auto", display: "block" }} />
              <span className="flex flex-col" style={{ lineHeight: 1.15 }}>
                <span className="brandfont font-extrabold text-white" style={{ fontSize: 21, letterSpacing: "0.04em" }}>
                  {t.brandName}
                </span>
                <span
                  className="brandfont font-semibold"
                  style={{ fontSize: 7.5, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C89B3C", marginTop: 3 }}
                >
                  {t.brandSub}
                </span>
              </span>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.46)", maxWidth: 290, margin: "0 0 24px" }}>
              {t.footerDesc}
            </p>

            <div className="flex flex-col" style={{ gap: 11 }}>
              {contactRows.map((row) => (
                <div key={row.label}>
                  <div
                    className="font-bold"
                    style={{ fontSize: 8.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 3 }}
                  >
                    {row.label}
                  </div>
                  {row.href ? (
                    <a href={row.href} className="footer-contact no-underline" style={{ fontSize: 13.5 }}>
                      {row.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 260 }}>{row.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Route columns */}
          {GROUPS.map((group, i) => (
            <div key={i}>
              <div
                className="font-bold"
                style={{ fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C89B3C", marginBottom: 18 }}
              >
                {t.footerCols[i]?.heading}
              </div>
              {group.map((href) => {
                const route = flat.find((r) => r.href === href);
                if (!route) return null;
                return (
                  <Link key={href} href={href} className="footer-link no-underline block" style={{ fontSize: 13, paddingBlock: 5 }}>
                    {label(route.key)}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className="footer-base flex flex-wrap items-center justify-between"
          style={{ gap: 12, paddingTop: 26, paddingBottom: 30, fontSize: 12, color: "rgba(255,255,255,0.34)" }}
        >
          <span>{t.footerCopy}</span>
          <span style={{ letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 10 }}>{t.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
