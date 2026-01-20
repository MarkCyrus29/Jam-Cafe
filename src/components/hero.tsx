import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/place.jpg"
          alt="JAM Cafe Interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <h1 className="mb-4 font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
          Handcrafted Comfort,
          <span className="block ">Everyday</span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/90">
          Experience specialty coffee, handmade jams, and pastries crafted with
          passion at JAM Cafe. Your neighborhood café in Lipa City.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-center font-medium text-primary-foreground transition-colors duration-200 hover:bg-accent"
          >
            View Menu
          </Link>

          <Link
            href="/contact"
            className="inline-block rounded-lg border border-white/70 px-8 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-white/10"
          >
            Visit Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-bounce text-white/70">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
