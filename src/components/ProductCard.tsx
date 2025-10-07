import { Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, rating, image, category }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        <div className="w-full h-full">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
            Quick View
          </button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-500">{category}</span>
        <h3 className="font-medium text-gray-900 mt-1">{name}</h3>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold text-gray-900">${price.toFixed(2)}</span>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
