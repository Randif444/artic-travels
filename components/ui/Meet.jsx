import Image from "next/image";
import { MEET } from "@/lib/constants";

export default function Meet() {
  return (
    <section className="px-6 md:px-24 py-16 mb-5">
      <h2 className="text-2xl md:text-3xl text-center font-semibold text-slate-900 leading-tight mb-12">
        Meet the Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {MEET.map((meet) => (
          <div key={meet.id} className="flex flex-col items-center text-center">
            <div className="relative mb-5">
              <Image
                src={meet.image}
                alt={meet.title}
                height={200}
                width={200}
                className="object-cover rounded-full aspect-square shadow-sm"
              />
            </div>

            <h3 className="text-xl font-semibold">{meet.title}</h3>
            <p className="text-accent-blue text-sm mb-1">{meet.jobs}</p>
            <p className="text-xs text-gray-500">{meet.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
