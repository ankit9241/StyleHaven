export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your wardrobe?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust us for their fashion needs. Sign up today and get 15% off your first order!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
