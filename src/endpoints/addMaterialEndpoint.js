import { addMaterial } from "../routing/backendRoutes";
export default async (name) => {
  const data = {
    name,
  };
  const response = await fetch(addMaterial, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};