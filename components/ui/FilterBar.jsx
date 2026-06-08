"use client";
import { SlidersHorizontal } from "lucide-react";
import Button from "./Button";

export default function FilterBar({ activeFilter, setActiveFilter }) {
  return (
    <div className="bg-blue-50 px-4 py-5 h-auto w-full">
      <div className="bg-white rounded-3xl w-full p-2">
        <div className="flex justify-between px-2 py-2 md:py-0 md:px-2 m-0 items-center gap-2">
          <div className="block md:hidden flex-1">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full bg-slate-50 border h-8 border-gray-300 rounded-xl p-2.5 text-xs text-slate-900 outline-none font-medium cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Europa">Europa</option>
              <option value="North America">North America</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
          <div className="hidden md:flex h-13 items-center text-slate-900 text-xs gap-2 w-full">
            <Button
              onClick={() => setActiveFilter("All")}
              className={
                activeFilter === "All"
                  ? "bg-light-blue text-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            >
              All
            </Button>
            <Button
              onClick={() => setActiveFilter("Europa")}
              className={
                activeFilter === "Europa"
                  ? "bg-light-blue text-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            >
              Europa
            </Button>
            <Button
              onClick={() => setActiveFilter("North America")}
              className={`w-29 ${
                activeFilter === "North America"
                  ? "bg-light-blue text-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              North America
            </Button>
            <Button
              onClick={() => setActiveFilter("Asia")}
              className={
                activeFilter === "Asia"
                  ? "bg-light-blue text-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            >
              Asia
            </Button>
          </div>
          <div
            // onClick={handleMoreFilterClick}
            className="flex flex-shrink-0 overflow-x-hidden cursor-pointer p-2 m-0 bg-gray-50 rounded-xl border border-gray-300 text-xs gap-2"
          >
            <SlidersHorizontal size={17} /> More Filter
          </div>
        </div>
      </div>
    </div>
  );
}
