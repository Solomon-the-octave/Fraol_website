import type { Metadata } from "next";
import WhyUsHeader from "@/components/headers/WhyUsHeader";
import WhyUs from "@/components/sections/WhyUs";
import Sustainability from "@/components/sections/Sustainability";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Why Us",
  description: "Four integrated pillars, animal-level records and traceability, veterinary oversight and end-to-end export logistics.",
};

export default function WhyUsPage() {
  return (
    <>
      <WhyUsHeader />
      <WhyUs showHeading={false} />
      <Sustainability />
      <CTABand />
    </>
  );
}
