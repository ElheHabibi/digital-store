import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-50">

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Welcome to Digital Store
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discover our amazing collection of premium products curated just for
            you. Shop with confidence and enjoy the best deals online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/store">
              <Button variant="primary" className="px-8 py-3 text-lg">
                Shop Now
              </Button>
            </Link>
            <button className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700">Premium Products</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Customer Support</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Secure Checkout</p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Fast Shipping
              </h3>
              <p className="text-gray-600 text-sm">
                Quick delivery to your doorstep with tracking
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                Competitive pricing with regular discounts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600 text-sm">
                Safe and encrypted transactions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">
                Hassle-free returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Shop?</h2>
          <p className="text-blue-100 mb-8">
            Explore our collection and find exactly what you're looking for.
          </p>
          <Link to="/store">
            <Button variant="primary" className="px-8 py-3 text-lg">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
