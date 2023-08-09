import getAllProcessesByProductId from "@/endpoints/productionEndpoints/getAllProcessesByProductIdEndpoint";

export const getProductionPlanningByProductId = async (productId) => {
  const productsFromAPI = await getAllProcessesByProductId(productId);

  return productsFromAPI; 
}