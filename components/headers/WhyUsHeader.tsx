"use client";

import { useLang } from "../LangContext";
import Crumb from "./Crumb";

export default function WhyUsHeader() {
  const { t } = useLang();

  return (
    <section className="bg-white" style={{ padding: "128px 32px 84px" }}>
      <div className="max-w-6xl mx-auto text-center">
        <Crumb current={t.navWhyUs} center />
        <div className="section-label center mb-7" style={{ justifyContent: "center" }}>{t.whyTag}</div>
        <h1 className="serif font-bold m-0 mx-auto" style={{ fontSize: "clamp(34px,5.4vw,66px)", lineHeight: 1.05, letterSpacing: "-0.025em", color: "#1E3A2F", maxWidth: 900 }}>
          {t.whyH2a}{" "}
          <em style={{ color: "#C89B3C" }}>{t.whyH2b}</em>
        </h1>
        <div className="flex items-center justify-center gap-4 mt-10">
          <span style={{ width: 40, height: 1.5, background: "#DCD4C2" }} />
          <span style={{ width: 7, height: 7, background: "#C89B3C", transform: "rotate(45deg)" }} />
          <span style={{ width: 40, height: 1.5, background: "#DCD4C2" }} />
        </div>
        <p className="m-0 mt-10 mx-auto" style={{ fontSize: 17, lineHeight: 1.85, color: "#7A7660", maxWidth: 680 }}>
          {t.whyBody}
        </p>
      </div>
    </section>
  );
}
