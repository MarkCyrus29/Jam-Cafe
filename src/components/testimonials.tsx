import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Bugsy Lising",
      role: "Regular Customer",
      text: "I love the food and ambiance. I travel to lipa just to eat here. Would 100% recommend",
      rating: 5,
    },
    {
      name: "Mike Vardeleon",
      role: "Coffee Enthusiast",
      text: "Had a great time at Jam Cafe. The place is cozy, clean, and has a really nice feel. It's a perfect spot to relax. The service was excellent. The staff was friendly and fast. The food and coffee were both delicious. Overall, Jam Cafe is a 10/10. Great food, great service, and a nice atmosphere. I highly recommend it.",
      rating: 5,
    },
    {
      name: "Sandoy Manalastas",
      role: "Local Foodie",
      text: "Excellent coffee and a must visit whenever you're in Lipa 👌👌👌",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">
              What Our Guests Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
