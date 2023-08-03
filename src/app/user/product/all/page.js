import Page1 from "./page1";
import { GET } from "@/app/api/product/all/route";

async function getAllProducts() {
  const response = await GET();
  return response.json();
}

export default async function Page() {
  const productsAPI = await getAllProducts();
  return (
    <Page1 productsAPI={productsAPI}/>
  );
}