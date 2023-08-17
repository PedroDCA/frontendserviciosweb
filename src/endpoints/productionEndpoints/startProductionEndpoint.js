import { startProductionUrl } from "@/routing/backendRoutes";

/**
 * Starts a new production.
 * @param {object} productionInformation Information related to the product.
 * @returns A confirmation.
 */
const startProductionEndpoint = async (productionInformation) => {
  const dataJson = JSON.stringify(productionInformation);
  const response = await fetch(startProductionUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default startProductionEndpoint;