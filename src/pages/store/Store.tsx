import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">

            <h1 className="font-bold text-blue-600 md:text-4x uppercase tracking-[0.2em]">
              all products
            </h1>

            
 
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Discover the products that fit your lifestyle and needs.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group transition-transform duration-200 hover:-translate-y-1"
              >
                <ProductItem {...product} />
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Store;
