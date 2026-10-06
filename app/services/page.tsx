import type { Metadata } from "next";
import ServicesHeader from "@/components/headers/ServicesHeader";
import Services from "@/components/sections/Services";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services",
  description: "Feed production, cattle fattening, processing and value addition, livestock trading and export, veterinary services and smallholder partnership.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <Services showHeading={false} alt={false} />
      <CTABand />
    </>
  );
}
