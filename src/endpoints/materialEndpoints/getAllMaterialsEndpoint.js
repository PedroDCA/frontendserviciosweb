import { getAllMaterialsUrl } from "../../routing/backendRoutes";

const getAllMaterialsEndpoint = async () => {
  const response = await fetch(getAllMaterialsUrl);
  return response.json();
};

export default getAllMaterialsEndpoint;