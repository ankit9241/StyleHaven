'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-800">
              StyleHaven
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</Link>
            <Link href="#featured" className="text-gray-600 hover:text-gray-900 transition-colors">Featured</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-100 text-blue-800 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="#featured" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured
            </Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Link 
                href="#" 
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-gray-900 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-blue-100 text-blue-800 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
