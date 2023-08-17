import CreateProduct from "@/components/pages/product/createProduct";
import { getAllMaterials } from "@/services/materialService";
import { getAllProcesses } from "@/services/processService";

/**
 * Gets the information required for the create product page.
 * @returns An object with the list of current materials and processes.
 */
async function getInformation(){
  'use server'
  const materialsPromise = getAllMaterials();
  const processesPromise = getAllProcesses();

  return Promise.all([materialsPromise, processesPromise]).then(([materials, processes]) => ({materials, processes}));
}

/**
 * Gets the create product page.
 * @returns The create product page.
 */
export default async function Page() {
  const { materials, processes } = await getInformation();
  return (<CreateProduct materialList={materials} processList={processes}/>);
}