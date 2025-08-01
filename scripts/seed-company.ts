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

const companyData = {
  _type: 'company',
  title: 'About Matrix Aviation',
  heroDescription: 'Established in 2016, Matrix Aviation supplies ground fueling and jet fuel testing equipment, serving leading oil companies, refineries, and airports.',
  storySubtitle: 'Our Story',
  storyTitle: 'Innovation Driven by Experience',
  storyDescription: 'Matrix Aviation delivers innovative fueling solutions tailored for the modern aviation industry. With a strong focus on safety, reliability, and technical excellence, we serve major oil companies, international airports, and aviation manufacturers across Pakistan.',
  additionalDescription: 'Specializing in quality control systems, static bonding, and ground fueling equipment, our experienced team ensures every product meets the highest standards of performance and safety.'
}

async function seedCompanyData() {
  try {
    console.log('🌱 Seeding company data...')
    
    // Check if company data already exists
    const existingCompany = await client.fetch(`*[_type == "company"][0]`)
    
    if (existingCompany) {
      console.log('📝 Updating existing company data...')
      const result = await client
        .patch(existingCompany._id)
        .set(companyData)
        .commit()
      console.log('✅ Company data updated:', result._id)
    } else {
      console.log('📝 Creating new company data...')
      const result = await client.create(companyData)
      console.log('✅ Company data created:', result._id)
    }
    
    console.log('🎉 Company data seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding company data:', error)
    process.exit(1)
  }
}

// Run the seeding
seedCompanyData()
