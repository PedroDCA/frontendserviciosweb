import { addMaterialUrl } from "@/routing/backendRoutes";


const addMaterialEndpoint = async (materialInformation) => {
  const data = {
    name: materialInformation.name,
    quantity: materialInformation.quantity,
  };
  const dataJson = JSON.stringify(data);
  const response = await fetch(addMaterialUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default addMaterialEndpoint;