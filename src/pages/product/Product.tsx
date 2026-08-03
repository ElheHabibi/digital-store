import React from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/iphone.webp";
import Container from "../../components/container/Container";

function Product() {
  const params = useParams();
  return (
    <>
      <Container>
        <p>Product ID: {params.id}</p>

        <div className="grid grid-cols-10 mt-5 gap-3 h-2000000">      
          <div className="col-span-6 flex flex-col justify-between">
            <h1 className="font-bold text-right mt-4">نام محصول</h1>
            <p className="text-gray-500 text-right">
              توضیحات محصول: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quia aliquam delectus voluptates non. Incidunt in fuga porro
              temporibus ab, ipsum recusandae hic debitis, fugit molestias minus
              harum ratione officiis tenetur laborum reprehenderit eos
              voluptates obcaecati esse nisi, a magnam. Suscipit.
            </p>
            <p className="text-lg font-bold text-right text-red-700">قیمت: 300,000000 تومان</p>
          </div>

          <img src={image} alt="" className="col-span-4" />
        </div>
      </Container>
    </>
  );
}

export default Product;
