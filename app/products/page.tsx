'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/ProductCard'
import { products, getProductsByCategory, searchProducts } from '@/lib/products'
import { Product } from '@/types'

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'watches', label: 'Watches' },
  { value: 'bags', label: 'Bags' },
  { value: 'jewelry', label: 'Jewelry' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'clothing', label: 'Clothing' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Get params from URL
    const category = searchParams.get('category') || 'all'
    const filter = searchParams.get('filter')
    const query = searchParams.get('q') || ''

    setSelectedCategory(category)
    setSearchQuery(query)

    // Apply filters
    let filtered = category === 'all' ? [...products] : getProductsByCategory(category)

    // Apply search query
    if (query) {
      filtered = searchProducts(query)
    }

    // Apply special filters
    if (filter === 'new') {
      filtered = filtered.filter(p => p.new)
    } else if (filter === 'featured') {
      filtered = filtered.filter(p => p.featured)
    }

    // Apply price range
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'newest':
        filtered = filtered.filter(p => p.new).concat(filtered.filter(p => !p.new))
        break
      case 'featured':
      default:
        filtered = filtered.filter(p => p.featured).concat(filtered.filter(p => !p.featured))
        break
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, sortBy, priceRange, searchParams])

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-16 bg-luxe-cream">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="luxe-heading-2 mb-4">Our Collection</h1>
            <p className="text-lg text-luxe-slate">
              Discover luxury redefined through our curated selection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-luxe-border shadow-sm">
        <div className="luxe-container">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm tracking-wider uppercase hover:text-luxe-gold transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <span className="text-sm text-luxe-slate">
                {filteredProducts.length} Products
              </span>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm tracking-wider uppercase pr-8 text-luxe-charcoal hover:text-luxe-gold transition-colors cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="luxe-container py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-64 flex-shrink-0"
              >
                <div className="sticky top-36 space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wider uppercase mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <button
                          key={category.value}
                          onClick={() => setSelectedCategory(category.value)}
                          className={`block w-full text-left text-sm py-2 px-3 transition-colors ${
                            selectedCategory === category.value
                              ? 'bg-luxe-gold text-white'
                              : 'hover:text-luxe-gold'
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wider uppercase mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                          className="luxe-input text-sm"
                          placeholder="Min"
                        />
                        <span className="text-luxe-slate">-</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                          className="luxe-input text-sm"
                          placeholder="Max"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Search */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wider uppercase mb-4">
                      Search
                    </h3>
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="luxe-input text-sm"
                    />
                  </div>

                  {/* Clear Filters */}
                  <button
                    onClick={() => {
                      setSelectedCategory('all')
                      setSortBy('featured')
                      setPriceRange([0, 50000])
                      setSearchQuery('')
                    }}
                    className="w-full luxe-button text-sm"
                  >
                    Clear All Filters
                  </button>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-luxe-slate mb-6">
                  No products found matching your criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange([0, 50000])
                    setSearchQuery('')
                  }}
                  className="luxe-button"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="luxe-shimmer w-32 h-32 mx-auto mb-4" />
          <p className="text-luxe-slate">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}