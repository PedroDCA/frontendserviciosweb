import getAllProductsEndpoint from "@/endpoints/getAllProductsEndpoint";

export const getAllProducts = async () => {
  // const productsFromAPI = await getAllProductsEndpoint();
  const productsFromAPI = [
    {
      name: 'Silla'
    },
    {
      name: 'Mesa'
    }
  ];
  const products = productsFromAPI.map(product => ({name: product.name}));

  return products; 
}