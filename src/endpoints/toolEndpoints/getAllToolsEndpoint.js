import { getAllToolsUrl } from "@/routing/backendRoutes";

const getAllToolsEndpoint = async () => {
  const response = await fetch(getAllToolsUrl);
  return response.json();
};

export default getAllToolsEndpoint;