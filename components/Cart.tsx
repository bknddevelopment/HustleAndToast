'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

export function Cart() {
  const {
    items,
    isOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white border-l border-luxe-border shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-luxe-border">
              <h2 className="text-xl font-light tracking-wider uppercase">Shopping Cart</h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:text-luxe-gold transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-luxe-gray-300 mb-4" />
                  <p className="text-luxe-slate mb-6">Your cart is empty</p>
                  <Link
                    href="/products"
                    onClick={toggleCart}
                    className="luxe-button"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 pb-6 border-b border-luxe-border last:border-0"
                    >
                      {/* Product Image */}
                      <div className="relative w-24 h-24 bg-luxe-gray-100 overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{item.product.name}</h3>
                        <p className="text-sm text-luxe-slate mb-3">
                          {formatPrice(item.product.price)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="p-1 border border-luxe-border hover:border-luxe-gold transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="p-1 border border-luxe-border hover:border-luxe-gold transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-sm text-luxe-slate hover:text-luxe-gold transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-luxe-border">
                <div className="flex justify-between mb-6">
                  <span className="text-lg">Total</span>
                  <span className="text-lg font-medium">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="luxe-button-gold w-full text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/products"
                  onClick={toggleCart}
                  className="luxe-button w-full text-center block mt-3"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}