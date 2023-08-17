
import ToolList from "@/components/pages/tool/toolList";
import { getAllTools } from "@/services/toolService";

/**
 * Gets the tool list.
 * @returns An array with the current tools.
 */
async function getTools(){
  'use server'
  return await getAllTools();
}

/**
 * Gets the page for the tools.
 * @returns The page for the tool view.
 */
export default async function Page() {
  const tools = await getTools();
  return (<ToolList initialTools={tools}/>);
}