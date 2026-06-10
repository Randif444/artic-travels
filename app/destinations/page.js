import DestinationsHero from "@/components/layout/DestinationsHero";
import DestinationMain from "@/components/layout/DestinationsMain";

export const metadata = {
  title: "Destinations — Arctic Travels",
  description: "Browse 20+ world-class ski resorts worldwide.",
};

export default function DestinationsPage() {
  return (
    <>
      <DestinationsHero />
      <DestinationMain />
    </>
  );
}
