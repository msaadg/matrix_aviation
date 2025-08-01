import 'dotenv/config'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../sanity/env'

// Create a write client for cleanup
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function removeSpecifications() {
  try {
    console.log('🧹 Removing specifications from all products and sub-products...')
    
    // Get all products with specifications
    const products = await client.fetch('*[_type == "product" && defined(specifications)]')
    console.log(`Found ${products.length} products with specifications`)
    
    // Remove specifications from products
    for (const product of products) {
      try {
        await client
          .patch(product._id)
          .unset(['specifications'])
          .commit()
        console.log(`✅ Removed specifications from product: ${product.title}`)
      } catch (error) {
        console.error(`❌ Error updating product ${product.title}:`, error)
      }
    }
    
    // Get all sub-products with specifications
    const subProducts = await client.fetch('*[_type == "subProduct" && defined(specifications)]')
    console.log(`Found ${subProducts.length} sub-products with specifications`)
    
    // Remove specifications from sub-products
    for (const subProduct of subProducts) {
      try {
        await client
          .patch(subProduct._id)
          .unset(['specifications'])
          .commit()
        console.log(`✅ Removed specifications from sub-product: ${subProduct.title}`)
      } catch (error) {
        console.error(`❌ Error updating sub-product ${subProduct.title}:`, error)
      }
    }
    
    console.log('🎉 Specifications cleanup completed!')
  } catch (error) {
    console.error('❌ Error during specifications cleanup:', error)
    process.exit(1)
  }
}

// Run the cleanup function
removeSpecifications()
