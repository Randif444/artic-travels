import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="relative md:h-[400px] h-[400px]  md:pt-20 pt-8 flex items-center">
        <Image
          src="/images/bg-about.jpg"
          alt="About Image"
          fill
          priority
          className="object-cover bg-center"
        />

        <div className="absolute inset-0 bg-deep-navy/40" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
          <div className="text-center text-white md:pt-0 pt-0 mb-6">
            <div className="border rounded-full px-4 py-1 bg-deep-navy/40 text-light-blue text-xs tracking-widest inline-block mb-3 border-accent-blue">
              Our Story
            </div>
            <br className="md:inline hidden" />
            <h1 className="md:text-4xl hidden md:inline md:font-bold md:mb-2">
              Passion for the Peaks
            </h1>
            <h1 className="text-4xl font-bold md:hidden mb-2">
              Passion for the
              <br /> Peaks
            </h1>
            <p className="text-light-blue text-lg px-9 ">
              We believe the best memories are made in the snow. Artic Travel
              was born from a desire to share the ultimate winter experiences
              with the world.
            </p>
          </div>
        </div>
      </section>
      <section className="items-center py-12 md:py-20">
        <div className=" h-auto grid gap-10 grid-cols-1 md:grid-cols-2 md:items-start px-6 md:px-14 bg-white max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8 justify-center md:pb-0 pt-8 md:pt-10">
            <h2 className="md:text-3xl text-2xl font-semibold text-slate-900 leading-tight">
              Crafting Unforgettable Winter Escapes
            </h2>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              Founded in 2015 by a group of avid skiers and snowboarders, Artic
              Travel is more than just a booking platform. We are your personal
              guides to the world's most spectacular snowy destinations.
            </p>
            <p className="text-slate-600 leading-relaxed md:text-lg">
              Our mission is simple: to remove the stress of planning so you can
              focus on the thrill of the descent. We personally vet every
              resort, chalet, and guide to ensure your holiday meets our
              rigorous standards of luxury, adventure, and comfort.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 w-full pb-10 md:pb-10 pt-4 md:pt-10">
            <Image
              src="/images/snowboard.jpg"
              alt="snowboarder"
              width={600}
              height={800}
              className="object-cover w-[85%] md:w-full h-[200px] md:h-[300px] self-start md:self-auto rounded-2xl shadow-lg border-2 border-white"
            />
            <Image
              src="/images/salju.avif"
              alt="salju close-up"
              width={600}
              height={800}
              className="object-cover w-[85%] md:w-full h-[200px] md:h-[300px] self-end md:self-auto mt-4 md:mt-12 rounded-2xl shadow-lg border-2 border-white"
            />
          </div>
        </div>
      </section>
    </>
  );
}
