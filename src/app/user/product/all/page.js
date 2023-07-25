'use client'


import { getAllProductsApiUrl } from "@/routing/apiRoutes";
import { useState } from "react";

async function getAllProducts() {
  const response = await fetch(getAllProductsApiUrl, {
    method: 'GET',
  });
  return response.json();
}

export default function Page({productsAPI}) {
  const [products, setProducts] = useState(productsAPI);

  async function updateAllProducts() {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  }
  
  return (
    <div>
      <button onClick={updateAllProducts}>Click</button>
      {products.map((product, index) => {
        return (<p key={index}>{product.name}</p>)
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const productsAPI = await getAllProducts();
  console.log(productsAPI);
  return {
    props: { productsAPI }, // will be passed to the page component as props
  }
}