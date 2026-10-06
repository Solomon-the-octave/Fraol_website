import Hero from "@/components/sections/Hero";
import PillarBand from "@/components/sections/PillarBand";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Sustainability from "@/components/sections/Sustainability";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import { HomeFacts, HomePartnerBand } from "@/components/pages/HomeExtras";

/* Section order follows the approved content guide:
   hero, verified facts, introduction, core operations, reasons to work with
   Fraol, sustainability and community, partnership, gallery, enquiry form. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeFacts />
      <PillarBand />
      <About />
      <Services />
      <WhyUs />
      <Sustainability />
      <HomePartnerBand />
      {/* A strip on the home page; the full set lives on /gallery */}
      <Gallery limit={6} />
      <Contact />
    </>
  );
}
