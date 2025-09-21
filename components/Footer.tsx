'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'New Arrivals', href: '/products?filter=new' },
    { label: 'Featured', href: '/products?filter=featured' },
    { label: 'Watches', href: '/products?category=watches' },
    { label: 'Bags', href: '/products?category=bags' },
    { label: 'Jewelry', href: '/products?category=jewelry' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  support: [
    { label: 'Customer Service', href: '/support' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <footer className="bg-luxe-cream border-t border-luxe-border mt-20">
      {/* Newsletter Section */}
      <div className="luxe-container py-16 border-b border-luxe-border">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="luxe-heading-3 mb-4">Stay in Touch</h3>
          <p className="text-luxe-slate mb-8">
            Subscribe to receive exclusive updates, new arrivals, and insider-only discounts.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="luxe-input flex-1"
              required
            />
            <button
              type="submit"
              className="luxe-button-gold flex items-center justify-center gap-2"
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="luxe-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-light tracking-[0.3em] text-luxe-gold">LUXE</h2>
            </Link>
            <p className="text-luxe-slate text-sm leading-relaxed mb-6">
              Curating luxury fashion and lifestyle for the modern connoisseur since 2024.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-luxe-slate hover:text-luxe-gold transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-luxe-charcoal">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luxe-slate hover:text-luxe-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-luxe-charcoal">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luxe-slate hover:text-luxe-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-luxe-charcoal">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luxe-slate hover:text-luxe-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-luxe-charcoal">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-luxe-slate hover:text-luxe-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxe-border">
        <div className="luxe-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-luxe-slate">
              &copy; 2024 LUXE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="text-sm text-luxe-gray-400 hover:text-luxe-gold transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-luxe-gray-400 hover:text-luxe-gold transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-luxe-gray-400 hover:text-luxe-gold transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}