import React from "react";
import Button from "../button/Button";
import image from "../../assets/iphone.webp";

function CartItem() {
  return (
    <div className="flex flex-row-reverse justify-between gap-4 items-center border-b py-4">
      <div className="w-20 h-20">
        <img src={image} alt="Product" />
      </div>
      <div>
        <h3>نام محصول</h3>
        <p>قیمت: 300,000,000</p>
      </div>
      <div className="flex gap-4">
        <Button>-</Button>
        <span>تعداد</span>
        <Button>+</Button>
      </div>
      <Button>حذف</Button>
    </div>
  );
}

export default CartItem;