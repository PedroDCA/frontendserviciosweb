import { getAllWorkersUrl } from "@/routing/backendRoutes";

const getAllWorkersEndpoint = async () => {
  const response = await fetch(getAllWorkersUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllWorkersEndpoint;