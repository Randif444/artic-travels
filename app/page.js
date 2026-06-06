import Hero from "@/components/layout/Hero";
import OptionsGrid from "@/components/ui/OptionsGrid";
import Destinations from "@/components/ui/Destinations";
import CTABanner from "@/components/ui/CTABanner";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <OptionsGrid />
      <Destinations />
      <CTABanner />
      <ContactForm />
    </>
  );
}
