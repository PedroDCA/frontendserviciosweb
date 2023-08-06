import MaterialList from "@/components/pages/material/materialList";
import { getAllMaterials } from "@/services/materialService";

async function getMaterials(){
  'use server'
  return await getAllMaterials();
}

export default async function Page() {
  const materials = await getMaterials();
  return (<MaterialList initialMaterials={materials}/>);
}