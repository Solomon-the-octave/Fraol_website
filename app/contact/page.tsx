import type { Metadata } from "next";
import ContactHeader from "@/components/headers/ContactHeader";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquiries from buyers, investors, development partners and smallholder farmers are welcome.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <Contact showHeading={false} />
    </>
  );
}
