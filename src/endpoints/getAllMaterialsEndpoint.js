import { getAllMaterialsUrl } from "../routing/backendRoutes";
export default async () => {
  const response = await fetch(getAllMaterialsUrl);
  return response.json();
};