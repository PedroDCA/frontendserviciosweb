import createProductionPlanningEndpoint from "@/endpoints/productionEndpoints/createProductionPlanningEndpoint";
import getAllProcessesByProductIdEndpoint from "@/endpoints/productionEndpoints/getAllProcessesByProductIdEndpoint";
import getAllProductionsEndpoint from "@/endpoints/productionEndpoints/getAllProductionsEndpoint";
import startProductionEndpoint from "@/endpoints/productionEndpoints/startProductionEndpoint";

/**
 * Gets all the processes that are related to the product id.
 * @param {Number} productId The product id.
 * @returns The processes related to the product id.
 */
export const getProductionPlanningByProductId = async (productId) => {
  const productsFromAPI = await getAllProcessesByProductIdEndpoint(productId);

  return productsFromAPI; 
}

/**
 * Gets all the current productions.
 * @returns The list of all current productions.
 */
export const getAllProductions = async () => {
  const productionsFromAPI = await getAllProductionsEndpoint();

  return productionsFromAPI;
}
/**
 * Creates a new production planning.
 * @param {object} materialInformation Information about the material to add.
 * @returns The new production planning information.
 */
export const createProductionPlanning = async (materialInformation) => {
  const response = await createProductionPlanningEndpoint(materialInformation);

  return response; 
};

/**
 * Starts a new production.
 * @param {object} productionInformation Information related to the product.
 * @returns A confirmation.
 */
export const startProduction = async (productionInformation) => {
  productionInformation.startDate = `${productionInformation.startDate}T08:00:00`
  const response = await startProductionEndpoint(productionInformation);

  return response;
}