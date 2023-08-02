import { getAllProductsApiUrl } from "@/routing/apiRoutes";
import Page1 from "./page1";
import { getHostName } from "@/services/urlGenerator";

async function getAllProducts() {
  const hostname = getHostName();
  console.log(hostname)
  const response = await fetch(`${hostname}${getAllProductsApiUrl}`, {
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