import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    getProduct(params.id as string).then((data) => setProduct(data.data));
  }, []);
  return (
    <>
      <Container>
        <div className="grid grid-cols-10 mt-5 gap-10 h-2000000 bg-gray-50 p-4 rounded">
          <div className="col-span-6 flex flex-col justify-between gap-4">
            <h1 className="font-bold mt-4">{product?.title}</h1>
            <p className="text-gray-500">
              {product?.description}
            </p>
            <p className="text-lg font-bold text-red-700">
              {product?.price}
            </p>

            <Button variant="primary"
              onClick={() => {
                alert("Added!");
              }}
            >
              Add To Cart
            </Button>
          </div>

          <img src={product?.image} alt="Product image" className="col-span-4 p-4" />
        </div>
      </Container>
    </>
  );
}

export default Product;