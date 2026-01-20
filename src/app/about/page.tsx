import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Heart, Users, Leaf } from 'lucide-react'

export const metadata = {
  title: 'About JAM Cafe | Our Story & Values',
  description: 'Learn about JAM Cafe\'s journey, commitment to handmade quality, and dedication to our community in Lipa City.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Handcrafted Quality',
      description:
        'Every item we serve is made with care and passion. From our morning coffee to our evening pastries, quality is never compromised.',
    },
    {
      icon: Users,
      title: 'Community First',
      description:
        'JAM Cafe is a gathering place for neighbors. We believe in fostering connections and creating a welcoming space for everyone.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description:
        'We source locally when possible, minimize waste, and support sustainable practices. We care for our community and our planet.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/10 to-background border-b border-border/40 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              About JAM Cafe
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A cozy neighborhood café where handcrafted comfort meets community spirit. We're dedicated to creating moments of joy through exceptional coffee, artisan pastries, and handmade jams.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  JAM Cafe was founded with a simple mission: to create a space where quality, passion, and community come together. We started with a dream of sharing handmade jams and specialty coffee with our neighbors in Lipa City.
                </p>
                <p>
                  What began as a small kitchen experiment has grown into a beloved neighborhood gathering spot. Every morning, our team wakes up excited to craft the perfect espresso, bake fresh pastries from scratch, and prepare our signature jams using the finest ingredients we can source.
                </p>
                <p>
                  We believe that slowing down is a luxury. In a world of convenience, we choose to invest time in the craft of roasting, the art of fermentation, and the joy of baking. Every cup of coffee, every pastry, and every jar of jam tells a story of dedication and love.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8 my-20">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-lg bg-secondary/10 border border-border/40 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Team Section */}
            <div className="mt-20 p-12 rounded-lg bg-accent/5 border border-border/40">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a passionate group of coffee lovers, pastry enthusiasts, and jam makers dedicated to bringing you the best café experience. Each team member brings their own skills and heart to JAM Cafe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our expert baristas who master the art of espresso, to our bakers who wake up before dawn to prepare fresh pastries, to our jam makers who perfect recipes, every person here contributes to making JAM Cafe special.
              </p>
            </div>

            {/* Process Section */}
            <div className="mt-20">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-12">
                Our Process
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-serif font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      Source with Care
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We partner with local suppliers and ethical sources to get the best coffee beans, fresh fruits, and premium ingredients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-serif font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      Craft with Skill
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our team of skilled baristas and bakers apply years of experience to craft each item with precision and passion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-serif font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      Share with Love
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We serve each customer with genuine care, creating moments of connection and comfort in our cozy café.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
