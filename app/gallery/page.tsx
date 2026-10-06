import type { Metadata } from "next";
import GalleryHeader from "@/components/headers/GalleryHeader";
import Gallery from "@/components/sections/Gallery";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Life on the farm: feed production, fattening pens, herds and facilities at FRAOL Smart Integrated Agribusiness PLC.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHeader />
      <Gallery showHeading={false} />
      <CTABand />
    </>
  );
}
