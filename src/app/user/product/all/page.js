import { getAllProductsApiUrl } from "@/routing/apiRoutes";
import Page1 from "./page1";
import { getHostName } from "@/services/urlGenerator";

async function getAllProducts() {
  const hostname = getHostName();
  const response = [];
  return response;
}

export default async function Page() {
  const productsAPI = await getAllProducts();
  return (
    <Page1 productsAPI={productsAPI}/>
  );
}