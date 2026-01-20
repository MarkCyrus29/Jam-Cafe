import React from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Coffee, Croissant, Wine, Cake } from 'lucide-react'

export const metadata = {
  title: 'Menu | JAM Cafe',
  description: 'Explore our full menu of specialty coffee, breakfast dishes, café plates, and delicious pastries.',
}

const menuItems = {
  coffee: [
    {
      name: 'Single Shot Espresso',
      price: '₱85',
      description: 'Rich and bold espresso shot',
    },
    {
      name: 'Double Shot Espresso',
      price: '₱110',
      description: 'Two shots of our signature espresso',
    },
    {
      name: 'Cappuccino',
      price: '₱145',
      description: 'Espresso with steamed milk and microfoam',
    },
    {
      name: 'Latte',
      price: '₱150',
      description: 'Smooth espresso and velvety steamed milk',
    },
    {
      name: 'Americano',
      price: '₱120',
      description: 'Espresso shots with hot water',
    },
    {
      name: 'Flat White',
      price: '₱155',
      description: 'Espresso with creamy steamed milk',
    },
  ],
  breakfast: [
    {
      name: 'Scrambled Eggs Toast',
      price: '₱185',
      description: 'Fresh eggs on toasted sourdough with herbs',
    },
    {
      name: 'Avocado & Poached Egg',
      price: '₱210',
      description: 'Creamy avocado with perfectly poached eggs',
    },
    {
      name: 'French Toast',
      price: '₱195',
      description: 'Golden brioche with maple syrup and berries',
    },
    {
      name: 'Granola Bowl',
      price: '₱180',
      description: 'House-made granola with yogurt and fresh fruit',
    },
    {
      name: 'Breakfast Burrito',
      price: '₱220',
      description: 'Eggs, bacon, cheese, and fresh vegetables',
    },
  ],
  plates: [
    {
      name: 'Caprese Salad',
      price: '₱250',
      description: 'Fresh mozzarella, tomatoes, basil, and olive oil',
    },
    {
      name: 'Grilled Cheese & Tomato Soup',
      price: '₱240',
      description: 'Classic comfort food pairing',
    },
    {
      name: 'Quinoa Power Bowl',
      price: '₱280',
      description: 'Quinoa, roasted vegetables, and tahini dressing',
    },
    {
      name: 'Spiced Chicken Plate',
      price: '₱320',
      description: 'Herb-marinated grilled chicken with sides',
    },
    {
      name: 'Mushroom Pasta',
      price: '₱290',
      description: 'Fresh pasta with creamy mushroom sauce',
    },
  ],
  desserts: [
    {
      name: 'Croissant',
      price: '₱95',
      description: 'Buttery and flaky, baked fresh daily',
    },
    {
      name: 'Chocolate Croissant',
      price: '₱110',
      description: 'Croissant filled with rich chocolate',
    },
    {
      name: 'Blueberry Muffin',
      price: '₱105',
      description: 'Moist muffin loaded with fresh blueberries',
    },
    {
      name: 'Carrot Cake Slice',
      price: '₱165',
      description: 'Spiced cake with cream cheese frosting',
    },
    {
      name: 'Chocolate Brownies',
      price: '₱95',
      description: 'Fudgy brownies made from scratch',
    },
    {
      name: 'Jam Tart',
      price: '₱75',
      description: 'Our signature handmade jam in a pastry shell',
    },
  ],
}

function MenuCategory({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: Array<{ name: string; price: string; description: string }>
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-serif font-bold text-foreground">{title}</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-border/40 pb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-serif font-bold text-foreground">
                {item.name}
              </h3>
              <span className="text-primary font-semibold ml-4 flex-shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-secondary/10 border-b border-border/40 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything is crafted with care and the finest ingredients. We offer specialty coffee, artisan pastries, wholesome breakfast, and satisfying café plates.
            </p>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <MenuCategory
              title="Coffee & Drinks"
              icon={Coffee}
              items={menuItems.coffee}
            />
            <MenuCategory
              title="Breakfast"
              icon={Croissant}
              items={menuItems.breakfast}
            />
            <MenuCategory
              title="Café Plates"
              icon={Wine}
              items={menuItems.plates}
            />
            <MenuCategory
              title="Pastries & Desserts"
              icon={Cake}
              items={menuItems.desserts}
            />

            {/* Note */}
            <div className="mt-16 p-6 bg-secondary/10 rounded-lg border border-border/40">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-foreground">Prices subject to change.</span> We welcome dietary inquiries - please ask our staff about ingredients and accommodations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
