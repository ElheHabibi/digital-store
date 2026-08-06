import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/",
});

export async function getProducts() {
  const response = await client("/products");
  return response;
}
