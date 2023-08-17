import { getAllToolsUrl } from "@/routing/backendRoutes";

/**
 * Gets all the current tools.
 * @returns A list of tools.
 */
const getAllToolsEndpoint = async () => {
  const response = await fetch(getAllToolsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllToolsEndpoint;