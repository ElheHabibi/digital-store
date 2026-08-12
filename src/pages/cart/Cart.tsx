// Cart.tsx
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/server";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      console.log("products:", result.data);
      setProducts(result.data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const product = products.find((p) => Number(p.id) === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <Container>
      <div className=" mt-10 gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      {totalPrice ? (
        <>
          <div className=" flex justify-around items-center p-4 mt-40 mb-20">
            <p>
              <span className="text-blue-700 font-bold">Total Price: </span>
              {totalPrice.toLocaleString()} $
            </p>

            <div className="py-2 px-4">
              <Button variant="primary">Buy Now!</Button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">Nothing is added!</p>
      )}
    </Container>
  );
}

export default Cart;
