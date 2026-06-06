"use client";
import { DESTINATIONS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Trophy, TrendingUp, Gem } from "lucide-react";
import Image from "next/image";

export default function Destinations() {
  const badge = {
    Trophy: <Trophy className="w-3.5 h-3.5" strokeWidth={2.5} />,
    TrendingUp: <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />,
    Gem: <Gem className="w-3.5 h-3.5" strokeWidth={2.5} />,
  };
  return (
    <section id="destinations" className="bg-blue-50 pt-15 pb-15 w-full h-auto">
      {/* header */}
      <div className=" pt-4 w-full mx-auto">
        <div className="flex items-start justify-between mb-6 pr-4">
          <div>
            <h2 className="md:text-3xl text-2xl font-bold mb-3 md:mb-0 ml-8 mt-2">
              Popular Destinations
            </h2>
            <p className="ml-8 md:text-xl">
              Hand-picked resorts for the ultimate ski experience
            </p>
          </div>
          <Link
            className="text-primary-blue border shadow-md hover:bg-light-blue border-primary-blue md:w-30 w-50 text-center rounded-3xl m-3 p-1 text-xs"
            href="#contact"
          >
            See all destinations
          </Link>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-6 mx-7">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="shadow-xs bg-white hover:shadow-md transition-shadow overflow-hidden rounded-2xl"
            >
              <div className="relative h-40">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-accent-blue/70 text-light-blue border w-auto min-w-[6rem] border-accent-blue rounded-2xl m-1 px-2 py-0.5 text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm">
                  {badge[dest.icon]}
                  <span>{dest.badge}</span>
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-xl font-semibold">{dest.name}</h2>
                  <span className="border border-gray-400 p-1 rounded-2xl text-sm w-30 md:w-27 text-center bg-gray-200">
                    {dest.flag} {dest.country}
                  </span>
                </div>
                <p className="text-sm">{dest.region}</p>
                <p className="text-sm italic text-gray-600 mb-6 flex-grow">
                  "{dest.tagline}"
                </p>
                <div className="flex mb-4 gap-2 justify-between">
                  {dest.tags.map((tag) => (
                    <span
                      className="border border-gray-400 p-2 rounded-xl text-sm w-27 text-center bg-gray-200"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    className="flex text-right pl-2 text-sm gap-2 text-accent-blue"
                    href={dest.href}
                  >
                    Book here <ArrowRight className="mt-0.5" size={14} />
                  </Link>
                  <p className="text-sm">
                    From <span className="font-bold">{dest.price}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </section>
  );
}
