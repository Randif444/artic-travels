import { Compass, Gem, Headset } from "lucide-react";
import { THEARTIC } from "@/lib/constants";

export default function TheArtic() {
  const ICONS = {
    Compass: (
      <Compass
        size={45}
        className="text-accent-blue rounded-xl shrink-0 m-2 p-2"
      />
    ),
    Gem: (
      <Gem size={45} className="text-accent-blue rounded-xl shrink-0 m-2 p-2" />
    ),
    Headset: (
      <Headset
        size={45}
        className="text-accent-blue rounded-xl shrink-0 m-2 p-2"
      />
    ),
  };
  return (
    <section className="px-12 bg-blue-50 py-25 mb-10">
      <div className="flex flex-wrap md:flex-col gap-2 mb-10 justify-center text-center">
        <h2 className="md:text-3xl text-2xl font-semibold text-slate-900 leading-tight">
          The Artic Advantage
        </h2>
        <p className="text-slate-600 leading-relaxed md:text-lg">
          Why thousands of winter enthusiasts trust us with their holidays every
          year.
        </p>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:justify-between gap-8">
        {THEARTIC.map((theartic) => (
          <div
            className="bg-white shadow-xs hover:shadow-md transition-shadow rounded-2xl px-10 py-10 gap-4 flex flex-col items-center text-center"
            key={theartic.id}
          >
            <span className="bg-light-blue  rounded-2xl inline-block">
              {ICONS[theartic.icon]}
            </span>
            <h2 className="text-xl font-semibold">{theartic.title}</h2>
            <p className="mb-6 font-light">{theartic.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
