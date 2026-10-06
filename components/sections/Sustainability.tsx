"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";

export default function Sustainability() {
  const { t, p } = useLang();

  return (
    <section id="sustainability" style={{ background: "#EFEAE0", padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <div className="section-label mb-5">{t.sustTag}</div>
          <h2 className="serif font-bold m-0 mb-6" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1E3A2F", lineHeight: 1.18 }}>
            {t.sustH2a}
            <br />
            <em>{t.sustH2b}</em>
          </h2>
          <p className="mb-10" style={{ color: "#3D3B2E", lineHeight: 1.8 }}>{p.sust.lead}</p>
          <div className="flex flex-col gap-6">
            {p.sust.priorities.slice(0, 4).map((pt, i) => (
              <div key={i} className="flex gap-5" style={{ alignItems: "flex-start" }}>
                <div className="shrink-0" style={{ width: 3, minHeight: 30, background: "#C89B3C", marginTop: 2 }} />
                <div style={{ fontSize: 14, color: "#3D3B2E", lineHeight: 1.7 }}>{pt}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={IMG.pasture} alt="Fodder land supporting Fraol's feed supply" className="w-full block object-cover" style={{ height: 460 }} />
        </div>
      </div>
    </section>
  );
}
