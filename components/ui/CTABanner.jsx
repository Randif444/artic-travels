import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="border border-black h-80 bg-deep-navy px-8 py-0 md:py-4"
    >
      <div
        className="absolute right-10 top-1/2-translate-y-1/2 opacity-30 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to left, white 0%, white 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, white 0%, white 40%, transparent 100%)",
        }}
      >
        <Image
          src="/mountain.svg"
          alt="mountain"
          width={300}
          height={300}
          draggable={false}
          className="md:pr-4 md:mr-8"
        />
      </div>
      <div className="p-6 pt-16 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Ready to hit the slopes?
        </h2>
        <p className="text-light-blue md:text-xl">
          Our travel experts will craft the perfect ski holiday for you —<br />
          from resort selection to lodging and lift passes.
        </p>
      </div>
      <div className="flex pl-6 gap-3">
        <Link
          href="#cta"
          className="flex border bg-accent-blue hover:bg-primary-blue text-sm border-gray-800 rounded-xl font-medium p-2 gap-2"
        >
          <Calendar size={18} />
          Book here
        </Link>
        <Link
          href="#cta"
          className="border bg-accent-blue hover:bg-primary-blue text-sm border-gray-800 rounded-xl font-medium p-2"
        >
          Talk to an agent
        </Link>
      </div>
    </section>
  );
}
