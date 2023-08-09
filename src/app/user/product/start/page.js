import StartProduction from "@/components/pages/product/startProduction";
import { getAllProducts } from "@/services/productService";

async function getProducts(){
  'use server'
  return await getAllProducts();
}

export default async function Page() {
  const products = await getProducts();
  return (<StartProduction productList={products}/>);
}