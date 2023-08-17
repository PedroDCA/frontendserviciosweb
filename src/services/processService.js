import getAllProcessesEndpoint from "@/endpoints/processEndpoints/getAllProcessesEndpoint";

/**
 * Gets all the current processes.
 * @returns List of all processes.
 */
export const getAllProcesses = async () => {
  const processesFromApi = await getAllProcessesEndpoint();
  return processesFromApi;
};
