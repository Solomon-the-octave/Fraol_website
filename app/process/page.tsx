import type { Metadata } from "next";
import ProcessHeader from "@/components/headers/ProcessHeader";
import Process from "@/components/sections/Process";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Process",
  description: "The five-stage FRAOL cattle fattening programme: sourcing, quarantine and health screening, nutritional fattening, record keeping and market dispatch.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHeader />
      <Process showHeading={false} />
      <CTABand />
    </>
  );
}
