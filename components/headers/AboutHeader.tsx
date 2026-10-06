"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import Crumb from "./Crumb";

export default function AboutHeader() {
  const { t } = useLang();

  return (
    <section style={{ background: "#F4EFE3", padding: "128px 32px 0" }}>
      <div
        className="max-w-6xl mx-auto grid grid-2col"
        style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "end" }}
      >
        <div style={{ paddingBottom: 76 }}>
          <Crumb current={t.navAbout} />
          <div className="section-label mb-5">{t.aboutTag}</div>
          <h1 className="serif font-bold m-0" style={{ fontSize: "clamp(32px,4.6vw,56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#1E3A2F" }}>
            {t.aboutH2a}
            <br />
            <em>{t.aboutH2b}</em>
          </h1>
          <div style={{ width: 64, height: 3, background: "#C89B3C", margin: "28px 0" }} />
          <p className="m-0" style={{ fontSize: 16, lineHeight: 1.8, color: "#7A7660", maxWidth: 520 }}>
            {t.tagline}
          </p>
        </div>

        <div className="relative header-media">
          <img src={IMG.cowPortrait} alt="" aria-hidden="true" className="w-full block object-cover" style={{ height: 400 }} />
          <div className="absolute" style={{ top: -0, left: -10, width: 5, height: 96, background: "#C89B3C" }} />
        </div>
      </div>
    </section>
  );
}
