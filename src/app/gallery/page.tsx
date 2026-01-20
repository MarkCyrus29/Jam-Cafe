"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    alt: "Latte with latte art",
    img: "/highlight.jpg",
    category: "coffee",
    caption: "Creamy latte topped with delicate latte art",
  },
  {
    id: 2,
    alt: "Carbonara",
    img: "/images/carbonara.jpg",
    category: "food",
    caption: "Rich and creamy carbonara pasta made fresh to order",
  },
  {
    id: 3,
    alt: "Breakfast plate with eggs",
    img: "/images/breakfast.jpg",
    category: "food",
    caption: "Hearty breakfast plate with eggs, and bacon.",
  },
  {
    id: 4,
    alt: "Coffee",
    img: "/images/coffee-1.png",
    category: "coffee",
    caption: "Latte art on a freshly brewed cup of coffee",
  },
  {
    id: 5,
    alt: "Hearty pasta dish",
    img: "/images/pasta.jpg",
    category: "food",
    caption: "Delicious pasta dishes with fresh ingredients",
  },
  {
    id: 6,
    alt: "French fries",
    img: "/images/fries.jpg",
    category: "pastries",
    caption: "Crispy golden fries, perfect as a snack or side",
  },
  {
    id: 7,
    alt: "Coffee being brewed",
    img: "/images/coffee-2.jpg",
    category: "coffee",
    caption: "Expert baristas crafting every cup with care",
  },
  {
    id: 8,
    alt: "Nachos",
    img: "/images/nachos.jpg",
    category: "food",
    caption: "Loaded nachos with fresh toppings, perfect for sharing",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "pastries", label: "Pastries" },
  { id: "food", label: "Food" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-secondary/10 border-b border-border/40 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A visual journey through JAM Cafe — our coffee, pastries,
              breakfast, pastas, and the warm atmosphere we've created for our
              community.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg bg-secondary/10 border border-border/40 aspect-square cursor-pointer"
                >
                  {/* Image */}
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.img || "/images/placeholder.jpg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Overlay Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white text-sm font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No images in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary/10 border-t border-border/40 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Want to See More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media for daily updates on new pastries,
              seasonal specials, and café moments.
            </p>
            <div className="space-x-3 ">
              <a
                href="https://www.facebook.com/ilovejamskitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/jamcafeph"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
