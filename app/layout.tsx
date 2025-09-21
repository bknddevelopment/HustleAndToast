import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/store/cart'
import { Toaster } from '@/components/Toaster'

export const metadata: Metadata = {
  title: 'Hustle & Toast | Premium Lifestyle & Fashion',
  description: 'Celebrate success with style. Discover luxury fashion and lifestyle products curated for the modern connoisseur. Exclusive designs, premium quality, timeless elegance.',
  keywords: 'luxury, fashion, lifestyle, premium, designer, exclusive, hustle, toast, success',
  openGraph: {
    title: 'Hustle & Toast | Premium Lifestyle & Fashion',
    description: 'Celebrate success with style. Discover luxury fashion and lifestyle products curated for the modern connoisseur.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-luxe-white text-luxe-charcoal font-sans">
        <CartProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}