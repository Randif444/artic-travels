"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Button from "./Button";

export default function FilterModal({ isOpen, onClose, onApply }) {
  const [filters, setFilters] = useState({
    difficulty: "All",
    amenity: "All",
    budget: "All",
  });

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(filters);
    onClose();
  };
  const handleReset = () => {
    setFilters({ difficulty: "All", amenity: "All", budget: "All" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-t-3xl md:rounded-3xl p-6 shadow-2xl animate-fade-in-up">
        {/* Header Modal */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">More Filters</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Filter dengan Select */}
        <div className="space-y-5 mb-8">
          {/* 1. Filter Difficulty */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Difficulty
            </label>
            <select
              className="w-full border border-gray-300 p-3 rounded-xl bg-slate-50 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={filters.difficulty}
              onChange={(e) =>
                setFilters({ ...filters, difficulty: e.target.value })
              }
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          {/* 2. Filter Amenities */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Amenities
            </label>
            <select
              className="w-full border border-gray-300 p-3 rounded-xl bg-slate-50 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={filters.amenity}
              onChange={(e) =>
                setFilters({ ...filters, amenity: e.target.value })
              }
            >
              <option value="All">Any Amenities</option>
              <option value="Spa">Spa & Wellness</option>
              <option value="Sauna">Private Sauna</option>
              <option value="Ski-in/Ski-out">Ski-in / Ski-out</option>
            </select>
          </div>

          {/* 3. Filter Budget */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Budget Range
            </label>
            <select
              className="w-full border border-gray-300 p-3 rounded-xl bg-slate-50 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={filters.budget}
              onChange={(e) =>
                setFilters({ ...filters, budget: e.target.value })
              }
            >
              <option value="All">Any Price</option>
              <option value="Budget">Budget ($)</option>
              <option value="Standard">Standard ($$)</option>
              <option value="Luxury">Luxury ($$$)</option>
            </select>
          </div>
        </div>

        {/* Footer Actions (Tombol Aksi) */}
        <div className="flex gap-3">
          <Button
            onClick={handleReset}
            className="flex-1 bg-gray-100 text-slate-700 hover:bg-gray-200 border border-slate-300 font-medium"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1 bg-deep-navy text-white hover:bg-deep-navy/90 font-medium"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
