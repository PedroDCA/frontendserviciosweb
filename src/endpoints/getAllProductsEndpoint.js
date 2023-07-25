import { getAllProductsUrl } from "@/routing/backendRoutes";

export default async () => {
  const response = await fetch(getAllProductsUrl);
  return response.json();
};