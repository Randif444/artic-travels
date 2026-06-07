import { SlidersHorizontal } from "lucide-react";
import Button from "./Button";
export default function FilterBar() {
  return (
    <div className="bg-blue-50 px-4 py-5 h-auto w-full">
      <div className="bg-white rounded-3xl w-full p-2">
        <div className="flex justify-between px-2 m-0 items-center">
          <div className="h-13 items-center  flex text-slate-900 text-xs gap-2">
            <Button>All</Button>
            <Button>Europa</Button>
            <Button className="w-29">North America</Button>
            <Button>Asia</Button>
          </div>
          <div className="flex cursor-pointer p-2 m-0 bg-gray-50 rounded-xl border border-gray-300 text-xs gap-2">
            <SlidersHorizontal size={17} /> More Filter
          </div>
        </div>
      </div>
    </div>
  );
}
