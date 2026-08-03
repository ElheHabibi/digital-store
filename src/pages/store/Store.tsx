import React from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="p-4 bg-gray-200">
      <Container>
        <h1 className="text-right mt-5 mb-4">صفحه محصولات</h1>
        <div className="grid grid-cols-4 gap-4">
          <Link to="/product/1">
            <ProductItem />
          </Link>
          <Link to="/product/2">
            <ProductItem />
          </Link>
          <Link to="/product/3">
            <ProductItem />
          </Link>
          <Link to="/product/4">
            <ProductItem />
          </Link>
          <Link to="/product/5">
            <ProductItem />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Store;
