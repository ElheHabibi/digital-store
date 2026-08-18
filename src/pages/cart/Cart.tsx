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
      setProducts(result.data);
    });
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const product = products.find((p) => Number(p.id) === item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <div className="py-8">
      <Container>
        <p className="text-xs tracking-[0.15em] mb-1 text-foreground">
          *** YOUR CART ***
        </p>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Cart
        </h1>

        {cartItems.length > 0 ? (
          <>
            <div className="flex flex-col gap-3">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <div className="border-t border-dashed border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm">
                <span className="text-muted">TOTAL:  </span>
                <span className="text-accent text-lg font-bold">
                  {totalPrice.toLocaleString()}$
                </span>
              </p>

              <Button variant="primary">Buy Now!</Button>
            </div>
          </>
        ) : (
          <p className="text-center text-muted py-16">
            Your cart is empty
          </p>
        )}
      </Container>
    </div>
  );
}

export default Cart;