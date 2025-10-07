'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import FeaturedProduct from '@/components/FeaturedProduct';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <FeaturedProduct />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
