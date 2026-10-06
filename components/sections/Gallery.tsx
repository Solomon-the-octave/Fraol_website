"use client";

import { useLang } from "../LangContext";
import { GALLERY_IMGS } from "../ui";

export default function Gallery({ showHeading = true, limit }: { showHeading?: boolean; limit?: number }) {
  const { t } = useLang();
  const items = limit ? GALLERY_IMGS.slice(0, limit) : GALLERY_IMGS;

  return (
    <section id="gallery" style={{ background: "#F4EFE3", padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <div style={{ textAlign: "center", maxWidth: 460, margin: "0 auto 48px" }}>
            <div className="section-label center mb-5">{t.galleryTag}</div>
            <h2 className="serif font-bold m-0" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1E3A2F", lineHeight: 1.18 }}>
              {t.galleryH2}
            </h2>
          </div>
        )}
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "240px", gap: 10 }}>
          {items.map((g, i) => (
            <div key={i} className={`gallery-item${g.wide ? " gallery-wide" : ""}`} style={{ gridColumn: g.wide ? "span 2" : "span 1" }}>
              <img src={g.src} alt={g.alt} />
              <div className="gallery-caption" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
