import MaterialList from "@/components/pages/material/materialList";
import { getAllMaterials } from "@/services/materialService";

/**
 * Gets all the current materials.
 * @returns 
 */
async function getMaterials(){
  'use server'
  return await getAllMaterials();
}

/**
 * Gets the page for the material.
 * @returns The material page.
 */
export default async function Page() {
  const materials = await getMaterials();
  return (<MaterialList initialMaterials={materials}/>);
}