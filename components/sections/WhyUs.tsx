"use client";

import Link from "next/link";
import { useLang } from "../LangContext";

export default function WhyUs({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useLang();

  return (
    <section id="why-us" className="relative overflow-hidden" style={{ background: "#1E3A2F", padding: "96px 32px" }}>
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(63,107,78,0.55) 0%, transparent 60%)" }} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-why" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 72, alignItems: "start" }}>
          <div>
            {showHeading && (
              <>
                <div className="section-label light mb-5">{t.whyTag}</div>
                <h2 className="serif font-bold text-white m-0 mb-5" style={{ fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.18 }}>
                  {t.whyH2a}
                  <br />
                  <em style={{ color: "#E0B85C" }}>{t.whyH2b}</em>
                </h2>
              </>
            )}
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{t.whyBody}</p>
            <Link href="/contact" className="btn-gold">
              {t.whyCta}
            </Link>
          </div>
          <div className="why-inner grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {t.whyCards.map((w, i) => (
              <div key={i} className="why-card">
                <div style={{ fontSize: 26, marginBottom: 12 }}>{["🌾", "📋", "🐂", "🩺", "🤝", "📦"][i]}</div>
                <h4 className="font-bold text-white m-0 mb-2" style={{ fontSize: 14 }}>{w.title}</h4>
                <p className="m-0" style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.7 }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
