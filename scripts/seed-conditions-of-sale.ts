import 'dotenv/config'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../sanity/env'

// Create a write client for seeding
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const conditionsOfSaleData = {
  _type: 'conditionsOfSale',
  title: 'Conditions of Sale',
  subtitle: 'Terms of Purchase',
  description: 'These terms govern all transactions with Matrix Aviation.',
  sectionTitle: 'Terms & Conditions',
  sectionSubtitle: 'Legal terms governing your purchases',
  terms: [
    {
      number: 1,
      title: 'General Terms',
      content: 'These conditions apply to all sales of goods and services by Matrix Aviation. By placing an order, you accept these terms in full.'
    },
    {
      number: 2,
      title: 'Quotations and Orders',
      content: 'All quotations are valid for 45 days unless otherwise stated. Orders are accepted subject to availability and our written acknowledgment.'
    },
    {
      number: 3,
      title: 'Pricing and Payment',
      content: 'Prices are quoted in PKR and include GST unless stated otherwise. Payment terms are net 30 days from invoice date unless agreed otherwise.'
    },
    {
      number: 4,
      title: 'Specifications',
      content: 'Goods will conform to specifications agreed at time of order. Minor variations may occur due to manufacturing processes.'
    },
    {
      number: 5,
      title: 'Delivery',
      content: 'Delivery dates are estimates and not guaranteed. We provide free delivery within Karachi. There will be shipping charges for other cities.'
    },
    {
      number: 6,
      title: 'Returns and Warranty',
      content: 'Returns require prior authorization. Warranty terms vary by product and are specified in our quotation.'
    },
    {
      number: 7,
      title: 'Limitation of Liability',
      content: 'Our liability is limited to the purchase price of goods. We exclude liability for consequential or indirect losses.'
    },
    {
      number: 8,
      title: 'Force Majeure',
      content: 'We are not liable for delays caused by circumstances beyond our reasonable control, including but not limited to acts of nature, war, or government action.'
    },
    {
      number: 9,
      title: 'Governing Law',
      content: 'These terms are governed by Pakistani law and subject to the exclusive jurisdiction of the Pakistani courts.'
    }
  ]
}

async function seedConditionsOfSale() {
  try {
    console.log('🌱 Seeding conditions of sale...')
    
    // Check if conditions of sale already exists
    const existing = await client.fetch('*[_type == "conditionsOfSale"][0]')
    
    if (existing) {
      console.log('📝 Updating existing conditions of sale...')
      const result = await client
        .patch(existing._id)
        .set(conditionsOfSaleData)
        .commit()
      console.log('✅ Conditions of sale updated:', result._id)
    } else {
      console.log('📝 Creating new conditions of sale...')
      const result = await client.create(conditionsOfSaleData)
      console.log('✅ Conditions of sale created:', result._id)
    }
    
    console.log('🎉 Conditions of sale seeding completed!')
  } catch (error) {
    console.error('❌ Error seeding conditions of sale:', error)
    process.exit(1)
  }
}

// Run the seeding function
seedConditionsOfSale()
