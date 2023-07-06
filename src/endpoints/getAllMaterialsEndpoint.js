import { getAllMaterials } from "../routing/backendRoutes";
export default async () => {
  const response = await fetch(getAllMaterials);
  return response.json();
};