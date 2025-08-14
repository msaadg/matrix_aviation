# Matrix Aviation Fueling

A modern, full-stack web application for Matrix Aviation Fueling - a leading provider of aviation fueling equipment and solutions. The website showcases products, company information, and provides a comprehensive catalog of aviation fueling technologies.

## 🌐 Live Deployment

- **Production**: [matrixaviationfueling.com](http://matrixaviationfueling.com/)
- **Vercel**: [matrix-aviation.vercel.app](https://matrix-aviation.vercel.app/)

## 🚀 Technology Stack

### Frontend
- **Next.js 15.3.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Next Themes** - Theme management

### Backend & CMS
- **Sanity CMS 3.99.0** - Headless content management system
- **Next Sanity** - Sanity integration for Next.js
- **GROQ** - Query language for Sanity

### UI Components
- **shadcn/ui** - Modern component library built on Radix UI
- **Tailwind CSS** - Custom styling
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging

### Email & Forms
- **Nodemailer** - Email sending functionality
- **React Hook Form** - Form state management
- **Input OTP** - One-time password input

### Additional Features
- **Embla Carousel** - Touch-friendly carousel component
- **React Day Picker** - Date picker component
- **Sonner** - Toast notifications
- **React Resizable Panels** - Resizable layout panels

## 📁 Project Structure

```
matrix_aviation/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form endpoint
│   │   └── download/             # File download endpoint
│   ├── components/               # React components
│   │   ├── layout/               # Layout components (Header, Footer)
│   │   └── ui/                   # UI components (shadcn/ui)
│   ├── context/                  # React context providers
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utility functions and services
│   ├── products/                 # Product catalog pages
│   ├── company/                  # Company information
│   ├── contact/                  # Contact page
│   ├── brands/                   # Brand showcase
│   ├── privacy-policy/           # Privacy policy
│   ├── conditions-of-sale/       # Terms and conditions
│   └── studio/                   # Sanity Studio integration
├── sanity/                       # Sanity CMS configuration
│   ├── schemaTypes/              # Content schemas
│   │   ├── productType.ts        # Product schema
│   │   ├── brandType.ts          # Brand schema
│   │   ├── companyType.ts        # Company info schema
│   │   └── ...                   # Other content types
│   └── lib/                      # Sanity utilities
├── scripts/                      # Data seeding scripts
└── public/                       # Static assets
```

## 🎯 Key Features

### Content Management
- **Sanity Studio Integration**: Built-in CMS accessible at `/studio`
- **Dynamic Content**: All content managed through Sanity CMS
- **Content Types**:
  - Products and Product Categories
  - Sub-products and specifications
  - Company information
  - Brand partnerships
  - Contact information
  - Conditions of sale
  - Privacy policies

### Product Catalog
- **Hierarchical Product Structure**: Categories → Products → Sub-products
- **Product Search & Filtering**: Advanced search functionality
- **Featured Products**: Highlighted product showcase
- **Brand Integration**: Partner brand displays
- **Detailed Specifications**: Comprehensive product information

### User Experience
- **Responsive Design**: Mobile-first approach
- **Dark/Light Theme**: Theme switching capability
- **Loading States**: Skeleton loading for better UX
- **Error Handling**: Graceful error management
- **SEO Optimized**: Meta tags and structured data

### Communication
- **Contact Forms**: Multiple contact points
- **Email Integration**: Automated email notifications
- **Download Center**: Product documentation and files
- **Social Media Integration**: Company social presence

## 🛠️ API Endpoints

### `/api/contact`
- **Method**: POST
- **Purpose**: Handle contact form submissions
- **Features**: 
  - Email validation
  - Automated email notifications
  - Error handling

### `/api/download`
- **Method**: GET/POST
- **Purpose**: Serve downloadable files and documents
- **Features**:
  - File serving
  - Download tracking

## 📊 Content Schemas

The application uses Sanity CMS with the following content types:

- **Product Categories**: Organize products into categories
- **Products**: Main product information and images
- **Sub-products**: Detailed product variants and specifications
- **Brands**: Partner brand information
- **Company**: Company details and history
- **Contact**: Contact information and office details
- **Conditions of Sale**: Legal terms and conditions
- **Procurers**: Featured client organizations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msaadg/matrix_aviation.git
   cd matrix_aviation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-07-26
   
   # Email Configuration (for contact forms)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Access the application**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Data Management Scripts
- `scripts/seed-products.ts` - Seed product data
- `scripts/seed-brands.ts` - Seed brand data
- `scripts/seed-company.ts` - Seed company information
- `scripts/delete-all-data.ts` - Clean database

## 🎨 Styling

The project uses a modern design system built with:

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Theme-aware color system
- **shadcn/ui**: Consistent component design
- **Responsive Design**: Mobile-first approach
- **Dark Mode Support**: Automatic theme switching

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1400px+

## 🔒 Security Features

- **Form Validation**: Client and server-side validation
- **Environment Variables**: Secure configuration management
- **Email Security**: Protected email endpoints
- **Content Security**: Sanity CMS security features

## 🚀 Deployment

The application is configured for seamless deployment on Vercel:

1. **Automatic Deployments**: Connected to Git repository
2. **Environment Variables**: Configured in Vercel dashboard
3. **Custom Domain**: Mapped to matrixaviationfueling.com
4. **Performance Optimization**: Vercel Edge Network

## 📈 Performance

- **Next.js App Router**: Optimized routing and rendering
- **Image Optimization**: Automatic image compression and resizing
- **Code Splitting**: Automatic bundle optimization
- **Caching**: Strategic caching for better performance
- **CDN**: Global content delivery via Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Matrix Aviation Fueling.

## 📞 Support

For technical support or questions about this project, please contact the development team or visit [matrixaviationfueling.com](http://matrixaviationfueling.com/).

---

Built with ❤️ for Matrix Aviation Fueling
