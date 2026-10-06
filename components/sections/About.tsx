"use client";

import Link from "next/link";
import { useLang } from "../LangContext";
import { IMG, ArrowRight } from "../ui";

export default function About({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white" style={{ padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div className="relative">
          <img src={IMG.aboutField} alt="Mixed herd of cattle on Ethiopian farmland" className="w-full block object-cover" style={{ height: 440 }} />
          <div className="absolute overflow-hidden border-4 border-white" style={{ bottom: -28, right: -28, width: 200, height: 160, boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}>
            <img src={IMG.cowPortrait} alt="Close portrait of farm cattle" className="w-full h-full object-cover" />
          </div>
          <div className="absolute" style={{ top: 28, left: -8, width: 5, height: 80, background: "#C89B3C" }} />
        </div>
        <div className="pr-4">
          {showHeading && (
            <>
              <div className="section-label mb-5">{t.aboutTag}</div>
              <h2 className="serif font-bold m-0 mb-6" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1E3A2F", lineHeight: 1.18 }}>
                {t.aboutH2a}
                <br />
                <em>{t.aboutH2b}</em>
              </h2>
            </>
          )}
          <p className="mb-4 m-0" style={{ color: "#3D3B2E", lineHeight: 1.8 }}>{t.aboutP1}</p>
          <p className="mb-8" style={{ color: "#7A7660", lineHeight: 1.8 }}>{t.aboutP2}</p>
          <div className="grid mb-9" style={{ gridTemplateColumns: "1fr 1fr", gap: "14px 28px" }}>
            {t.aboutLocations.map((item) => (
              <div key={item} className="flex items-center gap-2.5" style={{ fontSize: 13, color: "#3D3B2E", fontWeight: 500 }}>
                <span className="rounded-full shrink-0" style={{ width: 6, height: 6, background: "#C89B3C" }} />
                {item}
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-dark">
            {t.aboutCta} <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
