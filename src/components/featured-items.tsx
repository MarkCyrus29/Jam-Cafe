import { Coffee, Croissant, Utensils } from "lucide-react";

export default function FeaturedItems() {
  const items = [
    {
      icon: Coffee,
      title: "Specialty Coffee",
      description:
        "Expertly sourced and roasted beans crafted into perfectly balanced espresso drinks.",
    },
    {
      icon: Croissant,
      title: "Baked Goods",
      description:
        "Freshly baked daily - croissants, muffins, cakes, and seasonal treats made from scratch.",
    },
    {
      icon: Utensils,
      title: "Breakfast & Pastas",
      description:
        "Delicious breakfast dishes and comforting pastas, prepared with high-quality ingredients for your everyday delight.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Specialties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every item is crafted with care and passion, from our morning coffee
            to our comforting meals and baked treats.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-card border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-6 inline-block p-4 bg-secondary/20 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
