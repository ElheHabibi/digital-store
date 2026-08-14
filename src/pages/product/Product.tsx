import { useEffect, useState } from "react";
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
  }, [params.id]);

  const productId = Number(params.id ?? 0);
  const quantity = getProductQty(productId);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
      <Container>
        <div className="mx-auto max-w-6xl rounded-lg border border-gray-200 bg-white">
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <div className="flex items-center justify-center rounded-lg p-6 bg-gradient-to-b from-slate-100 via-white to-slate-100">
              <img
                src={product?.image}
                alt={"Product image"}
                className="h-80 w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-600">
                Product details
              </p>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {product?.title}
              </h1>

              <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-4">
                <span className="text-l text-gray-500">Price</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${product?.price}
                </span>
              </div>

              <p className="mt-6 text-base leading-7 text-gray-600">
                {product?.description}
              </p>

              {quantity === 0 ? (
                <Button
                  variant="primary"
                  className="mt-8 w-full py-3 text-base font-semibold"
                  onClick={() => {
                    handleIncreaseProductQty(productId);
                  }}
                >
                  Add To Cart
                </Button>
              ) : (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-2">
                    <Button
                      variant="outline"
                      className="px-4 py-2"
                      onClick={() => {
                        handleDecreaseProductQty(productId);
                      }}
                    >
                      -
                    </Button>

                    <span className="min-w-10 text-center text-lg font-semibold text-gray-800">
                      {quantity}
                    </span>

                    <Button
                      variant="outline"
                      className="px-4 py-2"
                      onClick={() => {
                        handleIncreaseProductQty(productId);
                      }}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    variant="danger"
                    className="sm:flex-1"
                    onClick={() => {
                      handleRemoveProduct(productId);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
