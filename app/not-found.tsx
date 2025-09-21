import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-light text-luxe-gold mb-4">404</h1>
        <h2 className="luxe-heading-3 mb-4">Page Not Found</h2>
        <p className="text-lg text-luxe-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Perhaps you'd like to explore our collection instead?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="luxe-button-gold flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link href="/products" className="luxe-button flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}