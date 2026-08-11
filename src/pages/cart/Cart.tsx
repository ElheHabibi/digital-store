import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {

  const {cartItems} = useShoppingCartContext()

  return (
    <Container>
      <div className=" mt-10 gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>


      <div className=" flex justify-between items-center flex-row-reverse bg-gray-100 rounded p-4 mt-20 mb-20">

      <div className="flex flex-col gap-4 text-right">
        <p>قیمت کل: 500000 تومان</p>
        <p>تخفیف: 100000 تومان</p>
        <p>قیمت نهایی: 400000 تومان</p>

      </div>
      <div className="py-2 px-4">
        <Button variant="primary">
          ثبت سفارش
        </Button>
        </div>        

      </div>
    </Container>
  );
}

export default Cart;