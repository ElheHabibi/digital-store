import React, { useEffect, useState } from "react";
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
    <div className="p-4 bg-gray-200">
      <Container>
        <h1 className="text-right mt-5 mb-4">صفحه محصولات</h1>
        <div className="grid grid-cols-4 gap-4">

          {
            products.map((product)=>{
              return (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <ProductItem {...product}/>
                </Link>
              );
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default Store;
