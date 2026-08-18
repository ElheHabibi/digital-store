import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
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
    <div className="bg-background py-8">
      <Container>
        <p className="text-xs tracking-[0.15em] text-accent mb-1">
          *** ALL ITEMS ***
        </p>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Store
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => {
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <ProductItem {...product} />
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Store;