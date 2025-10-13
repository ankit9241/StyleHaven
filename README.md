# PixelConquest - Modern E-commerce Platform

PixelConquest is a modern, responsive e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. It's designed to showcase fashion products with a clean, intuitive user interface and smooth interactive elements. Perfect for anyone looking to launch a stylish online store quickly.

## 🚀 Features

- **Responsive Design**: Fully adapts to mobile, tablet, and desktop screens
- **Modern UI**: Clean, professional design powered by Tailwind CSS
- **Performance Optimized**: Built with Next.js for fast loading and SEO-friendly pages
- **Product Showcase**: Grid layout, featured sections, and product highlights
- **Interactive Elements**: Smooth hover effects, transitions, and animations
- **Easy Customization**: Quickly change branding, products, and styling

## 🛠️ Tech Stack

- **Frontend**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React Icons
- **Type Safety**: TypeScript
- **Build Tool**: Vite (via Next.js)

## 📦 Getting Started

### Prerequisites
- Node.js v18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankit9241/PixelConquest.git
   cd PixelConquest
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### 1️⃣ Changing Branding
- **Site title**: Update in `src/app/layout.tsx`
- **Navbar brand name/logo**: Update in `src/components/Navbar.tsx`
- **Footer content/logo**: Update in `src/components/Footer.tsx`

> ✅ **Tip**: Replace the logo image in `public/` folder to match your brand.

### 2️⃣ Adding / Updating Products
- Add product images to the `public/` folder
- Update product data in:
  - `src/components/ProductGrid.tsx`
  - `src/components/FeaturedProducts.tsx`
- Optional: Create new product categories by adding new components

> 💡 **Tip**: Keep image sizes consistent for a clean grid layout.

### 3️⃣ Styling & Theming
Tailwind CSS is fully integrated. Modify theme colors in `tailwind.config.js`:

```js
// Example theme configuration
theme: {
  extend: {
    colors: {
      primary: '#F59E0B', // Gold
      secondary: '#DC2626', // Red
      accent: '#EA580C', // Orange
    }
  }
}
```

#### Diwali Theme Ideas:
- **Primary/Secondary colors**: Use warm, festive colors like orange, gold, red, and maroon
- **Backgrounds**: Replace white/neutral backgrounds with soft festive gradients
- **Text**: Use contrasting bright colors for headings and highlights

#### Section-specific Styling:
- **Hero Section**: Add festive banners, lights, or rangoli SVGs
- **Product Grid**: Use colorful borders or shadow effects
- **Featured Products**: Highlight special Diwali offers with glowing effects
- **Footer**: Use themed colors and decorative icons

#### Animation Effects:
```html
<button className="transition-all hover:scale-105 animate-pulse">
  Shop Now
</button>
```

> 🎨 **Tip**: Use `@apply` in CSS files to reuse Tailwind classes for multiple components.

### 4️⃣ Layout & Pages
- **Home Page**: `src/app/page.tsx` → Update all sections (hero, product grid, featured products, testimonials, footer)
- **Product Page**: Create `[id].tsx` under `src/app/products/`
- **Navbar & Footer**: Reusable across all pages; theme colors here too

> 🔑 **Tip**: For a complete Diwali feel, replace images, background colors, and icons in every section.

### 5️⃣ Diwali Theme Quick Checklist
- [ ] Replace hero banner with Diwali-themed image
- [ ] Update primary/secondary colors in Tailwind config
- [ ] Add festive decorations (lights, diyas, rangoli SVGs)
- [ ] Update product highlight borders/shadows
- [ ] Update CTA buttons to match theme
- [ ] Add festive animations and transitions

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Next.js projects and deploys instantly

### Other platforms
- Netlify
- AWS
- Any static hosting that supports Next.js

> 🔑 **Tip**: Optimize images and animations for smooth performance in production.

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
