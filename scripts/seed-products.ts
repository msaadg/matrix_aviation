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

// Product categories data based on your list
const categories = [
  {
    _type: 'productCategory',
    title: 'Quality Control & Testing',
    slug: { current: 'quality-control-testing' },
    description: 'Comprehensive testing equipment to ensure fuel quality and system integrity in all operations.',
    order: 1
  },
  {
    _type: 'productCategory',
    title: 'Closed Circuit Sampling & Product Recovery',
    slug: { current: 'closed-circuit-sampling-product-recovery' },
    description: 'Advanced sampling and recovery systems for efficient fuel handling operations.',
    order: 2
  },
  {
    _type: 'productCategory',
    title: 'Deadman Systems & Accessories',
    slug: { current: 'deadman-systems-accessories' },
    description: 'Safety systems and accessories for secure fuel handling operations.',
    order: 3
  },
  {
    _type: 'productCategory',
    title: 'Static Bonding & Lanyard Equipment',
    slug: { current: 'static-bonding-lanyard-equipment' },
    description: 'Advanced static bonding solutions for safe fuel handling and transfer operations.',
    order: 4
  },
  {
    _type: 'productCategory',
    title: 'Pressure Fuelling Nozzles',
    slug: { current: 'pressure-fuelling-nozzles' },
    description: 'Engineered for safety and efficiency, our field-proven nozzle designs meet the most demanding requirements.',
    order: 5
  },
  {
    _type: 'productCategory',
    title: 'Hydrant Intake Couplers',
    slug: { current: 'hydrant-intake-couplers' },
    description: 'Modular, durable construction for reliable fuel distribution systems across all aviation applications.',
    order: 6
  },
  {
    _type: 'productCategory',
    title: 'Hydrant Equipment',
    slug: { current: 'hydrant-equipment' },
    description: 'Professional hydrant equipment for aviation fuel distribution systems.',
    order: 7
  },
  {
    _type: 'productCategory',
    title: 'Aviation & Industrial Ground Units & Connectors',
    slug: { current: 'aviation-industrial-ground-units-connectors' },
    description: 'Ground units and connectors for aviation and industrial applications.',
    order: 8
  },
  {
    _type: 'productCategory',
    title: 'Flow Metering',
    slug: { current: 'flow-metering' },
    description: 'Precision flow metering systems for accurate fuel measurement.',
    order: 9
  },
  {
    _type: 'productCategory',
    title: 'Filtration Equipment & Accessories',
    slug: { current: 'filtration-equipment-accessories' },
    description: 'High-quality filtration systems for fuel purification and handling.',
    order: 10
  },
  {
    _type: 'productCategory',
    title: 'Pressure Control Valves',
    slug: { current: 'pressure-control-valves' },
    description: 'Advanced pressure control solutions for fuel handling systems.',
    order: 11
  },
  {
    _type: 'productCategory',
    title: 'Hoses & Accessories',
    slug: { current: 'hoses-accessories' },
    description: 'High-quality fuel hose systems designed for durability and reliability.',
    order: 12
  },
  {
    _type: 'productCategory',
    title: 'Overwing Fuelling Equipment',
    slug: { current: 'overwing-fuelling-equipment' },
    description: 'Specialized equipment for overwing fuelling operations.',
    order: 13
  },
  {
    _type: 'productCategory',
    title: 'Additive Injection',
    slug: { current: 'additive-injection' },
    description: 'Precision additive injection systems for fuel enhancement.',
    order: 14
  },
  {
    _type: 'productCategory',
    title: 'Valves & Pipeline Components',
    slug: { current: 'valves-pipeline-components' },
    description: 'High-quality valves and pipeline components for fuel systems.',
    order: 15
  },
  {
    _type: 'productCategory',
    title: 'Bottom Loading Systems',
    slug: { current: 'bottom-loading-systems' },
    description: 'Efficient bottom loading systems for fuel transfer operations.',
    order: 16
  },
  {
    _type: 'productCategory',
    title: 'Miscellaneous',
    slug: { current: 'miscellaneous' },
    description: 'Additional products and accessories for aviation fuel handling.',
    order: 17
  }
]

// Products data structure
const products = [
  {
    _type: 'product',
    title: 'Quality Control & Testing',
    slug: { current: 'quality-control-testing' },
    shortDescription: 'Comprehensive testing equipment to ensure fuel quality and system integrity in all operations.',
    features: ['Precision testing', 'Digital monitoring', 'Compliance ready', 'Quality assurance'],
    order: 1,
    featured: true,
    available: true
  },
  {
    _type: 'product',
    title: 'Closed Circuit Sampling & Product Recovery',
    slug: { current: 'closed-circuit-sampling-product-recovery' },
    shortDescription: 'Advanced sampling and recovery systems for efficient fuel handling operations.',
    features: ['Closed circuit design', 'Product recovery', 'Efficient sampling', 'Safe operation'],
    order: 2,
    featured: true,
    available: true
  },
  {
    _type: 'product',
    title: 'Deadman Systems & Accessories',
    slug: { current: 'deadman-systems-accessories' },
    shortDescription: 'Safety systems and accessories for secure fuel handling operations.',
    features: ['Safety compliance', 'Emergency shutdown', 'Reliable operation', 'Easy installation'],
    order: 3,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Static Bonding & Lanyard Equipment',
    slug: { current: 'static-bonding-lanyard-equipment' },
    shortDescription: 'Advanced static bonding solutions for safe fuel handling and transfer operations.',
    features: ['Static dissipation', 'Safety bonding', 'Durable construction', 'Easy operation'],
    order: 4,
    featured: true,
    available: true
  },
  {
    _type: 'product',
    title: 'Pressure Fuelling Nozzles',
    slug: { current: 'pressure-fuelling-nozzles' },
    shortDescription: 'Engineered for safety and efficiency, our field-proven nozzle designs meet the most demanding requirements.',
    features: ['Modular design', 'Easy maintenance', 'Safety certified', 'High flow rates'],
    order: 5,
    featured: true,
    available: true
  },
  {
    _type: 'product',
    title: 'Hydrant Intake Couplers',
    slug: { current: 'hydrant-intake-couplers' },
    shortDescription: 'Modular, durable construction for reliable fuel distribution systems across all aviation applications.',
    features: ['Corrosion resistant', 'High flow rates', 'Quick connect', 'Modular design'],
    order: 6,
    featured: true,
    available: true
  },
  {
    _type: 'product',
    title: 'Hydrant Equipment',
    slug: { current: 'hydrant-equipment' },
    shortDescription: 'Professional hydrant equipment for aviation fuel distribution systems.',
    features: ['Durable construction', 'Easy installation', 'Maintenance friendly', 'Reliable operation'],
    order: 7,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Aviation & Industrial Ground Units & Connectors',
    slug: { current: 'aviation-industrial-ground-units-connectors' },
    shortDescription: 'Ground units and connectors for aviation and industrial applications.',
    features: ['Versatile design', 'Industrial grade', 'Multiple configurations', 'Easy connection'],
    order: 8,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Flow Metering',
    slug: { current: 'flow-metering' },
    shortDescription: 'Precision flow metering systems for accurate fuel measurement.',
    features: ['High accuracy', 'Digital displays', 'Electronic registers', 'Calibration ready'],
    order: 9,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Filtration Equipment & Accessories',
    slug: { current: 'filtration-equipment-accessories' },
    shortDescription: 'High-quality filtration systems for fuel purification and handling.',
    features: ['Multi-stage filtration', 'High capacity', 'Easy maintenance', 'Pressure monitoring'],
    order: 10,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Pressure Control Valves',
    slug: { current: 'pressure-control-valves' },
    shortDescription: 'Advanced pressure control solutions for fuel handling systems.',
    features: ['Precise control', 'Digital monitoring', 'Bypass options', 'Safety features'],
    order: 11,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Hoses & Accessories',
    slug: { current: 'hoses-accessories' },
    shortDescription: 'High-quality fuel hose systems designed for durability and reliability.',
    features: ['Flexible design', 'Pressure tested', 'Safety clamps', 'Weather resistant'],
    order: 12,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Overwing Fuelling Equipment',
    slug: { current: 'overwing-fuelling-equipment' },
    shortDescription: 'Specialized equipment for overwing fuelling operations.',
    features: ['Automatic operation', 'Gravity systems', 'Safety features', 'Easy handling'],
    order: 13,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Additive Injection',
    slug: { current: 'additive-injection' },
    shortDescription: 'Precision additive injection systems for fuel enhancement.',
    features: ['Precise metering', 'Automated systems', 'Quality control', 'Easy integration'],
    order: 14,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Valves & Pipeline Components',
    slug: { current: 'valves-pipeline-components' },
    shortDescription: 'High-quality valves and pipeline components for fuel systems.',
    features: ['Corrosion resistant', 'Multiple materials', 'Reliable operation', 'Easy installation'],
    order: 15,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Bottom Loading Systems',
    slug: { current: 'bottom-loading-systems' },
    shortDescription: 'Efficient bottom loading systems for fuel transfer operations.',
    features: ['Multiple valve sizes', 'Vent systems', 'Safety features', 'Easy operation'],
    order: 16,
    featured: false,
    available: true
  },
  {
    _type: 'product',
    title: 'Miscellaneous',
    slug: { current: 'miscellaneous' },
    shortDescription: 'Additional products and accessories for aviation fuel handling.',
    features: ['Versatile tools', 'Emergency equipment', 'Specialized couplings', 'Maintenance items'],
    order: 17,
    featured: false,
    available: true 
  }
]

// Sub-products data for each category
const subProductsData = {
  'quality-control-testing': [
    'Aviation Fuel Quality Control Consumables',
    'Density and Temperature Measurement',
    'Digital Density Meter',
    'Emcee Model 1152 Digital Conductivity Meter',
    'Filter Membrane Testing Consumables',
    'Fuel Sample Retention Containers',
    'Fuel Sampling Equipment',
    'Fuel Spillage Control',
    'Fuel Testing',
    'Gammon Contamination Test Kits',
    'Kolor Kut Fuel and Water Finding Paste',
    'MICROBMONITOR2® Microbiological Contamination Test Kit',
    'Seals and Sealing Wire',
    'Self Adhesive Grade Decals'
  ],
  'closed-circuit-sampling-product-recovery': [
    '4 Litre Closed Circuit Sampler',
    '20 Litre Closed Circuit Sampler',
    'Air Powered Internal SWD',
    'High Capacity Closed Circuit Sampler',
    'Mobile Product Recovery Tank'
  ],
  'deadman-systems-accessories': [
    'Electric Deadman Switch & Accessories',
    'Deadman/Filter Differential Pressure Protection System',
    'Delta Wireless Deadman System',
    'Compact Deadman/Filter Differential Pressure Protection System',
    'Hazardous Area Universal Deadman System'
  ],
  'static-bonding-lanyard-equipment': [
    'Continuity Tester',
    'Bonding Cable Reel',
    'Lanyard Cable Reel and Accessories',
    'Large Hub Bonding Cable Reel',
    'Bonding Cable, Clips and Accessories',
    'Spring Rewind Static Bonding Reel',
    'High Capacity Spring Rewind Bonding Reel'
  ],
  'pressure-fuelling-nozzles': [
    'Underwing Nozzles, 64250 Series',
    'Underwing Nozzles, 64200 Series',
    'Underwing Nozzles, 64348 Series',
    'Underwing Nozzles, 60427 Series',
    'Underwing Nozzles, 64201 Series',
    'Underwing Nozzles, 64049 Series',
    'Nozzle Ball Valve, 64015',
    'Hose End Control Valve, 60129-1, 47013, 44646',
    'Dry Break QD, 61154',
    'D-3 Universal Inlet Coupling, 47566',
    'Continuity Dry Break QD, 64155',
    'Inspection and Maintenance Tools',
    'Helicopter In-Flight Refuelling Nozzle (HIFR), 64048',
    'Close Circuit Refuelling Nozzle (CCR), 64017'
  ],
  'hydrant-intake-couplers': [
    'Hydrant Coupler, 64910 Series',
    'Hydrant Coupler, 64900 Series',
    'Hydrant Coupler API Style, 64810',
    'Hydrant Coupler 4" API Style, 64804',
    'Hydrant Coupler 4" API Style, 64802',
    'Hydrant Coupler API Style, 61525',
    'Hydrant Coupler API Style, 64800',
    'Crocodile Hydrant Pit Coupler Lifter',
    'Inspection and Maintenance Tools'
  ],
  'hydrant-equipment': [
    'Hydrant Pit Box',
    'Hydrant Pit Valve 2½", 61524',
    'Hydrant Pit Valve 4", 60554',
    'Under Hydrant Ball Valve',
    'Inspection and Maintenance Tools',
    'Sample Vent and Drain Valve'
  ],
  'aviation-industrial-ground-units-connectors': [
    'Bottom Loading Adapters, 6958, 60195, 60373, 61272, 61409, 61527/28/29/31, 64040, 64373',
    'API Adapters, 60505, 61526',
    'ISO 45 Aviation Ground Unit',
    'ASME Flanged ISO 45 Aviation Ground Unit',
    'Underwing to Overwing Adapter',
    'Safeload Semi-Automatic API Coupler',
    'Dry Disconnect Couplings',
    'Inspection and Maintenance Tools'
  ],
  'flow-metering': [
    'Avery-Hardoll Range of Meters & Accessories',
    'SAMPI and Liquid Controls® MASTERLOAD Electronic Registers',
    'Master Meter Systems'
  ],
  'filtration-equipment-accessories': [
    'Multi-Purpose Filter Vessels',
    'Armstrong Air Eliminator',
    'Differential Pressure Gauge',
    'Basket Strainers'
  ],
  'pressure-control-valves': [
    'Bypass Pressure Control Valves, 64501, 64511',
    'Bypass Pressure Control Valves, 64503, 64513',
    'Inline and Bypass Control Valves - Digital, 64504, 64505, 64514, 64515',
    'Inline Pressure Control Valves, 64500, 64510',
    'Inline Pressure Control Valves, 64502, 64512',
    'Pressure Loss Compensator and Venturis, 60559, 64085, 64086, 64088, 64193',
    'OCV Control Valves'
  ],
  'hoses-accessories': [
    'ELAFLEX Aircraft Refuelling Hose',
    'Safety Clamp Hose End Fittings',
    'Danoil Composite Hose',
    'Hose Pressure Test Pump & Fittings',
    'Hose Sleeves & Hose Protection',
    'Crocodile Hydrant Pit Coupler Lifter',
    'Hydrant Pit and Dispenser Inlet Hose Visibility'
  ],
  'overwing-fuelling-equipment': [
    'Aircraft Refuelling Nozzles',
    'Automatic Refuelling Nozzles',
    'Gravity Fill Nozzle, 64014, 64033',
    'Helicopter In-Flight Refuelling Nozzle (HIFR), 64048',
    'Close Circuit Refuelling Nozzle (CCR), 64017',
    'Wing Mats'
  ],
  'additive-injection': [
    'Hammonds Additive Injection Equipment',
    'Packaged Additive Injection Systems'
  ],
  'valves-pipeline-components': [
    'Stainless Steel Apollo Valves',
    'Bronze Apollo Valves',
    'Aluminium Ball Valves',
    'Flexible Joints',
    'OCV Control Valves',
    'Sight Flow Indicators'
  ],
  'bottom-loading-systems': [
    'Bottom Load 6" Valves, 64118',
    'Bottom Load 4" Valves 64055, 64143',
    'Bottom Load 3" Valves, 64079, 64129',
    'Auxiliary Vents, 64078, 64159',
    'Inward opening 3" Vent, 64168',
    'Inward Opening 5¼" Vent, 64167'
  ],
  'miscellaneous': [
    'Inspection and Maintenance Tools',
    'Valved 3" Unisex Coupling, 64031',
    'Valved 2" Unisex Coupling, 64320',
    'Non-valved 2" Unisex Coupling, 64319',
    'Helicopter In-Flight Refuelling Nozzle (HIFR), 64048',
    'Close Circuit Refuelling Nozzle (CCR), 64017',
    'Emergency Breakaway Couplings 64024, 64121, 64226, 64227',
    'Emergency Breakaway Couplings, 64191'
  ]
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateModelNumber(title: string): string {
  // Extract model numbers from title if present
  const modelMatch = title.match(/\b\d{4,5}\b/)
  if (modelMatch) {
    return modelMatch[0]
  }
  
  // Generate a model number based on title
  const words = title.split(' ')
  const firstLetters = words.map(word => word.charAt(0).toUpperCase()).join('')
  const randomNum = Math.floor(Math.random() * 1000) + 1000
  return `${firstLetters}-${randomNum}`
}

async function createCategories() {
  console.log('Creating categories...')
  
  for (const category of categories) {
    try {
      const result = await client.create(category)
      console.log(`Created category: ${category.title}`)
    } catch (error) {
      console.error(`Error creating category ${category.title}:`, error)
    }
  }
}

async function createProducts() {
  console.log('Creating products...')
  
  // Get categories to link products
  const categoriesInSanity = await client.fetch('*[_type == "productCategory"]')
  
  for (let i = 0; i < categories.length; i++) {
    const categoryData = categories[i]
    const categoryInSanity = categoriesInSanity.find((cat: any) => cat.slug.current === categoryData.slug.current)
    
    if (!categoryInSanity) {
      console.error(`Category not found for ${categoryData.title}`)
      continue
    }
    
    const product = {
      _type: 'product',
      title: categoryData.title,
      slug: { current: categoryData.slug.current },
      category: {
        _type: 'reference',
        _ref: categoryInSanity._id
      },
      shortDescription: categoryData.description,
      longDescription: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: `Our ${categoryData.title} products represent the highest standards in aviation fuel handling technology. Designed with precision engineering and rigorous quality control, these products ensure safe, efficient, and reliable operations in demanding aviation environments.`
            }
          ]
        }
      ],
      features: products[i]?.features || ['High quality', 'Reliable performance', 'Safety certified', 'Easy maintenance'],
      order: categoryData.order,
      featured: i < 6, // First 6 categories are featured
      available: true
    }
    
    try {
      const result = await client.create(product)
      console.log(`Created product: ${product.title}`)
    } catch (error) {
      console.error(`Error creating product ${product.title}:`, error)
    }
  }
}

async function createSubProducts() {
  console.log('Creating sub products...')
  
  // Get products to link sub-products
  const productsInSanity = await client.fetch('*[_type == "product"]')
  
  for (const [productSlug, subProductTitles] of Object.entries(subProductsData)) {
    const parentProduct = productsInSanity.find((product: any) => product.slug.current === productSlug)
    
    if (!parentProduct) {
      console.error(`Parent product not found for ${productSlug}`)
      continue
    }
    
    for (let i = 0; i < subProductTitles.length; i++) {
      const title = subProductTitles[i]
      const slug = generateSlug(title)
      const modelNumber = generateModelNumber(title)
      
      const subProduct = {
        _type: 'subProduct',
        title,
        slug: { current: slug },
        parentProduct: {
          _type: 'reference',
          _ref: parentProduct._id
        },
        shortDescription: `Professional ${title.toLowerCase()} designed for aviation fuel handling applications. Engineered for reliability, safety, and optimal performance.`,
        longDescription: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: `The ${title} is engineered to meet the highest standards of aviation fuel handling. With its robust construction and advanced features, this product ensures reliable performance in demanding operational environments.`
              }
            ]
          }
        ],
        features: [
          'High-quality construction',
          'Aviation-grade materials',
          'Compliance certified',
          'Easy maintenance',
          'Reliable performance'
        ],
        modelNumber,
        order: i + 1,
        featured: i < 3, // First 3 sub-products in each category are featured
        available: true,
        specifications: [
          {
            label: 'Material',
            value: 'Aerospace grade aluminum/stainless steel'
          },
          {
            label: 'Operating Temperature',
            value: '-40°C to +80°C'
          },
          {
            label: 'Pressure Rating',
            value: '150 PSI / 10 Bar'
          },
          {
            label: 'Connection Type',
            value: 'Standard aviation coupling'
          }
        ]
      }
      
      try {
        const result = await client.create(subProduct)
        console.log(`Created sub product: ${title}`)
      } catch (error) {
        console.error(`Error creating sub product ${title}:`, error)
      }
    }
  }
}

async function seedData() {
  try {
    console.log('Starting data seeding...')
    
    await createCategories()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait for categories to be created
    
    await createProducts()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait for products to be created
    
    await createSubProducts()
    
    console.log('Data seeding completed successfully!')
  } catch (error) {
    console.error('Error during data seeding:', error)
  }
}

// Run the seeding
seedData()
