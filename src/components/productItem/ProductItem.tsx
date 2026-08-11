import React from "react";
import type { Products } from "../../types/server";

type TProductItem = Products;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow border rounded bg-white h-full flex flex-col justify-between">
      <div>
        <img src={image} alt="" className="p-4" />
      </div>

      <div className="flex flex-col justify-between p-4 gap-4">
        <h2 className="line-clamp-1 overflow-clip">{title} </h2>
        <p className="text-pink-600">{price}$</p>
        <p className="text-gray-500 line-clamp-2 overflow-clip">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
