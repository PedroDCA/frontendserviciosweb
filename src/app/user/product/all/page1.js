'use client'

import { GET } from "@/app/api/product/all/route";
import { useState } from "react";

async function getAllProducts() {
  const response = await GET()
  return response.json();
}

export default function Page1({productsAPI}) {
  const [products, setProducts] = useState(productsAPI);

  async function updateAllProducts() {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center content-container">
      <button onClick={updateAllProducts}>Click</button>
      {products.map((product, index) => {
        return (<p key={index}>{product.name}</p>)
      })}
    </div>
  );
}