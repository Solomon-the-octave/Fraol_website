"use client";

import { useLang } from "../LangContext";
import Crumb from "./Crumb";

export default function ServicesHeader() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden" style={{ background: "#1E3A2F", padding: "150px 32px 72px" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(63,107,78,0.6) 0%, transparent 62%)" }} />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Crumb current={t.navServices} tone="dark" center />
        <div className="section-label center light mb-6" style={{ justifyContent: "center" }}>{t.servicesTag}</div>
        <h1 className="serif font-bold text-white m-0 mx-auto" style={{ fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.12, letterSpacing: "-0.02em", maxWidth: 760 }}>
          {t.servicesH2}
        </h1>
        <p className="m-0 mt-6 mx-auto" style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", maxWidth: 600 }}>
          {t.servicesBody}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-11">
          {t.pillars.map((p, i) => (
            <span key={p} className="pillar-chip brandfont">
              <span style={{ color: "#C89B3C", marginRight: 8 }}>0{i + 1}</span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
