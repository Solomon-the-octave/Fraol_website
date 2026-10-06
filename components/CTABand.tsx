"use client";

import Link from "next/link";
import { useLang } from "./LangContext";
import { ArrowRight } from "./ui";

export default function CTABand() {
  const { t } = useLang();

  return (
    <section style={{ background: "#F4EFE3", padding: "68px 32px", borderTop: "1px solid #DCD4C2" }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8">
        <div>
          <div className="section-label mb-4">{t.contactTag}</div>
          <h2 className="serif font-bold m-0" style={{ fontSize: "clamp(22px,3vw,32px)", color: "#1E3A2F", lineHeight: 1.2 }}>
            {t.contactH2a} {t.contactH2b}
          </h2>
        </div>
        <Link href="/contact" className="btn-gold">
          {t.navCta} <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
