"use client";
import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Map,
  Building2,
  Mountain,
  Ticket,
} from "lucide-react";
import { OPTION } from "../../lib/constants";
import Button from "../ui/Button";

const ICONS = {
  Map: <Map size={18} className="text-gray-400 shrink-0" />,
  Building2: <Building2 size={18} className="text-gray-400 shrink-0" />,
  Mountain: <Mountain size={18} className="text-gray-400 shrink-0" />,
  Ticket: <Ticket size={18} className="text-gray-400 shrink-0" />,
};
const FORMS = {
  regions: (
    <div className="flex flex-col md:flex-row items-center gap-3 p-4 md:m-4">
      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <MapPin size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Region</span>
          <input
            type="text"
            placeholder="e.g. Japanese Alps"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Calendar size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Dates</span>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Users size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Travellers</span>
          <input
            type="number"
            min="1"
            placeholder="2 guests"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <Button
        onClick={() => alert("Search functionality coming soon!")}
        type="submit"
        className="w-full md:w-auto bg-primary-blue hover:bg-accent-blue text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
      >
        <Search size={16} />
        Book here
      </Button>
    </div>
  ),
  lodging: (
    <div className="flex flex-wrap md:flex-row items-center gap-3 p-4 md:m-4">
      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <MapPin size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Destination</span>
          <input
            type="text"
            placeholder="Where to stay?"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Calendar size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Check-in</span>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Calendar size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Check-out</span>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Users size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Guest</span>
          <input
            type="number"
            min="1"
            placeholder="2 guests"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <Button
        onClick={() => alert("Search functionality coming soon!")}
        type="submit"
        className="w-full md:w-auto bg-primary-blue hover:bg-accent-blue text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
      >
        <Search size={16} />
        Book here
      </Button>
    </div>
  ),
  resorts: (
    <div className="flex flex-col md:flex-row items-center gap-3 p-4 md:m-4">
      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <MapPin size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Resorts</span>
          <input
            type="text"
            placeholder="e.g. Niseko, Zermatt"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Calendar size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Dates</span>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Users size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Travellers</span>
          <input
            type="number"
            min="1"
            placeholder="2 guests"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <Button
        onClick={() => alert("Search functionality coming soon!")}
        type="submit"
        className="w-full md:w-auto bg-primary-blue hover:bg-accent-blue text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
      >
        <Search size={16} />
        Book here
      </Button>
    </div>
  ),
  passes: (
    <div className="flex flex-col md:flex-row items-center gap-3 p-4 md:m-4">
      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <MapPin size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Resorts</span>
          <input
            type="text"
            placeholder="Select Resorts"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Calendar size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Pass duration</span>
          <select className="text-sm text-gray-700 outline-none bg-transparent">
            <option>1 day</option>
            <option>3 days</option>
            <option>1 week</option>
            <option>Season</option>
          </select>
        </div>
      </div>

      <div className="flex-1 flex items-center border border-gray-500 rounded-xl gap-3 px-4 py-2 w-full">
        <Users size={18} className="text-gray-400 shrink-0" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Travellers</span>
          <input
            type="number"
            min="1"
            placeholder="2 guests"
            className="text-sm text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <Button
        onClick={() => alert("Search functionality coming soon!")}
        type="submit"
        className="w-full md:w-auto bg-primary-blue hover:bg-accent-blue text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-colors"
      >
        <Search size={16} />
        Book here
      </Button>
    </div>
  ),
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("regions");
  return (
    <section className="relative md:h-[680px] h-[730px]  md:pt-0 pt-5 flex items-center">
      <Image
        src="/images/background.jpg"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-deep-navy/50" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center text-white md:pt-0 pt-0 mb-6">
          <div className="border rounded-full px-4 py-1 bg-deep-navy/40 mb-3 text-light-blue text-xs tracking-widest inline-block border-accent-blue">
            Luxury ski & snowboard holidays
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Plan the perfect winter trip
          </h1>
          <p className="text-light-blue text-lg">
            Easily plan your ideal ski trip from home with the help of
            professionals
          </p>
        </div>

        {/* Search card */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Tab bar — DULU sebelum form */}
          <div className="flex border-b border-gray-200">
            {OPTION.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-4 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === option.id
                    ? "border-primary-blue text-primary-blue"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-xl">{ICONS[option.icon]}</span>
                {option.label}
              </button>
            ))}
          </div>
          <div key={activeTab}>{FORMS[activeTab]}</div>
        </div>
      </div>
    </section>
  );
}
