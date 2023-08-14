import { getAddProductUrl } from "@/routing/backendRoutes";


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