import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import FeaturedItems from '@/components/featured-items'
import BrandStory from '@/components/brand-story'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export const metadata = {
  title: 'JAM Cafe | Handcrafted Coffee & Pastries in Lipa City',
  description: 'Experience specialty coffee, handmade jams, and artisan pastries at JAM Cafe in Lipa City. Handcrafted comfort, everyday.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeaturedItems />
        <BrandStory />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
