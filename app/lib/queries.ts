import { groq } from "next-sanity";

// Get all product categories
export const productCategoriesQuery = groq`
  *[_type == "productCategory" && defined(slug.current)] | order(order asc, title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    image{
      asset->{
        _ref,
        url
      },
      alt
    },
    order
  }
`;

// Get all products with their categories
export const productsQuery = groq`
  *[_type == "product" && available == true && defined(slug.current)] | order(order asc, title asc) {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    category->{
      _id,
      title,
      slug
    },
    order,
    featured,
    available
  }
`;

// Get products by category
export const productsByCategoryQuery = groq`
  *[_type == "product" && available == true && category._ref == $categoryId && defined(slug.current)] | order(order asc, title asc) {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    category->{
      _id,
      title,
      slug
    },
    order,
    featured,
    available
  }
`;

// Get single product by slug with sub products
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    longDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    gallery[]{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    datasheet{
      asset->{
        _ref,
        _id,
        url,
        originalFilename,
        mimeType
      }
    },
    specifications,
    category->{
      _id,
      title,
      slug,
      description
    },
    order,
    featured,
    available
  }
`;

// Get sub products by parent product
export const subProductsByProductQuery = groq`
  *[_type == "subProduct" && available == true && parentProduct._ref == $productId && defined(slug.current)] | order(order asc, title asc) {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    modelNumber,
    parentProduct->{
      _id,
      title,
      slug
    },
    order,
    featured,
    available
  }
`;

// Get single sub product by slug
export const subProductBySlugQuery = groq`
  *[_type == "subProduct" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    longDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    gallery[]{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    datasheet{
      asset->{
        _ref,
        _id,
        url,
        originalFilename,
        mimeType
      }
    },
    specifications,
    modelNumber,
    parentProduct->{
      _id,
      title,
      slug,
      category->{
        _id,
        title,
        slug
      }
    },
    order,
    featured,
    available
  }
`;

// Get related products (same category, exclude current)
export const relatedProductsQuery = groq`
  *[_type == "product" && available == true && category._ref == $categoryId && _id != $currentId && defined(slug.current)] | order(order asc, title asc) [0...6] {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    category->{
      _id,
      title,
      slug
    },
    featured
  }
`;

// Get related sub products (same parent product, exclude current)
export const relatedSubProductsQuery = groq`
  *[_type == "subProduct" && available == true && parentProduct._ref == $parentProductId && _id != $currentId && defined(slug.current)] | order(order asc, title asc) [0...6] {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    modelNumber,
    parentProduct->{
      _id,
      title,
      slug
    },
    featured
  }
`;

// Get featured products
export const featuredProductsQuery = groq`
  *[_type == "product" && available == true && featured == true && defined(slug.current)] | order(order asc, title asc) [0...6] {
    _id,
    _type,
    title,
    slug,
    shortDescription,
    mainImage{
      asset->{
        _ref,
        url
      },
      alt
    },
    features,
    category->{
      _id,
      title,
      slug
    },
    featured
  }
`;

// Search products and sub products
export const searchProductsQuery = groq`
  {
    "products": *[_type == "product" && available == true && (title match $searchTerm || shortDescription match $searchTerm) && defined(slug.current)] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      shortDescription,
      mainImage{
        asset->{
          _ref,
          url
        },
        alt
      },
      features,
      category->{
        _id,
        title,
        slug
      }
    },
    "subProducts": *[_type == "subProduct" && available == true && (title match $searchTerm || shortDescription match $searchTerm || modelNumber match $searchTerm) && defined(slug.current)] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      shortDescription,
      mainImage{
        asset->{
          _ref,
          url
        },
        alt
      },
      features,
      modelNumber,
      parentProduct->{
        _id,
        title,
        slug
      }
    }
  }
`;

// Get contact information
export const contactQuery = groq`
  *[_type == "contact"][0]{
    _id,
    name,
    address{
      street,
      city,
      state,
      postalCode,
      country
    },
    phones[]{
      label,
      number,
      isPrimary
    },
    emails[]{
      label,
      email,
      isPrimary
    },
    socialMedia{
      linkedin,
      facebook,
      instagram,
      youtube
    },
    businessHours
  }
`;

// example query to fetch page data
// export const pageDataQuery = groq`
//   *[_type == "pageData"][0]{
//     "bgImgUrl": bgImg->mainImage.asset->url,
//     "logoUrl": logo->mainImage.asset->url,
//     bioData-> {
//       title,
//       email,
//       phone,
//       address
//     },
//     StatsInfo-> {
//       members,
//       professionals,
//       countries,
//       institutes
//     },
//     facebook,
//     insta,
//     twitter,
//     linkedIn,
//     youtube,
//   }
// `;