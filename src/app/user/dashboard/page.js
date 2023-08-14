
import Dashboard from "@/components/pages/dashboard/dashboard";
import { getAllProductions } from "@/services/productionService";

async function getProductions(){
  'use server'
  const productions = await getAllProductions();
  return productions;
}

export default async function Page() {
  const productions = await getProductions();
  return (<Dashboard productions={productions}/>);
}