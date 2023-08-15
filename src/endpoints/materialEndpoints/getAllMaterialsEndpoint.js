import { getAllMaterialsUrl } from "../../routing/backendRoutes";

const getAllMaterialsEndpoint = async () => {
  const response = await fetch(getAllMaterialsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllMaterialsEndpoint;