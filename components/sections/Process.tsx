"use client";

import { useState } from "react";
import { useLang } from "../LangContext";
import { PROCESS_IMGS, PROCESS_ALTS } from "../ui";

export default function Process({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState(0);
  const step = t.processSteps[activeStep];
  const last = t.processSteps.length - 1;

  return (
    <section id="process" className="bg-white" style={{ padding: "96px 32px" }}>
      <div className="max-w-6xl mx-auto">
        {showHeading && (
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <div className="section-label center mb-5">{t.processTag}</div>
            <h2 className="serif font-bold m-0 mb-4" style={{ fontSize: "clamp(26px,3.5vw,42px)", color: "#1E3A2F", lineHeight: 1.18 }}>
              {t.processH2}
            </h2>
            <p className="m-0" style={{ color: "#7A7660", lineHeight: 1.75 }}>{t.processBody}</p>
          </div>
        )}

        <div className="flex mb-12 border-b-2 overflow-x-auto" style={{ borderColor: "#DCD4C2" }}>
          {t.processSteps.map((s, i) => (
            <button key={i} onClick={() => setActiveStep(i)} className={`step-tab${activeStep === i ? " active" : ""}`}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: activeStep === i ? "#C89B3C" : "#7A7660" }}>
                0{i + 1}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: activeStep === i ? "#1E3A2F" : "#7A7660", marginTop: 3, whiteSpace: "nowrap" }}>{s.title}</div>
            </button>
          ))}
        </div>

        <div className="process-grid grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="serif font-bold" style={{ fontSize: 60, color: "#E4DCCB", lineHeight: 1, marginBottom: 10 }}>0{activeStep + 1}</div>
            <h3 className="serif font-bold m-0 mb-5" style={{ fontSize: 28, color: "#1E3A2F", lineHeight: 1.2 }}>{step.title}</h3>
            <p style={{ fontSize: 15, color: "#3D3B2E", lineHeight: 1.8, marginBottom: 32 }}>{step.body}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                style={{
                  padding: "10px 20px",
                  border: "1.5px solid #DCD4C2",
                  background: "none",
                  cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  opacity: activeStep === 0 ? 0.4 : 1,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {t.processPrev}
              </button>
              <button
                onClick={() => setActiveStep(Math.min(last, activeStep + 1))}
                disabled={activeStep === last}
                className="btn-dark"
                style={{ opacity: activeStep === last ? 0.4 : 1, cursor: activeStep === last ? "not-allowed" : "pointer" }}
              >
                {t.processNext}
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={PROCESS_IMGS[activeStep]} alt={PROCESS_ALTS[activeStep]} className="w-full block object-cover" style={{ height: 380 }} />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: `linear-gradient(to right, #C89B3C ${((activeStep + 1) / t.processSteps.length) * 100}%, #DCD4C2 0%)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
