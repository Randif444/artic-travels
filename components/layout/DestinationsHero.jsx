import Image from "next/image";

export default function DestinationsHero() {
  return (
    <>
      <section className="relative md:h-[400px] h-[400px]  md:pt-20 pt-8 flex items-center">
        <Image
          src="/images/bg-destinations.jpg"
          alt="About Image"
          fill
          priority
          className="object-cover bg-center"
        />

        <div className="absolute inset-0 bg-deep-navy/40" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
          <div className="text-center text-white md:pt-0 pt-0 mb-6">
            <div className="border rounded-full px-4 py-1 bg-deep-navy/50 text-light-blue text-xs tracking-widest inline-block mb-3 border-accent-blue">
              Our Collection
            </div>
            <br className="md:inline hidden" />
            <h1 className="text-4xl font-bold mb-2">Discover Your Peak</h1>

            <p className="text-light-blue text-lg px-9 ">
              Explore our hand-picked selection of the world's most spectacular
              winter destinations. Find the perfect match for your next
              adventure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
