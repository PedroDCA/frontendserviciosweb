import addToolEndpoint from "@/endpoints/toolEndpoints/addToolEndpoint";
import getAllToolsEndpoint from "@/endpoints/toolEndpoints/getAllToolsEndpoint";

export const addNewTool = async (toolInformation) => {
  const response = await addToolEndpoint(toolInformation);
  const wasToolCreated = response?.id && Number(response?.id) > 0;
  const data = {
    toolId: response.id,
    wasToolCreated,
  };

  return data; 
};

export const getAllTools = async () => {
  const toolsFromAPI = await getAllToolsEndpoint();
  const tools = toolsFromAPI.map(tool => ({
      id: tool.id,
      name: tool.name,
      quantity: tool.quantity
    }));

  return tools; 
};