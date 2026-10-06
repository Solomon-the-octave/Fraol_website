"use client";

import Link from "next/link";
import { useLang } from "../LangContext";
import { ArrowRight } from "../ui";
import Crumb from "../headers/Crumb";
import type { Pair, DocCard, Phase, Fact } from "../pagecopy";

/* Shared building blocks for the pages added from the approved content guide.
   They reuse the existing palette, type scale and card treatments so the new
   routes read as part of the same site rather than a bolted on section. */

/* ── Page intro ───────────────────────────────────────────────────────
   One component, four header treatments, so every route still opens
   differently without eight near identical files. */
export function PageIntro({
  variant,
  crumb,
  tag,
  h1a,
  h1b,
  lead,
  image,
  imageAlt = "",
}: {
  variant: "split" | "green" | "plain" | "cream";
  crumb: string;
  tag: string;
  h1a: string;
  h1b: string;
  lead: string;
  image?: string;
  imageAlt?: string;
}) {
  const heading = (color: string) => (
    <h1 className="serif font-bold m-0" style={{ fontSize: "clamp(32px,4.6vw,56px)", lineHeight: 1.1, letterSpacing: "-0.02em", color }}>
      {h1a}
      <br />
      <em>{h1b}</em>
    </h1>
  );

  if (variant === "green") {
    return (
      <section style={{ background: "#1E3A2F", padding: "150px 32px 84px" }}>
        <div className="max-w-6xl mx-auto" style={{ textAlign: "center", maxWidth: 760 }}>
          <Crumb current={crumb} tone="dark" center />
          <div className="section-label light center mb-5">{tag}</div>
          {heading("#fff")}
          <div style={{ width: 64, height: 3, background: "#C89B3C", margin: "28px auto" }} />
          <p className="m-0 mx-auto" style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 620 }}>
            {lead}
          </p>
        </div>
      </section>
    );
  }

  if (variant === "plain") {
    return (
      <section style={{ background: "#fff", padding: "148px 32px 72px" }}>
        <div className="max-w-6xl mx-auto" style={{ textAlign: "center", maxWidth: 780 }}>
          <Crumb current={crumb} center />
          <div className="section-label center mb-5">{tag}</div>
          {heading("#1E3A2F")}
          <div className="flex items-center justify-center" style={{ gap: 10, margin: "26px 0" }}>
            <span style={{ width: 40, height: 1.5, background: "#DCD4C2" }} />
            <span style={{ width: 8, height: 8, background: "#C89B3C", transform: "rotate(45deg)" }} />
            <span style={{ width: 40, height: 1.5, background: "#DCD4C2" }} />
          </div>
          <p className="m-0 mx-auto" style={{ fontSize: 16, lineHeight: 1.8, color: "#7A7660", maxWidth: 640 }}>
            {lead}
          </p>
        </div>
      </section>
    );
  }

  if (variant === "cream") {
    return (
      <section style={{ background: "#F4EFE3", padding: "146px 32px 76px", borderBottom: "1px solid #DCD4C2" }}>
        <div className="max-w-6xl mx-auto">
          <Crumb current={crumb} />
          <div className="section-label mb-5">{tag}</div>
          {heading("#1E3A2F")}
          <div style={{ width: 64, height: 3, background: "#C89B3C", margin: "28px 0" }} />
          <p className="m-0" style={{ fontSize: 16, lineHeight: 1.8, color: "#7A7660", maxWidth: 660 }}>
            {lead}
          </p>
        </div>
      </section>
    );
  }

  /* split */
  return (
    <section style={{ background: "#fff", padding: "128px 32px 0" }}>
      <div
        className="max-w-6xl mx-auto grid grid-2col"
        style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 64, alignItems: "end" }}
      >
        <div className="relative header-media">
          {image && <img src={image} alt={imageAlt} className="w-full block object-cover" style={{ height: 400 }} />}
          <div className="absolute" style={{ bottom: -0, right: -10, width: 5, height: 96, background: "#C89B3C" }} />
        </div>
        <div style={{ paddingBottom: 76 }}>
          <Crumb current={crumb} />
          <div className="section-label mb-5">{tag}</div>
          {heading("#1E3A2F")}
          <div style={{ width: 64, height: 3, background: "#C89B3C", margin: "28px 0" }} />
          <p className="m-0" style={{ fontSize: 16, lineHeight: 1.8, color: "#7A7660", maxWidth: 520 }}>
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Lead paragraph band ─────────────────────────────────────────── */
export function Intro({ body, alt = false }: { body: string; alt?: boolean }) {
  return (
    <section style={{ background: alt ? "#F4EFE3" : "#fff", padding: "72px 32px 0" }}>
      <p className="max-w-6xl mx-auto m-0" style={{ fontSize: 17, lineHeight: 1.85, color: "#3D3B2E", maxWidth: 820 }}>
        {body}
      </p>
    </section>
  );
}

/* ── Numbered steps ──────────────────────────────────────────────── */
export function NumberedSteps({ heading, steps, alt = false }: { heading: string; steps: Pair[]; alt?: boolean }) {
  return (
    <section style={{ background: alt ? "#F4EFE3" : "#fff", padding: "72px 32px 88px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-8">{heading}</div>
        <div className="grid grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {steps.map((s, i) => (
            <div key={i} className="service-card">
              <div className="serif" style={{ fontSize: 34, lineHeight: 1, color: "#DCD4C2", marginBottom: 14 }}>
                {String(i + 1).padStart(2, "0")}
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

/* ── Card grid ───────────────────────────────────────────────────── */
export function CardGrid({
  heading,
  intro,
  cards,
  alt = false,
  columns = 3,
}: {
  heading: string;
  intro?: string;
  cards: Pair[];
  alt?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <section style={{ background: alt ? "#F4EFE3" : "#fff", padding: "88px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-5">{heading}</div>
        {intro && <p className="m-0 mb-9" style={{ fontSize: 15.5, lineHeight: 1.8, color: "#7A7660", maxWidth: 720 }}>{intro}</p>}
        <div
          className={columns === 2 ? "grid grid-2col" : "grid grid-3col"}
          style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 22, marginTop: intro ? 0 : 32 }}
        >
          {cards.map((c, i) => (
            <div key={i} className="service-card">
              <h3 className="serif font-semibold m-0 mb-3" style={{ fontSize: 18, color: "#1E3A2F" }}>{c.title}</h3>
              <p className="m-0" style={{ fontSize: 13.5, color: "#7A7660", lineHeight: 1.75 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Checklist panel, optionally beside an image ─────────────────── */
export function Checklist({
  heading,
  items,
  image,
  alt = false,
}: {
  heading: string;
  items: string[];
  image?: string;
  alt?: boolean;
}) {
  const list = (
    <ul className="m-0" style={{ listStyle: "none", padding: 0 }}>
      {items.map((it) => (
        <li key={it} className="flex items-start" style={{ gap: 12, padding: "11px 0", borderBottom: "1px solid #DCD4C2" }}>
          <span style={{ width: 7, height: 7, marginTop: 8, background: "#C89B3C", transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ fontSize: 14.5, lineHeight: 1.7, color: "#3D3B2E" }}>{it}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section style={{ background: alt ? "#F4EFE3" : "#fff", padding: "88px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-8">{heading}</div>
        {image ? (
          <div className="grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>{list}</div>
            <div className="header-media">
              <img src={image} alt="" aria-hidden="true" className="w-full block object-cover" style={{ height: 420 }} />
            </div>
          </div>
        ) : (
          list
        )}
      </div>
    </section>
  );
}

/* ── Facts strip ──────────────────────────────────────────────────────
   Operating figures as large display numerals with the explanation beneath,
   rather than small stat cells. The figures are the evidence an investor or
   lender scans for first, so they are given the weight of a headline. */
export function FactStrip({ heading, note, facts }: { heading: string; note: string; facts: Fact[] }) {
  return (
    <section style={{ background: "#1E3A2F", padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label light" style={{ marginBottom: 46 }}>{heading}</div>
        <div className="fact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: 48, rowGap: 46 }}>
          {facts.map((f) => (
            <div key={f.label}>
              <div
                className="serif font-bold"
                style={{ fontSize: "clamp(38px,4.6vw,58px)", color: "#E0B85C", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {f.value}
              </div>
              <div style={{ width: 38, height: 2, background: "rgba(200,155,60,0.45)", margin: "16px 0 14px" }} />
              <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.62)", lineHeight: 1.65, maxWidth: 230 }}>{f.label}</div>
            </div>
          ))}
        </div>
        <p
          className="m-0"
          style={{
            fontSize: 12.5, color: "rgba(255,255,255,0.42)", marginTop: 52, paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)", maxWidth: 760, lineHeight: 1.75,
          }}
        >
          {note}
        </p>
      </div>
    </section>
  );
}

/* ── Note band ───────────────────────────────────────────────────── */
export function NoteBand({ heading, body, alt = true }: { heading: string; body: string; alt?: boolean }) {
  return (
    <section style={{ background: alt ? "#F4EFE3" : "#fff", padding: "64px 32px", borderTop: "1px solid #DCD4C2" }}>
      <div className="max-w-6xl mx-auto grid grid-2col" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 48 }}>
        <h2 className="serif font-bold m-0" style={{ fontSize: "clamp(20px,2.6vw,28px)", color: "#1E3A2F", lineHeight: 1.25 }}>
          {heading}
        </h2>
        <p className="m-0" style={{ fontSize: 15, lineHeight: 1.85, color: "#7A7660" }}>{body}</p>
      </div>
    </section>
  );
}

/* ── Phase roadmap ───────────────────────────────────────────────── */
export function Roadmap({ heading, phases }: { heading: string; phases: Phase[] }) {
  return (
    <section style={{ background: "#fff", padding: "88px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-8">{heading}</div>
        <div className="grid grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {phases.map((ph, i) => (
            <div key={ph.label} style={{ border: "1.5px solid #DCD4C2", padding: "28px 26px", background: i === 0 ? "#F4EFE3" : "#fff" }}>
              <div className="flex items-center justify-between mb-4" style={{ gap: 10 }}>
                <span className="serif" style={{ fontSize: 26, color: "#DCD4C2", lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: i === 0 ? "#1E3A2F" : "#8A7A45",
                    background: i === 0 ? "#EFE3C6" : "#F4EFE3",
                    padding: "5px 10px",
                  }}
                >
                  {ph.status}
                </span>
              </div>
              <h3 className="serif font-semibold m-0 mb-4" style={{ fontSize: 18, color: "#1E3A2F" }}>{ph.label}</h3>
              {ph.items.map((it) => (
                <div key={it} className="flex items-start" style={{ gap: 10, padding: "7px 0" }}>
                  <span style={{ width: 5, height: 5, marginTop: 8, background: "#C89B3C", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "#7A7660", lineHeight: 1.65 }}>{it}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Document cards ──────────────────────────────────────────────── */
export function DocumentGrid({ heading, cards, button }: { heading: string; cards: DocCard[]; button: string }) {
  return (
    <section style={{ background: "#F4EFE3", padding: "88px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-8">{heading}</div>
        <div className="grid grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {cards.map((c) => (
            <div key={c.title} className="service-card flex flex-col">
              <div className="mb-4" style={{ color: "#3F6B4E" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 2.5h7.5L19 8v13.5H6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M13.5 2.5V8H19" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M9 13.5l2 2 4-4" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="serif font-semibold m-0 mb-3" style={{ fontSize: 17, color: "#1E3A2F" }}>{c.title}</h3>
              <p className="m-0 mb-5" style={{ fontSize: 13.5, color: "#7A7660", lineHeight: 1.75, flexGrow: 1 }}>{c.body}</p>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3F6B4E", marginBottom: 14 }}>
                {c.status}
              </div>
              <Link href="/contact" className="no-underline flex items-center" style={{ gap: 8, fontSize: 12.5, fontWeight: 600, color: "#C89B3C" }}>
                {button} <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing call to action ──────────────────────────────────────── */
export function ActionBand({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section style={{ background: "#1E3A2F", padding: "76px 32px" }}>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-9">
        <div style={{ maxWidth: 560 }}>
          <h2 className="serif font-bold m-0 mb-4" style={{ fontSize: "clamp(22px,3vw,32px)", color: "#fff", lineHeight: 1.2 }}>
            {heading}
          </h2>
          <p className="m-0" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>{body}</p>
        </div>
        <div className="flex flex-wrap" style={{ gap: 14 }}>
          <Link href={primary.href} className="btn-gold">
            {primary.label} <ArrowRight />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Two link cards, used to point into sub pages ────────────────── */
export function LinkCards({ heading, cards }: { heading: string; cards: (Pair & { href: string })[] }) {
  const { p } = useLang();
  return (
    <section style={{ background: "#F4EFE3", padding: "88px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-8">{heading}</div>
        <div className="grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="service-card no-underline block">
              <h3 className="serif font-semibold m-0 mb-3" style={{ fontSize: 20, color: "#1E3A2F" }}>{c.title}</h3>
              <p className="m-0 mb-5" style={{ fontSize: 13.5, color: "#7A7660", lineHeight: 1.75 }}>{c.body}</p>
              <span className="flex items-center" style={{ gap: 8, fontSize: 12.5, fontWeight: 600, color: "#C89B3C" }}>
                {p.learnMore} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Manifesto ────────────────────────────────────────────────────────
   Vision, mission and purpose as full width editorial rows separated by
   hairlines, deliberately unlike the card grids the other pages use. */
export function Manifesto({ heading, rows }: { heading: string; rows: Pair[] }) {
  return (
    <section style={{ background: "#1E3A2F", padding: "92px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label light mb-10">{heading}</div>
        {rows.map((r, i) => (
          <div
            key={r.title}
            className="manifesto-row"
            style={{
              display: "grid",
              gridTemplateColumns: "0.42fr 1fr",
              gap: 40,
              padding: "34px 0",
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.16)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.16)",
              alignItems: "start",
            }}
          >
            <h3 className="serif font-bold m-0" style={{ fontSize: "clamp(21px,2.5vw,29px)", color: "#E0B85C", lineHeight: 1.2 }}>
              {r.title}
            </h3>
            <p className="m-0" style={{ fontSize: "clamp(15px,1.7vw,18px)", lineHeight: 1.8, color: "rgba(255,255,255,0.84)" }}>
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Value index ──────────────────────────────────────────────────────
   A numbered two column index. Hairlines rather than cards, so it reads
   as a document rather than another grid of boxes. */
export function ValueIndex({ heading, values }: { heading: string; values: Pair[] }) {
  return (
    <section style={{ background: "#fff", padding: "92px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-10">{heading}</div>
        <div className="value-index" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 64 }}>
          {values.map((v, i) => (
            <div
              key={v.title}
              style={{ display: "flex", gap: 20, padding: "26px 0", borderTop: "1px solid #DCD4C2", alignItems: "baseline" }}
            >
              <span className="serif" style={{ fontSize: 15, color: "#C89B3C", letterSpacing: "0.04em", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="serif font-semibold m-0 mb-2" style={{ fontSize: 19, color: "#1E3A2F" }}>{v.title}</h3>
                <p className="m-0" style={{ fontSize: 14, lineHeight: 1.75, color: "#7A7660" }}>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process timeline ─────────────────────────────────────────────────
   The operating cycle as a single vertical spine with the stage number
   on the rail, instead of a row of identical cards. */
export function Timeline({ heading, steps }: { heading: string; steps: Pair[] }) {
  return (
    <section style={{ background: "#F4EFE3", padding: "92px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="section-label mb-10">{heading}</div>
        <div style={{ maxWidth: 860 }}>
          {steps.map((s, i) => (
            <div key={s.title} className="timeline-row" style={{ display: "grid", gridTemplateColumns: "76px 1fr", gap: 28 }}>
              <div className="relative" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  className="serif font-bold"
                  style={{
                    width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                    border: "1.5px solid #C89B3C", color: "#1E3A2F", background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                  }}
                >
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span style={{ width: 1, flexGrow: 1, background: "#DCD4C2", marginTop: 6 }} />}
              </div>
              <div style={{ paddingBottom: i < steps.length - 1 ? 40 : 0, paddingTop: 10 }}>
                <h3 className="serif font-semibold m-0 mb-3" style={{ fontSize: "clamp(18px,2.2vw,23px)", color: "#1E3A2F" }}>{s.title}</h3>
                <p className="m-0" style={{ fontSize: 15, lineHeight: 1.8, color: "#7A7660", maxWidth: 640 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
