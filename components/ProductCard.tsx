'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Eye } from 'lucide-react'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { addToCart } = useCartStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div 
          className="relative overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 space-y-2">
            {product.new && (
              <span className="luxe-badge">New</span>
            )}
            {product.featured && (
              <span className="luxe-badge bg-luxe-charcoal text-white">Featured</span>
            )}
          </div>

          {/* Product Image */}
          <div className="relative aspect-[3/4] bg-luxe-gray-100">
            {!imageError ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-luxe-gray-300">
                <ShoppingBag className="w-12 h-12" />
              </div>
            )}
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4"
            >
              <button
                onClick={handleAddToCart}
                className="p-3 bg-white text-luxe-charcoal hover:bg-luxe-gold hover:text-white transition-colors shadow-lg"
                aria-label="Add to cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
              <Link
                href={`/products/${product.id}`}
                className="p-3 bg-white text-luxe-charcoal hover:bg-luxe-gold hover:text-white transition-colors shadow-lg"
                aria-label="View details"
              >
                <Eye className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <h3 className="text-sm font-light tracking-wider uppercase mb-2 text-luxe-charcoal">
              {product.name}
            </h3>
            <p className="text-xs text-luxe-slate mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-light text-luxe-gold">
                {formatPrice(product.price)}
              </span>
              {!product.inStock && (
                <span className="text-xs text-luxe-gray-400 uppercase">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}