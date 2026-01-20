import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Serving <span className="text-primary">Warmth & Flavor</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              JAM Cafe is your cozy neighborhood café in Lipa City. Every day,
              we wake up excited to serve perfectly brewed coffee, freshly baked
              pastries, hearty breakfasts, and comforting pastas crafted with
              care.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in quality, community, and the joy of sharing a meal
              with friends and family. JAM Cafe is more than a café—it’s a
              welcoming corner where everyone feels at home.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">
                    Freshly Prepared
                  </h3>
                  <p className="text-muted-foreground">
                    From breakfast to baked goods, everything is made fresh
                    daily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">
                    Quality Ingredients
                  </h3>
                  <p className="text-muted-foreground">
                    We source the finest local and premium ingredients for every
                    dish.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">
                    Community First
                  </h3>
                  <p className="text-muted-foreground">
                    A warm, inviting space where friends, families, and
                    neighbors can gather.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-full rounded-lg overflow-hidden bg-linear-to-br from-secondary/30 to-accent/20 flex items-center justify-center border border-border/40">
            <Image
              src="/highlight.jpg"
              alt="JAM Cafe Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
