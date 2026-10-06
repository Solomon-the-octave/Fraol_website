"use client";

import { useLang } from "../LangContext";
import { IMG } from "../ui";
import Crumb from "./Crumb";

export default function GalleryHeader() {
  const { t } = useLang();

  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: "58vh", background: "#14261C" }}>
      <img src={IMG.pasture} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(20,38,28,0.35) 45%, rgba(20,38,28,0.88) 100%)" }} />

      <div className="relative z-10 w-full px-8" style={{ paddingTop: 160, paddingBottom: 56 }}>
        <div className="max-w-6xl mx-auto">
          <Crumb current={t.navGallery} tone="dark" />
          <div className="section-label light mb-5">{t.galleryTag}</div>
          <h1 className="serif font-bold text-white m-0" style={{ fontSize: "clamp(34px,5vw,60px)", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            {t.galleryH2}
          </h1>
        </div>
      </div>
    </section>
  );
}
