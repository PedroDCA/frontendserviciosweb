import { getAddProductUrl } from "@/routing/backendRoutes";

/**
 * Creates a new production planning.
 * @param {object} materialInformation Information about the material to add.
 * @returns The new production planning information.
 */
const createProductionPlanningEndpoint = async (materialInformation) => {
  const dataJson = JSON.stringify(materialInformation);
  const response = await fetch(getAddProductUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default createProductionPlanningEndpoint;