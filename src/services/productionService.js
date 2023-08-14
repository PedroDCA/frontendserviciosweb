import createProductionPlanningEndpoint from "@/endpoints/productionEndpoints/createProductionPlanningEndpoint";
import getAllProcessesByProductIdEndpoint from "@/endpoints/productionEndpoints/getAllProcessesByProductIdEndpoint";
import getAllProductionsEndpoint from "@/endpoints/productionEndpoints/getAllProductionsEndpoint";

export const getProductionPlanningByProductId = async (productId) => {
  const productsFromAPI = await getAllProcessesByProductIdEndpoint(productId);

  return productsFromAPI; 
}

export const getAllProductions = async () => {
  const productionsFromAPI = await getAllProductionsEndpoint();

  return productionsFromAPI;
}

export const createProductionPlanning = async (materialInformation) => {
  const response = await createProductionPlanningEndpoint(materialInformation);

  return response; 
};