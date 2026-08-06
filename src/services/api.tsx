import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

export async function getProducts() {
  const response = await client("/products");
  return response;
}

export async function getProduct(id: string | number){
  const response = await client(`products/${id}`);
  return response
}