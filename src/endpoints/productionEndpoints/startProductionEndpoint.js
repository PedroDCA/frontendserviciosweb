import { startProductionUrl } from "@/routing/backendRoutes";


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