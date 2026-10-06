import type { Metadata } from "next";
import PartnersPage from "@/components/pages/Partners";

export const metadata: Metadata = {
  title: "Partners and Investors",
  description: "Explore investment, finance, technology, market and development partnership opportunities with Fraol Smart Integrated Agribusiness PLC.",
};

export default function Page() {
  return <PartnersPage />;
}
