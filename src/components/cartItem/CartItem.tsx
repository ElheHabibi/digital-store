import { useEffect, useState } from "react";
import Button from "../button/Button";
import type { IProduct } from "../../types/server";
import { getProduct } from "../../services/api";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(id).then((result) => {
      setProduct(result.data);
    });
  }, [id]);

  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border bg-surface rounded p-3 sm:p-4">
      <Link
        to={`/product/${id}`}
        className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-gradient-to-b from-foreground to-muted rounded p-1.5 flex items-center justify-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm text-foreground overflow-hidden text-ellipsis whitespace-nowrap">
            {product?.title}
          </h3>

          <p className="text-sm text-accent">
            {product?.price}$
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-between sm:justify-end gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => handleDecreaseProductQty(id)}
          >
            -
          </Button>

          <span className="text-foreground w-5 text-center">
            {qty}
          </span>

          <Button
            variant="outline"
            onClick={() => handleIncreaseProductQty(id)}
          >
            +
          </Button>
        </div>

        <Button
          variant="danger"
          onClick={() => handleRemoveProduct(id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;