# UA Worldwide Inspired E-Commerce Site

A modern, responsive e-commerce frontend built with React and powered by the DummyJSON API, inspired by UA Worldwide's clean and premium design aesthetic.

## 🚀 Live Demo

- **Deployed URL**: [Your Vercel URL here]
- **Repository**: [Your GitHub repo URL here]

## ✨ Features

### Core Functionality
- **Home Page**: Hero section with featured products and categories
- **Product Catalog**: Grid/list view with comprehensive filtering and sorting
- **Product Details**: Modal view with image gallery and detailed information
- **Shopping Cart**: Persistent cart with add/remove/quantity management
- **Search**: Real-time product search with results modal
- **Responsive Design**: Mobile-first approach with seamless desktop experience

### Advanced Features
- **Category Filtering**: Filter products by categories from DummyJSON
- **Price Range Filtering**: Adjustable price range slider
- **Sorting Options**: Price (low/high), rating, name
- **Cart Persistence**: Cart data saved to localStorage
- **Discount Display**: Shows original and discounted prices
- **Stock Management**: Real-time stock display and availability
- **Search with Debouncing**: Optimized search performance

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: TailwindCSS 4.1.13
- **Routing**: React Router DOM 7.9.2
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **API**: DummyJSON (https://dummyjson.com)
- **Deployment**: Vercel

## 📦 Project Structure

```
src/
├── components/
│   ├── cart/
│   │   └── CartDrawer.jsx       # Shopping cart sidebar
│   ├── common/
│   │   ├── Header.jsx           # Navigation header
│   │   └── SearchModal.jsx      # Search functionality
│   └── product/
│       ├── ProductCard.jsx      # Product grid item
│       └── ProductModal.jsx     # Product detail modal
├── context/
│   └── CartContext.js           # Global cart state management
├── pages/
│   ├── Home.jsx                 # Landing page
│   └── Products.jsx             # Product catalog page
├── services/
│   └── api.js                   # DummyJSON API integration
└── styles/
    └── index.css                # Global styles and utilities
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd app-dev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🎨 Design Philosophy

### UA Worldwide Inspiration
- **Minimalist Aesthetic**: Clean layouts with ample whitespace
- **Premium Feel**: High-quality product imagery and sophisticated typography
- **Bold Typography**: Strong headings and clear hierarchy
- **Monochromatic Base**: Black, white, and gray color scheme with strategic accent colors
- **Mobile-First**: Responsive design that works seamlessly across devices

### Color Palette
- **Primary**: `#000000` (Black)
- **Secondary**: `#FFFFFF` (White)
- **Accent**: `#EF4444` (Red for discounts/alerts)
- **Gray Scale**: `#F9FAFB`, `#E5E7EB`, `#6B7280`, `#374151`

## 🔧 Key Implementation Details

### State Management
- **Context API**: Global cart state with useContext and useReducer
- **localStorage**: Persistent cart data across browser sessions
- **Local Component State**: UI states and form data

### API Integration
- **DummyJSON API**: Complete product data including images, prices, ratings
- **Error Handling**: Graceful fallbacks for network issues
- **Loading States**: Skeleton screens and spinners for better UX
- **Data Caching**: Smart API calls to minimize requests

### Performance Optimizations
- **Lazy Loading**: Images loaded on demand
- **Debounced Search**: Prevents excessive API calls
- **Efficient Re-renders**: Optimized React component updates
- **Code Splitting**: Modular component architecture

### Responsive Design
- **Mobile-First**: Designed for mobile screens first
- **Breakpoint Strategy**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-Friendly**: Appropriate touch targets and gestures
- **Cross-Browser**: Tested across modern browsers

## 📱 User Experience Features

### Navigation
- **Sticky Header**: Always accessible navigation
- **Mobile Menu**: Collapsible hamburger menu
- **Breadcrumbs**: Clear page hierarchy
- **Search Integration**: Prominent search functionality

### Product Discovery
- **Visual Grid**: Image-focused product display
- **Quick Actions**: Add to cart without leaving catalog
- **Detailed Views**: Rich product information in modals
- **Category Navigation**: Easy browsing by product type

### Shopping Experience
- **Cart Persistence**: Items saved across sessions
- **Real-time Updates**: Instant cart count and total updates
- **Stock Awareness**: Clear stock status display
- **Price Transparency**: Original and discounted prices shown

## 🚀 Deployment Guide

### Vercel Deployment

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect React/Vite

2. **Build Configuration**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   - No environment variables needed (DummyJSON is public)

4. **Deploy**
   - Every push to main branch auto-deploys
   - Preview deployments for pull requests

## 🔄 Git Workflow

### Commit Convention
```bash
git commit -m "feat: add product filtering functionality"
git commit -m "fix: resolve cart persistence issue"
git commit -m "style: improve mobile responsive design"
git commit -m "docs: update README with deployment instructions"
```

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Individual feature development

## 🐛 Common Issues & Solutions

### Build Issues
- **Tailwind Classes**: Ensure classes are recognized by Tailwind compiler
- **Import Paths**: Use relative paths consistently
- **API Calls**: Handle network errors gracefully

### Performance
- **Image Loading**: Implement lazy loading for better performance
- **Bundle Size**: Code splitting for larger applications
- **API Limits**: Implement caching for repeated requests

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] User authentication and profiles
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering (brand, rating, price)
- [ ] Product comparison
- [ ] Recently viewed products

### Technical Improvements
- [ ] Progressive Web App (PWA)
- [ ] Server-side rendering (Next.js migration)
- [ ] Advanced caching strategies
- [ ] Image optimization
- [ ] Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Credits

- **Design Inspiration**: [UA Worldwide](https://uaworldwide.com)
- **API**: [DummyJSON](https://dummyjson.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

---

Built with ❤️ using React and modern web technologies.
