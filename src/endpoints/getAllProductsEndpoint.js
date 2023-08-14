import { getAllProductsUrl } from "@/routing/backendRoutes";

const getAllProductsEndpoint = async () => {
  const response = await fetch(getAllProductsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllProductsEndpoint;