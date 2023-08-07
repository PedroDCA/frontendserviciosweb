import { getAllWorkersUrl } from "@/routing/backendRoutes";

const getAllWorkersEndpoint = async () => {
  const response = await fetch(getAllWorkersUrl);
  return response.json();
};

export default getAllWorkersEndpoint;