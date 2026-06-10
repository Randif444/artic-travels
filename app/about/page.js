import About from "@/components/layout/About";
import TheArtic from "@/components/ui/TheArtic";
import Meet from "@/components/ui/Meet";

export const metadata = {
  title: "About — Arctic Travels",
  description: "Learn about Arctic Travels and our team of ski experts.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <TheArtic />
      <Meet />
    </>
  );
}
