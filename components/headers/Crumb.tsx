"use client";

import Link from "next/link";
import { useLang } from "../LangContext";

/* Breadcrumb used by every page header. `tone` matches the header background. */
export default function Crumb({ current, tone = "light", center = false }: { current: string; tone?: "light" | "dark"; center?: boolean }) {
  const { t } = useLang();
  const dim = tone === "dark" ? "rgba(255,255,255,0.4)" : "#9A9583";

  return (
    <div
      className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}
      style={{ fontSize: 11, letterSpacing: "0.1em", color: dim, marginBottom: 18 }}
    >
      <Link href="/" className="no-underline crumb-home" style={{ color: dim }}>
        {t.brandName}
      </Link>
      <span>/</span>
      <span style={{ color: "#C89B3C" }}>{current}</span>
    </div>
  );
}
