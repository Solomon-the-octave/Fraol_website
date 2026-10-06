import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/Projects";

export const metadata: Metadata = {
  title: "Projects and Expansion",
  description: "Fraol's phased development of feedlot infrastructure, feed storage, veterinary systems, digital farm management and market access.",
};

export default function Page() {
  return <ProjectsPage />;
}
