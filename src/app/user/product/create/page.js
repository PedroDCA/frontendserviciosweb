import CreateProduct from "@/components/pages/product/createProduct";
import { getAllMaterials } from "@/services/materialService";
import { getAllProcesses } from "@/services/processService";

async function getInformation(){
  'use server'
  const materialsPromise = getAllMaterials();
  const processesPromise = getAllProcesses();

  return Promise.all([materialsPromise, processesPromise]).then(([materials, processes]) => ({materials, processes}));
}

export default async function Page() {
  const { materials, processes } = await getInformation();
  return (<CreateProduct materialList={materials} processList={processes}/>);
}