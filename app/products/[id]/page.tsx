import { notFound } from 'next/navigation'
import { getProductById, products } from '@/lib/products'
import ProductClient from './product-client'

// Generate static params for all product pages
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return <ProductClient product={product} relatedProducts={relatedProducts} />
}