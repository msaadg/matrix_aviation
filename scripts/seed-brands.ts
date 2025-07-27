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

// Brand data with associated products
const brandsData = [
  {
    title: 'Apollo',
    shortDescription: 'Apollo ball valves fitted with spring return \'deadman\' levers.',
    associatedProductSlug: 'valves-pipeline-components',
    order: 1,
    featured: true
  },
  {
    title: 'Dantec',
    shortDescription: 'World leader in composite hose technology for the transfer of petroleum & chemicals, liquid gas, aggressive acids, biofuels & vapour.',
    associatedProductSlug: 'hoses-accessories',
    order: 2,
    featured: true
  },
  {
    title: 'Delta',
    shortDescription: 'Wireless and wired \'deadman\' control systems and spare parts.',
    associatedProductSlug: 'deadman-systems-accessories',
    order: 3,
    featured: true
  },
  {
    title: 'Eaton\'s Carter®',
    shortDescription: 'Aviation refuelling couplings, inline pressure control/deadman valves, hydrant valves, hydrant dispenser intake couplings, and tanker bottom loading systems.',
    associatedProductSlug: 'pressure-fuelling-nozzles',
    order: 4,
    featured: true
  },
  {
    title: 'Echa',
    shortDescription: 'MicrobMonitor2® microbiological contamination test kits for aviation fuel handling applications.',
    associatedProductSlug: 'quality-control-testing',
    order: 5,
    featured: true
  },
  {
    title: 'ELAFLEX',
    shortDescription: 'A leading global specialist in developing and distributing products and systems for handling liquid media. For over 100 years, ELAFLEX has set cross-industry standards for safety and quality in conventional fuels and other sensitive media. Their user-friendly products are durable, sustainable, and reliable, ensuring a low Total Cost of Ownership (TCO).',
    associatedProductSlug: 'hoses-accessories',
    order: 6,
    featured: true
  },
  {
    title: 'Facet',
    shortDescription: 'With 80 years at the forefront of aviation fueling, Facet provides advanced and cost-effective technologies for ensuring clean, contaminate-free dry fuel from the refinery to the aircraft.',
    associatedProductSlug: 'filtration-equipment-accessories',
    order: 7,
    featured: false
  },
  {
    title: 'Fjord',
    shortDescription: 'High-quality range of urethane products including aircraft refuelling coupling sealing caps and protection rings, hose protection beads, and aircraft wing protection mats.',
    associatedProductSlug: 'quality-control-testing',
    order: 8,
    featured: false
  },
  {
    title: 'Gammon',
    shortDescription: 'Minimonitor and multi minimonitor \'Millipore\' type contamination test kits and consumables including colormetric and gravimetric capsules. Direct reading filter differential pressure gauges. Fuel sampling probes and test fittings. Spring rewind bonding reels. Tank floating suction assemblies. Aqua Glo kits for the measurement of water concentration in hydrocarbon fuels. Complete range of fuel quality checking equipment.',
    associatedProductSlug: 'quality-control-testing',
    order: 9,
    featured: false
  },
  {
    title: 'Hammonds',
    shortDescription: 'Additive injection equipment supplied on a stand-alone basis or as part of bespoke custom-manufactured fixed or mobile additive injection systems. Capabilities include injection of anti-icing additive, corrosion inhibitor, +100, biocides, ground fuel performance enhancers, and marker dyes for aviation and industrial markets.',
    associatedProductSlug: 'additive-injection',
    order: 10,
    featured: false
  },
  {
    title: 'SAMPI and Liquid Controls®',
    shortDescription: 'Positive displacement bulk flow meters, electronic metering systems, control valves, and accessories.',
    associatedProductSlug: 'flow-metering',
    order: 11,
    featured: false
  },
  {
    title: 'MannTek',
    shortDescription: 'Renowned manufacturer of couplings and fittings for safe handling of hazardous media in the chemical and petrochemical industry. Products include DDC (Dry Disconnect Couplings), DAC (Dry Aviation Couplings), DGC (Dry Gas Couplings), DCC (Dry Cryogenic Couplings), SBC (Safety Breakaway Couplings), FFBV (Full Flow Ball Valves), Swivel Joints, sampling units, de-icing couplings for airports, and complete bunkering systems for LNG and other cryogenic media.',
    associatedProductSlug: 'valves-pipeline-components',
    order: 12,
    featured: false
  },
  {
    title: 'OCV',
    shortDescription: 'Pilot-operated control valves in Carbon Steel and Stainless Steel for rate of flow control, pressure control, pressure sustaining, and solenoid-operated on/off/flow modulation.',
    associatedProductSlug: 'valves-pipeline-components',
    order: 13,
    featured: false
  },
  {
    title: 'Prokosch',
    shortDescription: 'Aluminium ball valves for petroleum and powder tankers.',
    associatedProductSlug: 'valves-pipeline-components',
    order: 14,
    featured: false
  },
  {
    title: 'Avery-Hardoll®',
    shortDescription: 'Positive displacement bulk flow meters, electronic metering systems, control valves, and accessories.',
    associatedProductSlug: 'flow-metering',
    order: 15,
    featured: false
  }
]

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

async function createBrands() {
  try {
    console.log('Creating brands...')
    
    // Get all products to link brands
    const productsInSanity = await client.fetch('*[_type == "product"]')
    console.log(`Found ${productsInSanity.length} products in Sanity`)
    
    for (const brandData of brandsData) {
      // Find the associated product
      const associatedProduct = productsInSanity.find((product: any) => 
        product.slug.current === brandData.associatedProductSlug
      )
      
      if (!associatedProduct) {
        console.error(`Associated product not found for brand ${brandData.title}: ${brandData.associatedProductSlug}`)
        continue
      }
      
      const brand = {
        _type: 'brand',
        title: brandData.title,
        slug: { current: generateSlug(brandData.title) },
        shortDescription: brandData.shortDescription,
        associatedProduct: {
          _type: 'reference',
          _ref: associatedProduct._id
        },
        order: brandData.order,
        featured: brandData.featured
      }
      
      try {
        const result = await client.create(brand)
        console.log(`Created brand: ${brand.title}`)
      } catch (error) {
        console.error(`Error creating brand ${brand.title}:`, error)
      }
    }
    
    console.log('Brand seeding completed successfully!')
  } catch (error) {
    console.error('Error during brand seeding:', error)
  }
}

// Run the seeding
createBrands()
