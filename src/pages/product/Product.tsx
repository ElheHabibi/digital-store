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

  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-8 bg-surface border border-border rounded p-4 sm:p-6">
          <div className="flex-1 flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.15em] text-accent mb-2">
                *** ITEM DETAIL ***
              </p>
              <h1 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                {product?.title}
              </h1>
              <p className="text-sm text-muted mb-4">{product?.description}</p>
              <p className="text-xl font-bold text-accent">{product?.price}$</p>
            </div>

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
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    handleDecreaseProductQty(parseInt(params.id as string));
                  }}
                >
                  -
                </Button>

                <span className="text-foreground w-6 text-center">
                  {getProductQty(parseInt(params.id as string))}
                </span>

                <Button
                  variant="outline"
                  onClick={() => {
                    handleIncreaseProductQty(parseInt(params.id as string));
                  }}
                >
                  +
                </Button>

                <Button
                  variant="danger"
                  onClick={() => {
                    handleRemoveProduct(parseInt(params.id as string));
                  }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>

          <div className="w-full md:w-2/5 bg-gradient-to-b from-foreground to-muted rounded p-6 flex items-center justify-center">
            <img
              src={product?.image}
              alt={product?.title}
              className="max-h-64 sm:max-h-80 object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
