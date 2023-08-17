import { getAllWorkersUrl } from "@/routing/backendRoutes";

/**
 * Gets all the current workers.
 * @returns A list of current workers
 */
const getAllWorkersEndpoint = async () => {
  const response = await fetch(getAllWorkersUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllWorkersEndpoint;