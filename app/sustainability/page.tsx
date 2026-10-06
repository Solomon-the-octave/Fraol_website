import type { Metadata } from "next";
import SustainabilityPage from "@/components/pages/SustainabilityPage";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Fraol's approach to feed efficiency, water, manure, sanitation and responsible livestock management.",
};

export default function Page() {
  return <SustainabilityPage />;
}
