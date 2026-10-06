"use client";

import { useLang } from "../LangContext";
import Crumb from "./Crumb";

export default function ProcessHeader() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden" style={{ background: "#F4EFE3", padding: "128px 32px 0" }}>
      {/* oversized ghost numeral */}
      <div
        aria-hidden="true"
        className="serif font-bold absolute ghost-numeral"
        style={{ top: 96, right: 20, fontSize: 260, lineHeight: 0.8, color: "#E4DCCB", userSelect: "none" }}
      >
        0{t.processSteps.length}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Crumb current={t.navProcess} />
        <div className="section-label mb-5">{t.processTag}</div>
        <h1 className="serif font-bold m-0" style={{ fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#1E3A2F", maxWidth: 620 }}>
          {t.processH2}
        </h1>
        <p className="m-0 mt-6" style={{ fontSize: 16, lineHeight: 1.75, color: "#7A7660", maxWidth: 560 }}>
          {t.processBody}
        </p>

        {/* stage rail */}
        <div className="stage-rail" style={{ marginTop: 56, paddingBottom: 40 }}>
          {t.processSteps.map((s, i) => (
            <div key={i} className="stage-rail-item">
              <div className="flex items-center gap-2.5">
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#C89B3C", flexShrink: 0 }} />
                {i < t.processSteps.length - 1 && <span className="stage-rail-line" />}
              </div>
              <div className="mt-3" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#C89B3C" }}>0{i + 1}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#3D3B2E", marginTop: 2, lineHeight: 1.4 }}>{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
