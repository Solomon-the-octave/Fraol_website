import type { Metadata } from "next";
import FeedAndFodderPage from "@/components/pages/FeedAndFodder";

export const metadata: Metadata = {
  title: "Feed and Fodder",
  description: "Fraol sources, stores and manages hay, crop residues, concentrates and livestock feed resources in Ethiopia.",
};

export default function Page() {
  return <FeedAndFodderPage />;
}
