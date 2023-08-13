import { updateMaterialUrl } from "@/routing/backendRoutes";


const updateMaterialEndpoint = async (materialInformation) => {
  const data = {
    id: materialInformation.id,
    quantity: materialInformation.quantity,
  };
  const dataJson = JSON.stringify(data);
  const response = await fetch(updateMaterialUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default updateMaterialEndpoint;