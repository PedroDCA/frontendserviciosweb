import { getAllProductsUrl } from "@/routing/backendRoutes";

/**
 * Gets all the current products.
 * @returns A list of products.
 */
const getAllProductsEndpoint = async () => {
  const response = await fetch(getAllProductsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllProductsEndpoint;