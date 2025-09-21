export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'watches' | 'bags' | 'jewelry' | 'accessories' | 'clothing'
  images: string[]
  inStock: boolean
  featured?: boolean
  new?: boolean
  details?: string[]
  materials?: string[]
  care?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export interface FilterState {
  category: string
  priceRange: [number, number]
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest'
  searchQuery: string
}

export interface CheckoutFormData {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  cardNumber: string
  cardName: string
  cardExpiry: string
  cardCvv: string
}