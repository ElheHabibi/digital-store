import React, { useEffect, useState } from "react";
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
  }, []);

  const {handleDecreaseProductQty, handleIncreaseProductQty, handleRemoveProduct } = useShoppingCartContext();

  return (
    <div className="flex flex-row-reverse justify-between gap-4 items-center border-b p-8 my-4">
      <div className="w-20 h-20 flex items-center">
        <Link to={`/product/${id}`}>
        <img src={product?.image} alt="Product" />
        </Link>
      </div>
      <div className="flex items-center">
        <h3>{product?.price}$</h3>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline" onClick={()=> {handleDecreaseProductQty(id)}}>-</Button>
        <span>{qty}</span>
        <Button variant="outline" onClick={()=>handleIncreaseProductQty(id)}>+</Button>
      </div>
      <Button variant="danger" onClick={()=>{handleRemoveProduct(id)}}>Remove</Button>
    </div>
  );
}

export default CartItem;
