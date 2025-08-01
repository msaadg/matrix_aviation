import { client } from '@/sanity/lib/client'
import { 
  ProductCategory, 
  Product, 
  SubProduct, 
  ProductsResponse,
  ProductDetailResponse,
  SubProductDetailResponse,
  Brand,
  Contact
} from '@/app/lib/types'
import {
  productCategoriesQuery,
  productsQuery,
  productsByCategoryQuery,
  productBySlugQuery,
  subProductsByProductQuery,
  subProductBySlugQuery,
  relatedProductsQuery,
  relatedSubProductsQuery,
  featuredProductsQuery,
  searchProductsQuery,
  contactQuery
} from '@/app/lib/queries'

// Get all product categories
export async function getProductCategories(): Promise<ProductCategory[]> {
  try {
    return await client.fetch(productCategoriesQuery)
  } catch (error) {
    console.error('Error fetching product categories:', error)
    return []
  }
}

// Get all products
export async function getProducts(): Promise<Product[]> {
  try {
    return await client.fetch(productsQuery)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Get products by category ID
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    return await client.fetch(productsByCategoryQuery, { categoryId })
  } catch (error) {
    console.error('Error fetching products by category:', error)
    return []
  }
}

// Get products and categories for the main products page
export async function getProductsWithCategories(): Promise<ProductsResponse> {
  try {
    const [products, categories] = await Promise.all([
      getProducts(),
      getProductCategories()
    ])
    
    return { products, categories }
  } catch (error) {
    console.error('Error fetching products with categories:', error)
    return { products: [], categories: [] }
  }
}

// Get single product by slug with related data
export async function getProductBySlug(slug: string): Promise<ProductDetailResponse | null> {
  try {
    const product = await client.fetch(productBySlugQuery, { slug })
    
    if (!product) {
      return null
    }

    const [subProducts, relatedProducts] = await Promise.all([
      getSubProductsByProduct(product._id),
      getRelatedProducts(product.category._id, product._id)
    ])

    return {
      product,
      subProducts,
      relatedProducts
    }
  } catch (error) {
    console.error('Error fetching product by slug:', error)
    return null
  }
}

// Get sub products by parent product ID
export async function getSubProductsByProduct(productId: string): Promise<SubProduct[]> {
  try {
    return await client.fetch(subProductsByProductQuery, { productId })
  } catch (error) {
    console.error('Error fetching sub products:', error)
    return []
  }
}

// Get single sub product by slug with related data
export async function getSubProductBySlug(slug: string): Promise<SubProductDetailResponse | null> {
  try {
    const subProduct = await client.fetch(subProductBySlugQuery, { slug })
    
    if (!subProduct) {
      return null
    }

    const relatedSubProducts = await getRelatedSubProducts(
      subProduct.parentProduct._id, 
      subProduct._id
    )

    return {
      subProduct,
      relatedSubProducts
    }
  } catch (error) {
    console.error('Error fetching sub product by slug:', error)
    return null
  }
}

// Get related products (same category, excluding current)
export async function getRelatedProducts(categoryId: string, currentId: string): Promise<Product[]> {
  try {
    return await client.fetch(relatedProductsQuery, { categoryId, currentId })
  } catch (error) {
    console.error('Error fetching related products:', error)
    return []
  }
}

// Get related sub products (same parent product, excluding current)
export async function getRelatedSubProducts(parentProductId: string, currentId: string): Promise<SubProduct[]> {
  try {
    return await client.fetch(relatedSubProductsQuery, { parentProductId, currentId })
  } catch (error) {
    console.error('Error fetching related sub products:', error)
    return []
  }
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    return await client.fetch(featuredProductsQuery)
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

// Search products and sub products
export async function searchProducts(searchTerm: string): Promise<{products: Product[], subProducts: SubProduct[]}> {
  try {
    const searchQuery = `*${searchTerm}*`
    return await client.fetch(searchProductsQuery, { searchTerm: searchQuery })
  } catch (error) {
    console.error('Error searching products:', error)
    return { products: [], subProducts: [] }
  }
}

// Get static paths for products (for ISR/SSG)
export async function getProductPaths(): Promise<Array<{params: {slug: string}}>> {
  try {
    const products = await client.fetch(`
      *[_type == "product" && available == true && defined(slug.current)] {
        "slug": slug.current
      }
    `)
    
    return products.map((product: {slug: string}) => ({
      params: { slug: product.slug }
    }))
  } catch (error) {
    console.error('Error fetching product paths:', error)
    return []
  }
}

// Get static paths for sub products (for ISR/SSG)
export async function getSubProductPaths(): Promise<Array<{params: {slug: string, parentSlug: string}}>> {
  try {
    const subProducts = await client.fetch(`
      *[_type == "subProduct" && available == true && defined(slug.current)] {
        "slug": slug.current,
        "parentSlug": parentProduct->slug.current
      }
    `)
    
    return subProducts.map((subProduct: {slug: string, parentSlug: string}) => ({
      params: { 
        slug: subProduct.slug,
        parentSlug: subProduct.parentSlug
      }
    }))
  } catch (error) {
    console.error('Error fetching sub product paths:', error)
    return []
  }
}

// Get all brands
export async function getBrands(): Promise<Brand[]> {
  try {
    const brandsQuery = `*[_type == "brand"] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      logo,
      shortDescription,
      associatedProduct->{
        _id,
        title,
        slug,
        shortDescription,
        category->{
          _id,
          title,
          slug
        }
      },
      order,
      featured
    }`
    return await client.fetch(brandsQuery)
  } catch (error) {
    console.error('Error fetching brands:', error)
    return []
  }
}

// Get featured brands
export async function getFeaturedBrands(): Promise<Brand[]> {
  try {
    const featuredBrandsQuery = `*[_type == "brand" && featured == true] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      logo,
      shortDescription,
      associatedProduct->{
        _id,
        title,
        slug,
        shortDescription
      },
      order,
      featured
    }`
    return await client.fetch(featuredBrandsQuery)
  } catch (error) {
    console.error('Error fetching featured brands:', error)
    return []
  }
}

// Get contact information
export async function getContactInfo(): Promise<Contact | null> {
  try {
    return await client.fetch(contactQuery)
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return null
  }
}
