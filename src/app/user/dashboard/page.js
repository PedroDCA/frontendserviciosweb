
import Dashboard from "@/components/pages/dashboard/dashboard";

async function getProductions(){
  'use server'
  return [];
}

export default async function Page() {
  const productions = await getProductions();
  return (<Dashboard productions={productions}/>);
}