'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Package, Mail, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function CheckoutSuccessPage() {
  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFFFFF', '#000000']
    })
  }, [])

  const orderNumber = `LUX-${Date.now().toString().slice(-8)}`

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="luxe-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 bg-luxe-gold rounded-full flex items-center justify-center"
          >
            <Check className="w-12 h-12 text-luxe-black" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="luxe-heading-2 mb-4">Thank You for Your Order!</h1>
            <p className="text-lg text-luxe-gray-400 mb-8">
              Your order has been successfully placed and is being processed.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="luxe-card p-8 mb-8"
          >
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-sm text-luxe-gray-400 mb-2">Order Number</p>
                <p className="font-medium text-luxe-gold">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-luxe-gray-400 mb-2">Estimated Delivery</p>
                <p className="font-medium">3-5 Business Days</p>
              </div>
              <div>
                <p className="text-sm text-luxe-gray-400 mb-2">Status</p>
                <p className="font-medium text-green-500">Confirmed</p>
              </div>
            </div>
          </motion.div>

          {/* What's Next */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-xl font-light tracking-wider">What Happens Next?</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 border border-luxe-gold text-luxe-gold flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-medium mb-2">Confirmation Email</h3>
                <p className="text-xs text-luxe-gray-400">
                  You'll receive an email with your order details shortly
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 border border-luxe-gold text-luxe-gold flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-medium mb-2">Order Processing</h3>
                <p className="text-xs text-luxe-gray-400">
                  We're preparing your order with care and attention
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 border border-luxe-gold text-luxe-gold flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-medium mb-2">Delivery</h3>
                <p className="text-xs text-luxe-gray-400">
                  Track your order and receive it at your doorstep
                </p>
              </div>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products" className="luxe-button-gold">
              Continue Shopping
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
            <Link href="/" className="luxe-button">
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}