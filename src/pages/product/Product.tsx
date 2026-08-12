import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => setProduct(data.data));
  }, []);
  return (
    <>
      <Container>
        <div className="grid grid-cols-10 mt-5 gap-10 h-2000000 bg-gray-50 p-4 rounded">
          <div className="col-span-6 flex flex-col justify-between gap-4 p-4">
            <h1 className="font-bold mt-4">{product?.title}</h1>
            <p className="text-gray-700">{product?.description}</p>
            <p className="text-lg font-bold text-red-700">{product?.price}$</p>

            {getProductQty(parseInt(params.id as string)) == 0 ? (
              <Button
                variant="primary"
                onClick={() => {
                  handleIncreaseProductQty(parseInt(params.id as string));
                }}
              >
                Add To Cart
              </Button>
            ) : (
              <div className="flex justify-between p-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    handleDecreaseProductQty(parseInt(params.id as string));
                  }}
                >
                  -
                </Button>

                <span>{getProductQty(parseInt(params.id as string))}</span>

                <Button
                  variant="outline"
                  onClick={() => {
                    handleIncreaseProductQty(parseInt(params.id as string));
                  }}
                >
                  +
                </Button>

                <Button
                  className="ml-20"
                  variant="danger"
                  onClick={() => {
                    handleRemoveProduct(parseInt(params.id as string));
                  }}
                >
                  remove
                </Button>
              </div>
            )}
          </div>

          <img
            src={product?.image}
            alt="Product image"
            className="col-span-4 p-4"
          />
        </div>
      </Container>
    </>
  );
}

export default Product;
