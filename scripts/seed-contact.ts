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

const contactData = {
  _type: 'contact',
  name: 'Matrix Aviation Fueling - Main Contact',
  address: {
    street: 'Office # 3, Plot # 6-C, Lane-1, Sehar commercial, DHA Phase-7',
    city: 'Karachi',
    state: '',
    postalCode: '75500',
    country: 'Pakistan'
  },
  phones: [
    {
      label: 'tel',
      number: '+92-21-35161020',
      isPrimary: true,
      _key: 'tel1'
    },
    {
      label: 'tel',
      number: '+92-21-35161021',
      isPrimary: false,
      _key: 'tel2'
    },
    {
      label: 'mobile',
      number: '+92-300-8256712',
      isPrimary: false,
      _key: 'mobile1'
    }
  ],
  emails: [
    {
      label: 'sales',
      email: 'sales@matrixaviationfueling.com',
      isPrimary: true,
      _key: 'sales1'
    }
  ],
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/matrix-aviation-fueling',
    facebook: 'https://www.facebook.com/matrixaviationfueling',
    instagram: 'https://www.instagram.com/matrixaviationfueling',
    youtube: 'https://www.youtube.com/@matrixaviationfueling'
  },
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM (PKT)\\nSaturday: 9:00 AM - 1:00 PM (PKT)\\nSunday: Closed'
}

async function seedContactInfo() {
  try {
    console.log('Creating contact information...')
    
    // Check if contact info already exists
    const existing = await client.fetch('*[_type == "contact"][0]')
    
    if (existing) {
      console.log('Contact information already exists. Updating...')
      const result = await client
        .patch(existing._id)
        .set(contactData)
        .commit()
      
      console.log('Contact information updated:', result._id)
    } else {
      console.log('Creating new contact information...')
      const result = await client.create(contactData)
      console.log('Contact information created:', result._id)
    }
    
    console.log('✅ Contact information seeded successfully!')
  } catch (error) {
    console.error('❌ Error seeding contact information:', error)
    process.exit(1)
  }
}

seedContactInfo()
