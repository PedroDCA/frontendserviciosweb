import CreateProduct from "@/components/pages/product/createProduct";

async function getTools(){
  'use server'
  return await getAllTools();
}

export default async function Page() {
  return (<CreateProduct />);
}