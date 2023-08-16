import createProductionPlanningEndpoint from "@/endpoints/productionEndpoints/createProductionPlanningEndpoint";
import getAllProcessesByProductIdEndpoint from "@/endpoints/productionEndpoints/getAllProcessesByProductIdEndpoint";
import getAllProductionsEndpoint from "@/endpoints/productionEndpoints/getAllProductionsEndpoint";
import startProductionEndpoint from "@/endpoints/productionEndpoints/startProductionEndpoint";

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

export const startProduction = async (productionInformation) => {
  productionInformation.startDate = `${productionInformation.startDate}T08:00:00`
  const response = await startProductionEndpoint(productionInformation);

  return response;
}