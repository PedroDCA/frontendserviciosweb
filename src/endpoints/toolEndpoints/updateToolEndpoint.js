import { updateToolUrl } from "@/routing/backendRoutes";


const updateToolEndpoint = async (toolInformation) => {
  const data = {
    id: toolInformation.id,
    quantity: toolInformation.quantity,
  };
  const dataJson = JSON.stringify(data);
  const response = await fetch(updateToolUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default updateToolEndpoint;