import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5odt9gnl',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function deleteAllSubProducts() {
  try {
    console.log('Fetching all sub products...')
    
    // Get all sub products
    const subProducts = await client.fetch('*[_type == "subProduct"]')
    console.log(`Found ${subProducts.length} sub products to delete`)
    
    if (subProducts.length === 0) {
      console.log('No sub products found to delete')
      return
    }
    
    // Delete all sub products
    for (const subProduct of subProducts) {
      try {
        await client.delete(subProduct._id)
        console.log(`Deleted sub product: ${subProduct.title}`)
      } catch (error) {
        console.error(`Error deleting sub product ${subProduct.title}:`, error)
      }
    }
    
    console.log('All sub products deleted successfully!')
  } catch (error) {
    console.error('Error during sub product deletion:', error)
  }
}

async function deleteAllProducts() {
  try {
    console.log('Fetching all products...')
    
    // Get all products
    const products = await client.fetch('*[_type == "product"]')
    console.log(`Found ${products.length} products to delete`)
    
    if (products.length === 0) {
      console.log('No products found to delete')
      return
    }
    
    // Delete all products
    for (const product of products) {
      try {
        await client.delete(product._id)
        console.log(`Deleted product: ${product.title}`)
      } catch (error) {
        console.error(`Error deleting product ${product.title}:`, error)
      }
    }
    
    console.log('All products deleted successfully!')
  } catch (error) {
    console.error('Error during product deletion:', error)
  }
}

async function deleteAllCategories() {
  try {
    console.log('Fetching all categories...')
    
    // Get all categories
    const categories = await client.fetch('*[_type == "productCategory"]')
    console.log(`Found ${categories.length} categories to delete`)
    
    if (categories.length === 0) {
      console.log('No categories found to delete')
      return
    }
    
    // Delete all categories
    for (const category of categories) {
      try {
        await client.delete(category._id)
        console.log(`Deleted category: ${category.title}`)
      } catch (error) {
        console.error(`Error deleting category ${category.title}:`, error)
      }
    }
    
    console.log('All categories deleted successfully!')
  } catch (error) {
    console.error('Error during category deletion:', error)
  }
}

async function deleteAllData() {
  try {
    console.log('Starting complete data deletion...')
    console.log('=' .repeat(50))
    
    // Delete in reverse order of creation to avoid reference conflicts
    // 1. First delete sub products (they reference products)
    await deleteAllSubProducts()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait between operations
    
    // 2. Then delete products (they reference categories)
    await deleteAllProducts()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait between operations
    
    // 3. Finally delete categories (no references to them should remain)
    await deleteAllCategories()
    
    console.log('=' .repeat(50))
    console.log('Complete data deletion finished successfully!')
    console.log('All categories, products, and sub-products have been removed from Sanity.')
  } catch (error) {
    console.error('Error during complete data deletion:', error)
  }
}

// Run the deletion
deleteAllData()
