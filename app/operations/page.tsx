import type { Metadata } from "next";
import OperationsPage from "@/components/pages/Operations";

export const metadata: Metadata = {
  title: "Operations",
  description: "Explore Fraol's cattle sourcing, quarantine, feeding, animal health, monitoring and market process.",
};

export default function Page() {
  return <OperationsPage />;
}
