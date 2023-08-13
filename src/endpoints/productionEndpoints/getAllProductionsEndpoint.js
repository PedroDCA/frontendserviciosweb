import { getAllProductionsUrl } from "../../routing/backendRoutes";

const getAllProductionsEndpoint = async () => {
  const response = await fetch(getAllProductionsUrl);
  return response.json();
};

export default getAllProductionsEndpoint;