import type { Metadata } from "next";
import AboutHeader from "@/components/headers/AboutHeader";
import About from "@/components/sections/About";
import PillarBand from "@/components/sections/PillarBand";
import { AboutManifesto, AboutValues, AboutAction } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fraol Smart Integrated Agribusiness PLC: vision, mission and values behind a modern livestock value chain built from Sendafa, Oromia.",
};

/* About carries the company's own statements: who it is, then vision,
   mission and purpose, then what it stands for. No service cards here,
   those belong on Operations. */
export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <About showHeading={false} />
      <AboutManifesto />
      <AboutValues />
      <PillarBand />
      <AboutAction />
    </>
  );
}
