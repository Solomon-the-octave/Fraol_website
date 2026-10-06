import type { Metadata } from "next";
import DocumentsPage from "@/components/pages/Documents";

export const metadata: Metadata = {
  title: "Corporate Documents",
  description: "Fraol's corporate document categories and how qualified partners request verified information for due diligence.",
};

export default function Page() {
  return <DocumentsPage />;
}
