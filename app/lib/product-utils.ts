import { urlFor } from '@/sanity/lib/image'
import { Product, SubProduct, ProductCategory } from '@/app/lib/types'

// Get optimized image URL
export function getImageUrl(image: { asset?: { _ref?: string; _id?: string } }, width?: number, height?: number): string {
  if (!image?.asset) return '/placeholder.jpg'
  
  let builder = urlFor(image)
  
  if (width && height) {
    builder = builder.width(width).height(height).fit('crop')
  } else if (width) {
    builder = builder.width(width)
  }
  
  return builder.url()
}

// Get file URL for downloads (secure proxy)
export function getFileUrl(file?: { asset?: { _ref?: string; _id?: string; url?: string; originalFilename?: string; mimeType?: string } }, filename?: string): string | null {
  if (!file?.asset) return null
  
  // Extract the file ID from the asset reference
  const fileId = file.asset._ref || file.asset._id
  if (!fileId) return null
  
  // Create secure download URL through our API
  const params = new URLSearchParams({ fileId })
  if (filename) {
    params.append('filename', filename)
  }
  
  return `/api/download?${params.toString()}`
}

// Filter products by search term
export function filterProducts(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) return products
  
  const term = searchTerm.toLowerCase()
  return products.filter(product => 
    product.title.toLowerCase().includes(term) ||
    product.shortDescription.toLowerCase().includes(term) ||
    product.features?.some(feature => feature.toLowerCase().includes(term))
  )
}

// Filter products by category
export function filterProductsByCategory(products: Product[], categorySlug: string): Product[] {
  if (categorySlug === 'all') return products
  
  return products.filter(product => 
    product.category?.slug?.current === categorySlug
  )
}

// Get category display name by slug
export function getCategoryName(categories: ProductCategory[], slug: string): string {
  if (slug === 'all') return 'All Products'
  
  const category = categories.find(cat => cat.slug?.current === slug)
  return category?.title || 'Unknown Category'
}

// Generate breadcrumb data
export function generateProductBreadcrumb(product: Product) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.title, href: `/products/${product.slug?.current}` }
  ]
}

export function generateSubProductBreadcrumb(subProduct: SubProduct) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: subProduct.parentProduct?.title || 'Product', href: `/products/${subProduct.parentProduct?.slug?.current}` },
    { label: subProduct.title, href: `/products/${subProduct.parentProduct?.slug?.current}/${subProduct.slug?.current}` }
  ]
}

// Get product URL
export function getProductUrl(product: Product): string {
  return `/products/${product.slug?.current}`
}

// Get sub product URL
export function getSubProductUrl(subProduct: SubProduct): string {
  return `/products/${subProduct.parentProduct?.slug?.current}/${subProduct.slug?.current}`
}

// Check if product has datasheet
export function hasDatasheet(product: Product | SubProduct): boolean {
  return !!(product.datasheet?.asset)
}

// Get download filename for datasheet
export function getDatasheetFilename(product: Product | SubProduct): string {
  const title = product.title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()
  return `${title}_datasheet.pdf`
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

// Generate meta description for SEO
export function generateMetaDescription(product: Product | SubProduct): string {
  const description = product.shortDescription
  const features = product.features?.slice(0, 2).join(', ') || ''
  
  let meta = description
  if (features) {
    meta += ` Features: ${features}.`
  }
  
  return truncateText(meta, 160)
}

// Generate structured data for products (JSON-LD)
export function generateProductStructuredData(product: Product | SubProduct) {
  const isSubProduct = product._type === 'subProduct'
  const parentProduct = isSubProduct ? (product as SubProduct).parentProduct : null
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.shortDescription,
    "image": getImageUrl(product.mainImage, 800, 600),
    "brand": {
      "@type": "Brand",
      "name": "Matrix Aviation"
    },
    "category": isSubProduct ? parentProduct?.category?.title : (product as Product).category?.title,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  }
}
