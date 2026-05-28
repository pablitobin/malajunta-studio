import NavbarModern from "@/components/NavbarModern";
import HeroVideo from "@/components/HeroVideo";
import TickerSection from "@/components/TickerSection";
import WorkGridSection from "@/components/WorkGridSection";
import ManifiestoSection from "@/components/ManifiestoSection";
import AboutSection from "@/components/AboutSection";
import ContactoModern from "@/components/ContactoModern";

export default function Home() {
  return (
    <>
      <NavbarModern />
      <HeroVideo />
      <TickerSection />
      <WorkGridSection />
      <ManifiestoSection />
      <AboutSection />
      <ContactoModern />
    </>
  );
}
