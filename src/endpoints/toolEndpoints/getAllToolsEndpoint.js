import { getAllToolsUrl } from "@/routing/backendRoutes";

const getAllToolsEndpoint = async () => {
  const response = await fetch(getAllToolsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllToolsEndpoint;