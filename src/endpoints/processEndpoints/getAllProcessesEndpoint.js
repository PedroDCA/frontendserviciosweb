import { getAllProcessesUrl } from "../../routing/backendRoutes";

/**
 * Gets all the current processes.
 * @returns List of all processes.
 */
const getAllProcessesEndpoint = async () => {
  const response = await fetch(getAllProcessesUrl);
  return response.json();
};

export default getAllProcessesEndpoint;