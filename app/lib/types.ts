import { PortableTextBlock } from 'sanity'

// Product Category interface
export interface ProductCategory {
  _id: string
  _type: 'productCategory'
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  order?: number
}

// Product interface
export interface Product {
  _id: string
  _type: 'product'
  title: string
  subtitle?: string
  description?: string
  slug: {
    current: string
  }
  category: ProductCategory
  shortDescription: string
  longDescription?: PortableTextBlock[]
  mainImage: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  gallery?: Array<{
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }>
  features?: string[]
  datasheet?: {
    asset: {
      _ref: string
      _id?: string
      url: string
      originalFilename?: string
      mimeType?: string
    }
  }
  order?: number
  featured?: boolean
  available?: boolean
}

// Sub Product interface
export interface SubProduct {
  _id: string
  _type: 'subProduct'
  title: string
  slug: {
    current: string
  }
  parentProduct: Product
  shortDescription: string
  longDescription?: PortableTextBlock[]
  mainImage: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  gallery?: Array<{
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }>
  features?: string[]
  datasheet?: {
    asset: {
      _ref: string
      _id?: string
      url: string
      originalFilename?: string
      mimeType?: string
    }
  }
  modelNumber?: string
  order?: number
  featured?: boolean
  available?: boolean
}

// Brand interface
export interface Brand {
  _id: string
  _type: 'brand'
  title: string
  slug: {
    current: string
  }
  logo?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  shortDescription: string
  associatedProduct?: Product
  order?: number
  featured?: boolean
}

// Procurer/Supplier interface
export interface Procurer {
  _id: string
  _type: 'procurer'
  companyName: string
  slug: {
    current: string
  }
  logo: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
  shortDescription?: string
  website?: string
  country?: string
  order?: number
  featured?: boolean
  partnershipStartDate?: string
}

// API Response interfaces
export interface ProductsResponse {
  products: Product[]
  categories: ProductCategory[]
}

export interface ProductDetailResponse {
  product: Product
  subProducts: SubProduct[]
  relatedProducts: Product[]
}

export interface SubProductDetailResponse {
  subProduct: SubProduct
  relatedSubProducts: SubProduct[]
}

// example interfaces for page data
// export interface PageData {
//   bgImgUrl: string;
//   logoUrl: string;
//   bioData: BioData;
//   StatsInfo: StatsInfo;
//   facebook: string;
//   insta: string;
//   twitter: string;
//   linkedIn: string;
//   youtube: string;
// }

// Contact information interfaces
export interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface PhoneNumber {
  label: 'tel' | 'mobile' | 'fax'
  number: string
  isPrimary?: boolean
}

export interface EmailAddress {
  label: 'sales' | 'support' | 'general' | 'info'
  email: string
  isPrimary?: boolean
}

export interface SocialMedia {
  linkedin?: string
  facebook?: string
  instagram?: string
  youtube?: string
}

export interface Contact {
  _id: string
  name: string
  address: Address
  phones: PhoneNumber[]
  emails: EmailAddress[]
  socialMedia: SocialMedia
  businessHours?: string
}

export interface Company {
  _id: string
  title: string
  heroDescription: string
  storySubtitle?: string
  storyTitle: string
  storyDescription: string
  additionalDescription?: string
  facilityImage?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
}

export interface ConditionTerm {
  number: number
  title: string
  content: string
}

export interface ConditionsOfSale {
  _id: string
  title: string
  subtitle?: string
  description?: string
  sectionTitle?: string
  sectionSubtitle?: string
  terms: ConditionTerm[]
  backgroundImage?: {
    asset: {
      _ref: string
      url: string
    }
    alt?: string
  }
}
