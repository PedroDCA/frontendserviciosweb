import { getAllProductionsUrl } from "../../routing/backendRoutes";

const getAllProductionsEndpoint = async () => {
  const response = await fetch(getAllProductionsUrl, {
    cache: 'no-store',
  });
  return response.json();
};

export default getAllProductionsEndpoint;