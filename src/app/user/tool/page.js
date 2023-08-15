
import ToolList from "@/components/pages/tool/toolList";
import { getAllTools } from "@/services/toolService";

async function getTools(){
  'use server'
  return await getAllTools();
}

export default async function Page() {
  const tools = await getTools();
  return (<ToolList initialTools={tools}/>);
}