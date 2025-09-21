'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Package,
  Shield,
  RefreshCw,
  Truck
} from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { useCartStore } from '@/store/cart'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { toast } from '@/components/Toaster'

interface ProductClientProps {
  product: Product
  relatedProducts: Product[]
}

export default function ProductClient({ product, relatedProducts }: ProductClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'details' | 'materials' | 'care'>('details')
  const { addToCart } = useCartStore()

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast(`Added ${quantity} ${product.name} to cart`, 'success')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast('Link copied to clipboard', 'info')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="luxe-container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-luxe-slate">
            <li>
              <Link href="/" className="hover:text-luxe-gold transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-luxe-gold transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/products?category=${product.category}`}
                className="hover:text-luxe-gold transition-colors capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li>/</li>
            <li className="text-luxe-charcoal font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square bg-luxe-gray-100 overflow-hidden shadow-md"
            >
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex(prev =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-luxe-charcoal backdrop-blur-sm hover:bg-white/90 transition-colors shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex(prev =>
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 text-luxe-charcoal backdrop-blur-sm hover:bg-white/90 transition-colors shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.new && (
                  <span className="luxe-badge">New</span>
                )}
                {product.featured && (
                  <span className="luxe-badge bg-luxe-charcoal text-white">Featured</span>
                )}
              </div>
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square bg-luxe-gray-100 overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index
                        ? 'border-luxe-gold'
                        : 'border-transparent hover:border-luxe-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="luxe-heading-3 mb-2">{product.name}</h1>
              <p className="text-luxe-slate mb-4">{product.description}</p>
              <div className="text-3xl font-light text-luxe-gold">
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-luxe-slate" />
              <span className={product.inStock ? 'text-green-500' : 'text-red-500'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm tracking-wider uppercase mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-luxe-border hover:border-luxe-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-luxe-border hover:border-luxe-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full luxe-button-gold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="luxe-button flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Save
                </button>
                <button
                  onClick={handleShare}
                  className="luxe-button flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-luxe-border">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-luxe-gold" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-luxe-slate">Orders over $500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-luxe-gold" />
                <div>
                  <p className="text-sm font-medium">Warranty</p>
                  <p className="text-xs text-luxe-slate">Lifetime guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-luxe-gold" />
                <div>
                  <p className="text-sm font-medium">Returns</p>
                  <p className="text-xs text-luxe-slate">30-day policy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-luxe-gold" />
                <div>
                  <p className="text-sm font-medium">Authentic</p>
                  <p className="text-xs text-luxe-slate">100% genuine</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-luxe-border">
                {(['details', 'materials', 'care'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm tracking-wider uppercase transition-colors ${
                      activeTab === tab
                        ? 'border-b-2 border-luxe-gold text-luxe-gold'
                        : 'text-luxe-slate hover:text-luxe-charcoal'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="py-6"
                >
                  {activeTab === 'details' && product.details && (
                    <ul className="space-y-2">
                      {product.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-luxe-gold mt-1">•</span>
                          <span className="text-sm text-luxe-slate">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'materials' && product.materials && (
                    <ul className="space-y-2">
                      {product.materials.map((material, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-luxe-gold mt-1">•</span>
                          <span className="text-sm text-luxe-slate">{material}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'care' && product.care && (
                    <ul className="space-y-2">
                      {product.care.map((instruction, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-luxe-gold mt-1">•</span>
                          <span className="text-sm text-luxe-slate">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {((activeTab === 'details' && !product.details) ||
                    (activeTab === 'materials' && !product.materials) ||
                    (activeTab === 'care' && !product.care)) && (
                    <p className="text-sm text-luxe-slate">
                      Information not available
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="luxe-heading-3 mb-8">You May Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}