import { Product } from '@/types'

export const products: Product[] = [
  // Watches
  {
    id: 'watch-1',
    name: 'Chronograph Elite',
    description: 'Swiss-made automatic chronograph with sapphire crystal and leather strap',
    price: 12500,
    category: 'watches',
    images: [
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
    ],
    inStock: true,
    featured: true,
    new: true,
    details: [
      'Swiss automatic movement',
      '42mm stainless steel case',
      'Sapphire crystal glass',
      'Water resistant to 100m',
      '72-hour power reserve',
    ],
    materials: ['Stainless steel', 'Genuine leather', 'Sapphire crystal'],
    care: ['Avoid extreme temperatures', 'Service every 3-5 years', 'Keep away from magnets'],
  },
  {
    id: 'watch-2',
    name: 'Minimalist Time',
    description: 'Ultra-thin design with mesh bracelet and minimalist dial',
    price: 8900,
    category: 'watches',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      'https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?w=800&q=80',
    ],
    inStock: true,
    featured: false,
    details: [
      'Quartz movement',
      '38mm titanium case',
      'Mesh steel bracelet',
      'Water resistant to 30m',
    ],
  },

  // Bags
  {
    id: 'bag-1',
    name: 'Executive Leather Tote',
    description: 'Handcrafted Italian leather tote bag with gold hardware',
    price: 3200,
    category: 'bags',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
    ],
    inStock: true,
    featured: true,
    details: [
      'Italian Nappa leather',
      'Gold-plated hardware',
      'Interior laptop compartment',
      'Adjustable shoulder strap',
    ],
    materials: ['Italian leather', 'Gold-plated brass', 'Cotton lining'],
    care: ['Store in dust bag', 'Condition leather monthly', 'Avoid water exposure'],
  },
  {
    id: 'bag-2',
    name: 'Weekend Duffel',
    description: 'Premium canvas and leather weekend travel bag',
    price: 1850,
    category: 'bags',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    inStock: true,
    new: true,
    details: [
      'Waxed canvas exterior',
      'Leather trim and handles',
      'Shoe compartment',
      'TSA-approved lock',
    ],
  },

  // Jewelry
  {
    id: 'jewelry-1',
    name: 'Diamond Eternity Ring',
    description: '18k white gold eternity band with VS1 diamonds',
    price: 18500,
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    inStock: true,
    featured: true,
    details: [
      '18k white gold',
      '3.5 carat total weight',
      'VS1 clarity diamonds',
      'Size adjustable',
    ],
    materials: ['18k white gold', 'Natural diamonds'],
    care: ['Professional cleaning twice yearly', 'Remove before swimming', 'Store separately'],
  },
  {
    id: 'jewelry-2',
    name: 'Pearl Cascade Necklace',
    description: 'South Sea pearls with 18k gold clasp',
    price: 6800,
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    inStock: true,
    details: [
      'South Sea cultured pearls',
      '18k gold clasp',
      '18 inch length',
      'Individually knotted',
    ],
  },

  // Accessories
  {
    id: 'accessory-1',
    name: 'Silk Pocket Square Set',
    description: 'Hand-rolled Italian silk pocket squares, set of 3',
    price: 285,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1589829482673-03413c918c48?w=800&q=80',
    ],
    inStock: true,
    details: [
      '100% Italian silk',
      'Hand-rolled edges',
      'Set of 3 patterns',
      'Gift box included',
    ],
  },
  {
    id: 'accessory-2',
    name: 'Leather Card Holder',
    description: 'Slim profile card holder in premium leather',
    price: 425,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
      'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800&q=80',
    ],
    inStock: true,
    new: true,
    details: [
      'Full-grain leather',
      'RFID protection',
      'Holds 8 cards',
      'Money clip included',
    ],
  },

  // Clothing
  {
    id: 'clothing-1',
    name: 'Cashmere Overcoat',
    description: 'Double-breasted cashmere wool overcoat',
    price: 4200,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    inStock: true,
    featured: true,
    details: [
      '100% cashmere wool',
      'Silk lining',
      'Double-breasted design',
      'Made in Italy',
    ],
    materials: ['Cashmere wool', 'Silk lining'],
    care: ['Dry clean only', 'Store on padded hanger', 'Steam to remove wrinkles'],
  },
  {
    id: 'clothing-2',
    name: 'Silk Evening Dress',
    description: 'Floor-length silk gown with hand-beaded details',
    price: 6800,
    category: 'clothing',
    images: [
      'https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=800&q=80',
      'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80',
    ],
    inStock: true,
    new: true,
    details: [
      '100% mulberry silk',
      'Hand-beaded bodice',
      'Hidden zipper closure',
      'Custom alterations available',
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.new)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter(p => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  )
}