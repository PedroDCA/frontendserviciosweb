import getAllProductsEndpoint from "@/endpoints/getAllProductsEndpoint";

/**
 * Gets all the current products.
 * @returns A list of products.
 */
export const getAllProducts = async () => {
  const productsFromAPI = await getAllProductsEndpoint();
  const products = productsFromAPI.map(product => ({name: product.name, id: product.id}));

  return products; 
}