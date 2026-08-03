import React from "react";
import image from "../../assets/iphone.webp"

function ProductItem() {
  return (
    <div className="shadow border rounded bg-white">
      <img src={image} alt="" className="p-4"/>
      <div className="flex flex-row-reverse justify-between p-4">
        <h2>نام محصول</h2>
        <p>100$</p>
      </div>

      <div className="p-4">
        <p className="text-gray-500 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam dolore esse cumque deserunt sint quidem voluptatem aut exercitationem autem excepturi, natus itaque accusantium porro animi odit possimus libero corrupti!
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
