import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts() {
  const response = await client("/products");
  return response;
}

export async function getProduct(id: string | number){
  const response = await client(`products/${id}`);
  return response
}

export async function login(username: string, password: string) {
  const {data} = await client({
    method: "POST",
    url: "/login",
    data: {
      username,
      password,
    }
  });

  return data;
}