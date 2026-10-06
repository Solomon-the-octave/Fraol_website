"use client";

import Link from "next/link";
import { useLang } from "../LangContext";
import { IMG, ArrowRight } from "../ui";

export default function Hero() {
  const { t, p } = useLang();

  /* The bar carries the approved operating facts from the content guide
     rather than invented figures. See components/pagecopy/index.ts. */
  const stats = p.facts.slice(0, 4).map((f) => ({ value: f.value, label: f.label }));

  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-shell" style={{ background: "#14261C" }}>
      <img src={IMG.hero} alt="Cattle at Fraol's livestock operation in Sendafa, Oromia" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 200, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: 140, background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)" }} />

      <div className="relative z-10 w-full text-center px-6 hero-inner">
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div className="section-label center light mb-6" style={{ justifyContent: "center" }}>
            {t.heroTag}
          </div>
          <h1 className="serif font-bold text-white m-0 mb-6" style={{ fontSize: "clamp(29px, 6vw, 76px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            {t.heroH1a}
            <br />
            <em className="not-italic" style={{ color: "#E0B85C" }}>
              {t.heroH1b}
            </em>
          </h1>
          <p className="mb-10 m-0 mx-auto hero-lead" style={{ lineHeight: 1.75, color: "rgba(255,255,255,0.82)", maxWidth: 580 }}>
            {t.heroBody}
          </p>
          <div className="hero-btns flex flex-wrap gap-4 justify-center">
            <Link href="/operations" className="btn-gold">
              {t.heroCta1} <ArrowRight />
            </Link>
            <Link href="/partners" className="btn-ghost">
              {t.heroCta2}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 hero-stats" style={{ background: "rgba(30,58,47,0.9)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="stats-grid grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-cell text-center" style={{ padding: "22px 0" }}>
                <div className="serif font-bold text-white" style={{ fontSize: 28 }}>{s.value}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.42)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
