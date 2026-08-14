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
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:items-center">
        <div className="w-40 h-40">
          <Link to={`/product/${id}`}>
            <img
              src={product?.image}
              alt="Product"
              className="w-full h-full object-contain p-4 hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <div className="flex-1 min-w-0">
          <Link
            to={`/product/${id}`}
            className="hover:text-blue-600 transition-colors"
          >
            <h3 className="font-semibold text-gray-800 text-lg">
              {product?.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product?.description}
          </p>

          <div className="flex gap-8 mt-4 justify-around">
            <div>
              <p className="text-gray-500 text-xs">Price</p>
              <p className="text-lg font-bold text-blue-600">
                ${product?.price}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-xs">Total</p>
              <p className="text-lg font-bold text-gray-800">
                ${product?.price ? (product.price * qty).toLocaleString() : 0}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-between w-full md:w-auto">
          <div className="flex items-center w-full gap-2 bg-gray-100 rounded-lg p-2 justify-around">
            <Button
              variant="outline"
              onClick={() => {
                handleDecreaseProductQty(id);
              }}
              className="px-4 py-1 text-sm"
            >
              -
            </Button>
            <span className="px-3 py-1 font-semibold text-gray-800 min-w-[2rem] text-center">
              {qty}
            </span>
            <Button
              variant="outline"
              onClick={() => handleIncreaseProductQty(id)}
              className="px-4 py-1 text-sm"
            >
              +
            </Button>
          </div>

          <Button
            variant="danger"
            onClick={() => {
              handleRemoveProduct(id);
            }}
            className=" py-2 text-sm w-full"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
