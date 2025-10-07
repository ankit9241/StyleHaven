import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    rating: 4,
    category: 'T-Shirts',
    image: '/product.jpeg?product=1'
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 59.99,
    rating: 5,
    category: 'Pants',
    image: '/product.jpeg?product=2'
  },
  {
    id: 3,
    name: 'Casual Sneakers',
    price: 79.99,
    rating: 4,
    category: 'Footwear',
    image: '/product.jpeg?product=3'
  },
  {
    id: 4,
    name: 'Denim Jacket',
    price: 89.99,
    rating: 5,
    category: 'Outerwear',
    image: '/product.jpeg?product=4'
  },
  {
    id: 5,
    name: 'Cotton Hoodie',
    price: 49.99,
    rating: 4,
    category: 'Hoodies',
    image: '/product.jpeg?product=5'
  },
  {
    id: 6,
    name: 'Chino Pants',
    price: 54.99,
    rating: 4,
    category: 'Pants',
    image: '/product.jpeg?product=6'
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover our curated collection of premium clothing and accessories</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
