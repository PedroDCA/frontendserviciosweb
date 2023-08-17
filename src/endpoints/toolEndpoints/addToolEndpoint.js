import { addToolUrl } from "@/routing/backendRoutes";

/**
 * Creates a new tool.
 * @param {object} toolInformation Information related to the tool.
 * @returns A confirmation.
 */
const addToolEndpoint = async (toolInformation) => {
  const data = {
    name: toolInformation.name,
    quantity: toolInformation.quantity,
  };
  const dataJson = JSON.stringify(data);
  const response = await fetch(addToolUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default addToolEndpoint;