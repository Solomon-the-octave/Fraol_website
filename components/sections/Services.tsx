"use client";

import { useLang } from "../LangContext";

export default function Services({ showHeading = true, alt = true }: { showHeading?: boolean; alt?: boolean }) {
  const { t } = useLang();

  return (
    <section id="services" style={{ background: alt ? "#F4EFE3" : "#fff", padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
            <div className="section-label center mb-5">{t.servicesTag}</div>
            <h2 className="serif font-bold m-0 mb-4" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1E3A2F", lineHeight: 1.18 }}>
              {t.servicesH2}
            </h2>
            <p className="m-0" style={{ color: "#7A7660", lineHeight: 1.75 }}>{t.servicesBody}</p>
          </div>
        )}
        <div className="grid grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {t.services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="mb-5" style={{ color: "#3F6B4E" }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.4" />
                  <text x="18" y="23" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">
                    {i + 1}
                  </text>
                </svg>
              </div>
              <h3 className="serif font-semibold m-0 mb-3" style={{ fontSize: 18, color: "#1E3A2F" }}>{s.title}</h3>
              <p className="m-0" style={{ fontSize: 13.5, color: "#7A7660", lineHeight: 1.75 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
