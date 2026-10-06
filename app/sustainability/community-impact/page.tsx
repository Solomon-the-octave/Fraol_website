import type { Metadata } from "next";
import CommunityImpactPage from "@/components/pages/CommunityImpact";

export const metadata: Metadata = {
  title: "Community Impact",
  description: "How Fraol's livestock and feed operations create demand, employment and market access across the surrounding agricultural economy.",
};

export default function Page() {
  return <CommunityImpactPage />;
}
