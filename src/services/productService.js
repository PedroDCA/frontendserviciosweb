import getAllProductsEndpoint from "@/endpoints/getAllProductsEndpoint";

export const getAllProducts = async () => {
  const productsFromAPI = await getAllProductsEndpoint();
  const products = productsFromAPI.map(product => ({name: product.name, id: product.id}));

  return products; 
}