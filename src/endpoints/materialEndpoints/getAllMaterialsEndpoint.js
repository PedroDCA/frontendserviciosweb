import { getAllMaterialsUrl } from "../../routing/backendRoutes";

/**
 * Gets all the current materials.
 * @returns A list of materials.
 */
const getAllMaterialsEndpoint = async () => {
  const response = await fetch(getAllMaterialsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllMaterialsEndpoint;