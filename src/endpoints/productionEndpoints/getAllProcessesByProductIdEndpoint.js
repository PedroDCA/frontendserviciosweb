import { getProductionPlanningUrl } from "../../routing/backendRoutes";

/**
 * Gets all the processes that are related to the product id.
 * @param {Number} productId The product id.
 * @returns The processes related to the product id.
 */
const getAllProcessesByProductIdEndpoint = async (productId) => {
  const url = new URL(getProductionPlanningUrl);
  url.search = `productId=${productId}`;
  const response = await fetch(url.href);
  return response.json();
};

export default getAllProcessesByProductIdEndpoint;