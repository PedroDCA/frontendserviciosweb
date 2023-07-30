import { getAllProductsApiUrl } from "@/routing/apiRoutes";
import Page1 from "./page1";

async function getAllProducts() {
  const response = await fetch(`http://localhost:3000${getAllProductsApiUrl}`, {
    method: 'GET',
  });
  return response.json();
}

export default async function Page() {
  const productsAPI = await getAllProducts();
  return (
    <Page1 productsAPI={productsAPI}/>
  );
}