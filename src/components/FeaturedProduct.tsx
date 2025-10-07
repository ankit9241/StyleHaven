import { CheckCircle, Truck } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedProduct() {
  return (
    <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
              Featured
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Denim Jacket</h2>
            <p className="text-2xl font-semibold text-gray-900 mb-6">$89.99</p>
            <p className="text-gray-600 mb-8">
              Our signature denim jacket combines timeless style with modern comfort. Made with premium quality denim for lasting durability.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">100% Premium Cotton</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Reinforced Stitching</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Machine Washable</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex-1">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex-1">
                View Details
              </button>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <Truck className="h-5 w-5 text-gray-400 mr-2" />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>
          
          <div className="bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full h-full relative">
              <Image
                src="/product.jpeg"
                alt="Premium Denim Jacket"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
