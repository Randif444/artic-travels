import Link from "next/link";
import { OPTION } from "../../lib/constants";
import { Map, Building2, Mountain, Ticket, ArrowRight } from "lucide-react";

export default function OptionsGrid() {
  const ICONS = {
    Map: (
      <Map
        size={50}
        className="bg-light-blue text-accent-blue rounded-xl shrink-0 m-3 p-2"
      />
    ),
    Building2: (
      <Building2
        size={50}
        className="bg-light-blue text-accent-blue rounded-xl shrink-0 m-3 p-2"
      />
    ),
    Mountain: (
      <Mountain
        size={50}
        className="bg-light-blue text-accent-blue rounded-xl shrink-0 m-3 p-2"
      />
    ),
    Ticket: (
      <Ticket
        size={50}
        className="bg-light-blue text-accent-blue rounded-xl shrink-0 m-3 p-2"
      />
    ),
  };

  return (
    <section className="bg-white px-8 py-10">
      <div className="mb-6 pl-2">
        <h2 className="font-bold mb-3 md:mb-0 text-2xl md:text-3xl">
          Explore your options
        </h2>
        <p className="md:text-xl">
          Choose how you want to plan your perfect winter trip
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {OPTION.map((option) => (
          <div
            key={option.id}
            className="flex flex-col rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full p-5 bg-white"
          >
            <div className="mb-4 text-accent-blue">{ICONS[option.icon]}</div>
            <h2 className="text-lg font-semibold mb-2">{option.label}</h2>
            <p className="text-sm text-gray-600 mb-6 flex-grow">
              {option.description}
            </p>
            <Link
              href={option.href}
              className="flex items-center text-sm gap-2 text-accent-blue font-medium mt-auto"
            >
              Book here <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
