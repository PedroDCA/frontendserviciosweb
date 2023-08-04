import { getAllProductsUrl } from "@/routing/backendRoutes";

const getAllProductsEndpoint = async () => {
  const response = await fetch(getAllProductsUrl);
  return response.json();
};

export default getAllProductsEndpoint;