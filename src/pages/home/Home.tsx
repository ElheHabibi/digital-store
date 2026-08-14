import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-50">
      <div className="min-h-screen flex items-center justify-center px-3 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Welcome to Digital Store
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            Discover our amazing collection of premium products curated just for
            you. Shop with confidence and enjoy the best deals online.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <Link to="/store" className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                Shop Now
              </Button>
            </Link>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                1000+
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Premium Products
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Customer Support
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Secure Checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Fast Shipping
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Quick delivery to your doorstep with tracking
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Best Prices
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Competitive pricing with regular discounts
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Secure Payment
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Safe and encrypted transactions
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">↩️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Easy Returns
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Hassle-free returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Shop?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            Explore our collection and find exactly what you're looking for.
          </p>
          <Link to="/store" className="inline-block w-full sm:w-auto">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg"
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
