import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            Summer Collection 2025
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Elevate Your Style with Our Premium Collection
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover the perfect blend of comfort and style with our carefully curated selection of clothing and accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              View Collection
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/hero-image.jpeg"
              alt="Fashion Collection"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
