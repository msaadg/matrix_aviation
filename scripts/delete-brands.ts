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

async function deleteAllBrands() {
  try {
    console.log('Fetching all brands...')
    
    // Get all brands
    const brands = await client.fetch('*[_type == "brand"]')
    console.log(`Found ${brands.length} brands to delete`)
    
    if (brands.length === 0) {
      console.log('No brands found to delete')
      return
    }
    
    // Delete all brands
    for (const brand of brands) {
      try {
        await client.delete(brand._id)
        console.log(`Deleted brand: ${brand.title}`)
      } catch (error) {
        console.error(`Error deleting brand ${brand.title}:`, error)
      }
    }
    
    console.log('All brands deleted successfully!')
  } catch (error) {
    console.error('Error during brand deletion:', error)
  }
}

// Run the deletion
deleteAllBrands()
