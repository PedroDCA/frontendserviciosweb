
import Dashboard from "@/components/pages/dashboard/dashboard";
import { getAllProductions } from "@/services/productionService";

/**
 * Gets the list of the current productions.
 * @returns An array of current productions.
 */
async function getProductions(){
  'use server'
  const productions = await getAllProductions();
  return productions;
}

/**
 * Gets the page for the dashboard.
 * @returns The dashboard page.
 */
export default async function Page() {
  const productions = await getProductions();
  return (<Dashboard productions={productions}/>);
}