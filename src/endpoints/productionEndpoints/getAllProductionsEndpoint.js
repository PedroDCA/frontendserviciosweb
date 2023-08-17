import { getAllProductionsUrl } from "../../routing/backendRoutes";

/**
 * Gets all the current productions.
 * @returns The list of all current productions.
 */
const getAllProductionsEndpoint = async () => {
  const response = await fetch(getAllProductionsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllProductionsEndpoint;