"use client";

import { useLang } from "../LangContext";
import { CONTACT } from "../i18n";
import Crumb from "./Crumb";

export default function ContactHeader() {
  const { t } = useLang();

  const actions = [
    { label: t.contactInfoLabels[1], value: CONTACT.email,  href: `mailto:${CONTACT.email}` },
    { label: t.contactInfoLabels[2], value: CONTACT.phone,  href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { label: t.contactInfoLabels[3], value: CONTACT.mobile, href: `tel:${CONTACT.mobile.replace(/\s/g, "")}` },
  ];

  return (
    <section className="bg-white" style={{ padding: "128px 32px 0", borderBottom: "1px solid #DCD4C2" }}>
      <div
        className="max-w-6xl mx-auto grid grid-2col"
        style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "start", paddingBottom: 72 }}
      >
        <div>
          <Crumb current={t.navContact} />
          <div className="section-label mb-5">{t.contactTag}</div>
          <h1 className="serif font-bold m-0" style={{ fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#1E3A2F" }}>
            {t.contactH2a}
            <br />
            <em style={{ color: "#C89B3C" }}>{t.contactH2b}</em>
          </h1>
        </div>

        <div className="flex flex-col gap-3" style={{ paddingTop: 8 }}>
          {actions.map((a) => (
            <a key={a.label} href={a.href} className="action-chip no-underline">
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A7660" }}>{a.label}</span>
              <span className="font-medium" style={{ fontSize: 15, color: "#1E3A2F" }}>{a.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
