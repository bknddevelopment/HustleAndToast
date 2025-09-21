'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Lock, 
  CreditCard, 
  Check,
  ChevronRight
} from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { toast } from '@/components/Toaster'
import { CheckoutFormData } from '@/types'

const steps = ['Information', 'Shipping', 'Payment']

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  })

  const subtotal = getTotalPrice()
  const shipping = subtotal > 500 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      clearCart()
      toast('Order placed successfully!', 'success')
      router.push('/checkout/success')
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="luxe-heading-3 mb-4">Your cart is empty</h1>
          <p className="text-luxe-slate mb-8">
            Add some products to your cart to continue
          </p>
          <Link href="/products" className="luxe-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="luxe-container py-12">
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-luxe-slate hover:text-luxe-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <h1 className="luxe-heading-3 mb-8">Checkout</h1>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <div key={step} className="flex-1 flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        index <= currentStep
                          ? 'bg-luxe-gold text-white border-luxe-gold'
                          : 'border-luxe-border text-luxe-slate'
                      }`}
                    >
                      {index < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span
                      className={`ml-3 text-sm font-medium ${
                        index <= currentStep ? 'text-luxe-charcoal' : 'text-luxe-slate'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        index < currentStep ? 'bg-luxe-gold' : 'bg-luxe-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Information */}
              {currentStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-light tracking-wider">Contact Information</h2>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="luxe-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="luxe-input"
                      required
                    />
                  </div>
                  
                  <h2 className="text-xl font-light tracking-wider pt-4">Personal Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-light tracking-wider">Shipping Address</h2>
                  <div>
                    <label className="block text-sm mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="luxe-input"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="luxe-input"
                        required
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-light tracking-wider">Payment Information</h2>
                  <div className="p-4 bg-luxe-cream border border-luxe-border flex items-center gap-3">
                    <Lock className="w-4 h-4 text-luxe-gold" />
                    <span className="text-sm text-luxe-slate">
                      Your payment information is encrypted and secure
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="luxe-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="luxe-input"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="luxe-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input
                        type="text"
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="luxe-input"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="luxe-button"
                  >
                    Previous
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="luxe-button-gold ml-auto"
                  >
                    Continue
                    <ChevronRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="luxe-button-gold ml-auto flex items-center gap-2"
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        Place Order
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-32 luxe-card p-6">
              <h2 className="text-xl font-light tracking-wider mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-16 h-16 bg-luxe-gray-100 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.product.name}</h3>
                      <p className="text-xs text-luxe-slate">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 py-6 border-t border-luxe-border">
                <div className="flex justify-between text-sm">
                  <span className="text-luxe-slate">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxe-slate">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-luxe-slate">Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t border-luxe-border">
                <span className="text-lg">Total</span>
                <span className="text-lg font-medium text-luxe-gold">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}