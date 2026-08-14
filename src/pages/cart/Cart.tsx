import { useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result.data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const product = products.find((p) => Number(p.id) === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="font-bold text-blue-600 md:text-4xl uppercase tracking-[0.2em]">
            shopping cart
          </h1>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Review your selected items and proceed to checkout.
          </p>
        </div>

        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className="rounded-lg shadow-md p-6 sticky bottom-0 bg-blue-600">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="flex gap-4 items-center">
                    <span className="text-white font-bold">
                      Total Price: 
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {totalPrice.toLocaleString()} $
                    </span>
                </div>

                <div className="px-8 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <button>Buy Now!</button>
                </div>

              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-lg text-gray-600">Your cart is empty</p>
            <p className="text-sm text-gray-500 mt-2">
              Start adding items from the store to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
