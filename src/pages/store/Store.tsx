import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result.data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
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

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-60 gap-3">
            <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
            <p className="text-xs text-muted tracking-[0.1em]">
              LOADING ITEMS...
            </p>
          </div>
        ) : hasError ? (
          <div className="flex flex-col items-center justify-center py-60 gap-2">
            <p className="text-sm text-foreground">Couldn't load products</p>
            <p className="text-sm text-muted">Check your connection and try again</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => {
              return (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <ProductItem {...product} />
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Store;
