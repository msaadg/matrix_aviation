# Matrix Aviation - Sanity CMS Integration Implementation

This document outlines the complete implementation of Sanity CMS integration for Matrix Aviation's product catalog, replacing hardcoded data with dynamic content management.

## 🚀 Overview

The implementation provides:
- Dynamic product categories and products from Sanity CMS
- Hierarchical product structure (Categories → Products → Sub-Products)
- Image management and optimization
- File downloads (datasheets, PDFs)
- SEO-friendly URLs and metadata
- Full CRUD operations through Sanity Studio

## 📁 Project Structure

```
app/
├── products/
│   ├── page.tsx                           # Main products listing
│   ├── [slug-sub-products]/
│   │   ├── page.tsx                       # Sub-products listing
│   │   └── [slug-sub-product]/
│   │       └── page.tsx                   # Individual sub-product detail
├── lib/
│   ├── types.ts                           # TypeScript interfaces
│   ├── queries.ts                         # GROQ queries
│   ├── sanity-service.ts                  # Sanity client functions
│   └── product-utils.ts                   # Utility functions
sanity/
├── schemaTypes/
│   ├── productCategoryType.ts             # Category schema
│   ├── productType.ts                     # Product schema
│   └── subProductType.ts                  # Sub-product schema
scripts/
└── seed-products.ts                       # Data seeding script
```

## 🗃️ Data Structure

### Product Categories
17 main categories covering all aviation fuel handling equipment:
1. Quality Control & Testing
2. Closed Circuit Sampling & Product Recovery
3. Deadman Systems & Accessories
4. Static Bonding & Lanyard Equipment
5. Pressure Fuelling Nozzles
6. Hydrant Intake Couplers
7. Hydrant Equipment
8. Aviation & Industrial Ground Units & Connectors
9. Flow Metering
10. Filtration Equipment & Accessories
11. Pressure Control Valves
12. Hoses & Accessories
13. Overwing Fuelling Equipment
14. Additive Injection
15. Valves & Pipeline Components
16. Bottom Loading Systems
17. Miscellaneous

### Products & Sub-Products
Each category contains multiple sub-products with:
- Model numbers (e.g., 64250 Series, 60427 Series)
- Technical specifications
- Feature lists
- Detailed descriptions
- Product images and galleries
- PDF datasheets

## 🛠️ Implementation Details

### 1. Sanity Schema Types

#### Product Category Schema
```typescript
{
  name: 'productCategory',
  title: 'Product Category',
  fields: [
    'title',           // Category name
    'slug',            // URL-friendly identifier
    'description',     // Category description
    'image',           // Category image
    'order'            // Display order
  ]
}
```

#### Product Schema
```typescript
{
  name: 'product',
  title: 'Product',
  fields: [
    'title',           // Product name
    'slug',            // URL slug
    'category',        // Reference to category
    'shortDescription',// Brief description
    'longDescription', // Detailed description (Portable Text)
    'mainImage',       // Primary product image
    'gallery',         // Additional images
    'features',        // Key features array
    'datasheet',       // PDF file
    'specifications',  // Technical specs
    'order',           // Display order
    'featured',        // Featured flag
    'available'        // Availability flag
  ]
}
```

#### Sub-Product Schema
```typescript
{
  name: 'subProduct',
  title: 'Sub Product',
  fields: [
    'title',           // Sub-product name
    'slug',            // URL slug
    'parentProduct',   // Reference to parent product
    'shortDescription',// Brief description
    'longDescription', // Detailed description
    'mainImage',       // Primary image
    'gallery',         // Additional images
    'features',        // Key features
    'datasheet',       // PDF file
    'specifications',  // Technical specs
    'modelNumber',     // Model/part number
    'order',           // Display order
    'featured',        // Featured flag
    'available'        // Availability flag
  ]
}
```

### 2. Frontend Implementation

#### URL Structure
```
/products                                    # All products
/products/[category-slug]                    # Products in category
/products/[product-slug]/[sub-product-slug]  # Individual sub-product
```

#### Key Features Implemented

**Products Listing Page (`/products`)**
- Dynamic category filtering
- Search functionality
- Product cards with images and features
- Responsive grid layout
- Loading states and error handling

**Sub-Products Listing Page (`/products/[slug-sub-products]`)**
- Parent product information display
- Sub-products grid with search
- Model numbers and specifications
- Quick datasheet downloads

**Sub-Product Detail Page (`/products/[slug-sub-products]/[slug-sub-product]`)**
- Image gallery with thumbnails
- Detailed product information
- Technical specifications table
- Related products section
- Contact and quote request buttons
- Breadcrumb navigation

### 3. Data Management Functions

#### Sanity Service Functions
```typescript
// Get all products with categories
getProductsWithCategories(): Promise<ProductsResponse>

// Get product by slug with sub-products
getProductBySlug(slug: string): Promise<ProductDetailResponse>

// Get sub-product by slug with related products
getSubProductBySlug(slug: string): Promise<SubProductDetailResponse>

// Search products and sub-products
searchProducts(searchTerm: string): Promise<SearchResponse>
```

#### Utility Functions
```typescript
// Image optimization
getImageUrl(image: any, width?: number, height?: number): string

// File downloads
getFileUrl(file: any): string | null

// Product filtering and search
filterProducts(products: Product[], searchTerm: string): Product[]

// Breadcrumb generation
generateProductBreadcrumb(product: Product): Breadcrumb[]
generateSubProductBreadcrumb(subProduct: SubProduct): Breadcrumb[]
```

## 🔧 Setup Instructions

### 1. Environment Variables
Add to your `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_with_write_permissions
```

### 2. Install Dependencies
```bash
npm install tsx
```

### 3. Seed Initial Data
```bash
npm run seed-products
```

This will create:
- 17 product categories
- 17 main products (one per category)
- 100+ sub-products with model numbers and specifications

### 4. Configure Sanity Studio
Access your Sanity Studio at `/studio` to:
- Add product images
- Upload datasheets (PDF files)
- Edit product descriptions
- Manage inventory and availability
- Set featured products

## 📊 Content Management

### Adding New Products

1. **Create Product Category** (if needed)
   - Navigate to Sanity Studio
   - Add new Product Category
   - Set title, slug, description, and order

2. **Create Main Product**
   - Add new Product document
   - Link to appropriate category
   - Add images, features, and descriptions
   - Upload datasheet if available

3. **Create Sub-Products**
   - Add Sub Product documents
   - Link to parent product
   - Set model numbers and specifications
   - Add detailed images and documentation

### Content Guidelines

**Images:**
- Main images: 800x600px minimum
- Gallery images: 600x400px minimum
- Use high-quality product photography
- Include alt text for accessibility

**Descriptions:**
- Short descriptions: 150-200 characters for listings
- Long descriptions: Detailed technical information
- Use Portable Text for rich formatting

**Model Numbers:**
- Follow existing pattern (e.g., 64250, 60427)
- Include series information where applicable
- Use consistent naming conventions

**Specifications:**
- Include material information
- Operating temperature ranges
- Pressure ratings
- Connection types
- Compliance certifications

## 🚀 Deployment Notes

### Build Considerations
- Images are automatically optimized via Sanity CDN
- Static generation for better performance
- ISR (Incremental Static Regeneration) for dynamic updates

### Performance Optimizations
- Image lazy loading and optimization
- Client-side caching of API responses
- Efficient GROQ queries with selective field fetching
- Proper loading states for better UX

### SEO Implementation
- Dynamic meta tags based on product data
- Structured data (JSON-LD) for products
- Semantic HTML structure
- Optimized URLs with product names

## 🔒 Security & Best Practices

### API Security
- Read-only client for frontend
- Write permissions only for authenticated users
- Environment variable protection for API tokens

### Data Validation
- Schema validation in Sanity
- TypeScript interfaces for type safety
- Error handling for API failures
- Graceful fallbacks for missing data

### Content Strategy
- Regular backups of Sanity dataset
- Version control for schema changes
- Content approval workflows
- Image optimization and CDN usage

## 📞 Support & Maintenance

### Monitoring
- Track API response times
- Monitor search functionality
- Check for broken images or links
- Validate datasheet downloads

### Regular Updates
- Update product information
- Add new products and categories
- Refresh product images
- Update technical specifications

### Content Maintenance
- Review and update descriptions
- Check for outdated model numbers
- Verify contact information
- Update compliance information

---

## 🎯 Next Steps

1. **Install dependencies**: `npm install tsx`
2. **Set up environment variables** in `.env.local`
3. **Run the seeding script**: `npm run seed-products`
4. **Access Sanity Studio** at `/studio` to add images and refine content
5. **Test all functionality** thoroughly
6. **Deploy to production** with proper environment variables

This implementation provides a robust, scalable solution for managing Matrix Aviation's extensive product catalog with professional CMS capabilities.
