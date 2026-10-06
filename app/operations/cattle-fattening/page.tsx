import type { Metadata } from "next";
import CattleFatteningPage from "@/components/pages/CattleFattening";

export const metadata: Metadata = {
  title: "Cattle Fattening",
  description: "Fraol manages structured cattle fattening cycles supported by feed, health care and performance monitoring in Sendafa, Ethiopia.",
};

export default function Page() {
  return <CattleFatteningPage />;
}
