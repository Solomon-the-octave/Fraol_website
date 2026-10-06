"use client";

import { useState, useEffect } from "react";
import { useLang } from "../LangContext";
import { ArrowRight } from "../ui";

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", org: "", phone: "", interest: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSent(false);
  }, [lang]);

  return (
    <section id="contact" className="bg-white" style={{ padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto grid grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
        <div>
          {showHeading && (
            <>
              <div className="section-label mb-5">{t.contactTag}</div>
              <h2 className="serif font-bold m-0 mb-5" style={{ fontSize: "clamp(26px,3.5vw,38px)", color: "#1E3A2F", lineHeight: 1.18 }}>
                {t.contactH2a}
                <br />
                {t.contactH2b}
              </h2>
            </>
          )}
          <p className="mb-12" style={{ color: "#7A7660", lineHeight: 1.8 }}>{t.contactBody}</p>

          {t.contactInfoLabels.map((label, i) => (
            <div key={i} className="flex gap-5 mb-6">
              <div className="shrink-0" style={{ width: 3, height: 44, background: "#C89B3C" }} />
              <div>
                <div className="font-bold" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A7660", marginBottom: 4 }}>
                  {label}
                </div>
                <div className="font-medium" style={{ fontSize: 14, color: "#3D3B2E" }}>{t.contactInfoVals[i]}</div>
              </div>
            </div>
          ))}

          <div className="mt-8 p-6" style={{ background: "#F4EFE3", borderLeft: "3px solid #C89B3C" }}>
            <div className="font-bold mb-3" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A7660" }}>
              {t.certLabel}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {t.certs.map((c) => (
                <span key={c} className="font-semibold flex items-center" style={{ fontSize: 12, color: "#3F6B4E", gap: 7 }}>
                  <span style={{ width: 6, height: 6, background: "#C89B3C", transform: "rotate(45deg)", flexShrink: 0 }} />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#F4EFE3", padding: "44px 40px", alignSelf: "start" }}>
          <h3 className="serif font-bold m-0 mb-7" style={{ fontSize: 22, color: "#1E3A2F" }}>{t.formTitle}</h3>
          {sent ? (
            <div className="text-center" style={{ padding: "48px 0" }}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" style={{ margin: "0 auto 16px", display: "block" }}>
                <circle cx="22" cy="22" r="20" stroke="#3F6B4E" strokeWidth="1.6" />
                <path d="M14 22.5l5.5 5.5L30 17" stroke="#C89B3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="serif font-bold mb-2" style={{ fontSize: 20, color: "#1E3A2F" }}>{t.formSuccess}</div>
              <p style={{ color: "#7A7660", fontSize: 14 }}>{t.formSuccessB}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                /* TODO: wire to a real endpoint (see README.md → Contact form) */
                setSent(true);
              }}
              className="flex flex-col gap-5"
            >
              {(
                [
                  { key: "name",  label: t.formName,  type: "text",  ph: t.formPH[0], required: true  },
                  { key: "email", label: t.formEmail, type: "email", ph: t.formPH[1], required: true  },
                  { key: "org",   label: t.formOrg,   type: "text",  ph: t.formPH[2], required: false },
                  { key: "phone", label: t.formPhone, type: "tel",   ph: "+251",      required: false },
                ] as const
              ).map((f) => (
                <div key={f.key}>
                  <label className="block font-bold mb-1.5" style={{ fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "#7A7660" }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    required={f.required}
                    className="field"
                    value={(form as Record<string, string>)[f.key]}
                    onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                  />
                </div>
              ))}

              {/* Area of interest routes the enquiry, per the content guide */}
              <div>
                <label className="block font-bold mb-1.5" style={{ fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "#7A7660" }}>
                  {t.formInterest}
                </label>
                <select
                  className="field"
                  required
                  value={form.interest}
                  onChange={(e) => setForm((p) => ({ ...p, interest: e.target.value }))}
                >
                  <option value="" disabled>
                    {t.formInterest}
                  </option>
                  {t.formInterestOpts.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-bold mb-1.5" style={{ fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "#7A7660" }}>
                  {t.formMsg}
                </label>
                <textarea
                  rows={4}
                  placeholder={t.formPH[3]}
                  required
                  className="field"
                  style={{ resize: "vertical" }}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                />
              </div>
              {/* Consent wording is fixed by the content guide */}
              <label className="flex items-start" style={{ gap: 10, fontSize: 12.5, color: "#7A7660", lineHeight: 1.6, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: 3, accentColor: "#3F6B4E", width: 15, height: 15, flexShrink: 0 }}
                />
                <span>{t.formConsent}</span>
              </label>

              <button type="submit" className="btn-dark w-full justify-center" style={{ marginTop: 4 }}>
                {t.formSubmit} <ArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
