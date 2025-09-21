'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { getFeaturedProducts, getNewArrivals } from '@/lib/products'

const features = [
  {
    icon: Truck,
    title: 'Free Worldwide Shipping',
    description: 'On all orders over $500',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Guaranteed quality and craftsmanship',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Easy returns and exchanges',
  },
  {
    icon: Star,
    title: 'Exclusive Designs',
    description: 'Limited edition luxury pieces',
  },
]

const categories = [
  {
    name: 'Watches',
    href: '/products?category=watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
  },
  {
    name: 'Bags',
    href: '/products?category=bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
  },
  {
    name: 'Jewelry',
    href: '/products?category=jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const newArrivals = getNewArrivals()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1920&q=80"
            alt="Luxury lifestyle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="luxe-heading-1 text-luxe-charcoal mb-6 drop-shadow-lg"
          >
            Celebrate Your Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-luxe-charcoal/90 mb-4 max-w-2xl mx-auto drop-shadow-md"
          >
            Where ambition meets achievement. Discover our curated collection of premium lifestyle products for those who hustle hard and toast to success
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-luxe-charcoal/80 mb-8 max-w-3xl mx-auto drop-shadow-md font-light italic"
          >
            "At Hustle and Toast, our mission is to inspire relentless ambition while fostering gratitude.
            We empower individuals to chase their goals, celebrate their milestones, and honor the people
            and moments that make the journey meaningful."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products" className="luxe-button-gold">
              Shop Collection
            </Link>
            <Link href="/about" className="luxe-button">
              Our Story
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-luxe-charcoal rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">Shop by Category</h2>
            <p className="text-lg text-luxe-slate">
              Explore our carefully curated collections
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={category.href} className="group block relative overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-light tracking-wider uppercase text-luxe-charcoal mb-2 drop-shadow-md">
                        {category.name}
                      </h3>
                      <span className="inline-flex items-center text-sm text-luxe-gold group-hover:gap-2 transition-all">
                        Explore Collection
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-luxe-cream">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">Featured Collection</h2>
            <p className="text-lg text-luxe-slate">
              Handpicked pieces that define excellence
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products?filter=featured" className="luxe-button">
              View All Featured
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">New Arrivals</h2>
            <p className="text-lg text-luxe-slate">
              Fresh additions to our luxury collection
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products?filter=new" className="luxe-button">
              Shop New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border border-luxe-gold text-luxe-gold">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-luxe-slate">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="luxe-container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="luxe-heading-2 mb-6">Experience True Luxury</h2>
            <p className="text-lg text-luxe-gray-400 mb-8">
              Join our exclusive community and be the first to discover new collections,
              special events, and member-only privileges.
            </p>
            <Link href="/products" className="luxe-button-gold">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}