import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";
import { siteUrl } from "@/components/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Fraol Smart Integrated Agribusiness PLC Ethiopia",
    template: "%s | Fraol Smart Integrated Agribusiness PLC",
  },
  description:
    "Integrated cattle fattening, feed and fodder systems and sustainable agribusiness development from Sendafa, Oromia.",
  icons: { icon: "/logo/fraol-icon.png" },
  openGraph: {
    title: "Fraol Smart Integrated Agribusiness PLC",
    description:
      "Fraol Smart Integrated Agribusiness PLC is building an integrated livestock value chain in Sendafa, Oromia, combining cattle fattening, feed and fodder systems, responsible animal management and stronger market linkages.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
