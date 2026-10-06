"use client";

import { useLang } from "../LangContext";

export default function PillarBand() {
  const { t } = useLang();

  return (
    <section style={{ background: "#1E3A2F", padding: "26px 32px" }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <div className="pillar-row brandfont" style={{ color: "#fff" }}>
          {t.pillars.map((p, i) => (
            <span key={p} className="inline-flex items-center gap-3.5">
              {i > 0 && <span className="dot" />}
              <span>{p}</span>
            </span>
          ))}
        </div>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", textAlign: "center" }}>{t.tagline}</div>
      </div>
    </section>
  );
}
