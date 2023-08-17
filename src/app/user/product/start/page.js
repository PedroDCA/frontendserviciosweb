import StartProduction from "@/components/pages/product/startProduction";
import { getAllMaterials } from "@/services/materialService";
import { getAllProducts } from "@/services/productService";
import { getAllWorkers } from "@/services/workerService";

/**
 * Gets the information that is required for the starting production page.
 * @returns An object with the information required for the starting production page.
 */
async function getProducts(){
  'use server'

  const allProductsPromise = getAllProducts();
  const workerListPromise = getAllWorkers();
  const materialListPromise = getAllMaterials();
  
  return Promise.all([allProductsPromise, workerListPromise, materialListPromise]).then(([products, workers, materials]) => ({products, workers, materials}));
}

/**
 * Gets the page for the start production.
 * @returns The start production page.
 */
export default async function Page() {
  const { products, materials, workers} = await getProducts();
  return (<StartProduction productList={products} materialList={materials} workerList={workers}/>);
}