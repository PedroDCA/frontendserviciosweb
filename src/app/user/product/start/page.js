import StartProduction from "@/components/pages/product/startProduction";
import { getAllMaterials } from "@/services/materialService";
import { getAllProducts } from "@/services/productService";
import { getAllWorkers } from "@/services/workerService";

async function getProducts(){
  'use server'

  const allProductsPromise = getAllProducts();
  const workerListPromise = getAllWorkers();
  const materialListPromise = getAllMaterials();
  
  return Promise.all([allProductsPromise, workerListPromise, materialListPromise]).then(([products, workers, materials]) => ({products, workers, materials}));
}

export default async function Page() {
  const { products, materials, workers} = await getProducts();
  return (<StartProduction productList={products} materialList={materials} workerList={workers}/>);
}