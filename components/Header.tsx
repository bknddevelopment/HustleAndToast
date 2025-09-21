'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { cn } from '@/lib/utils'
import { Cart } from './Cart'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/products?category=watches', label: 'Watches' },
  { href: '/products?category=bags', label: 'Bags' },
  { href: '/products?category=jewelry', label: 'Jewelry' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { getTotalItems, toggleCart, isOpen: isCartOpen } = useCartStore()
  const totalItems = getTotalItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-luxe-white/95 backdrop-blur-md border-b border-luxe-border shadow-md'
            : 'bg-transparent'
        )}
      >
        <nav className="luxe-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center h-12 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/HustleandToast.jpg"
                alt="Hustle & Toast"
                width={100}
                height={40}
                className="object-contain h-full w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light tracking-wider uppercase text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User */}
              <button
                className="hidden sm:block p-2 text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs bg-luxe-gold text-white rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-4 border-t border-luxe-border">
                  <form className="flex items-center">
                    <input
                      type="search"
                      placeholder="Search products..."
                      className="luxe-input"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="ml-2 px-6 py-3 bg-luxe-gold text-white hover:bg-luxe-gold-dark transition-colors"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-20 right-0 bottom-0 w-full sm:w-80 bg-white border-l border-luxe-border shadow-lg lg:hidden"
            >
              <nav className="p-6">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-lg font-light tracking-wider uppercase text-luxe-charcoal/80 hover:text-luxe-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Sidebar */}
      <Cart />
    </>
  )
}