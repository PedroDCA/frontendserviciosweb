import { getAllProcessesUrl } from "../../routing/backendRoutes";

const getAllProcessesEndpoint = async () => {
  const response = await fetch(getAllProcessesUrl);
  return response.json();
};

export default getAllProcessesEndpoint;