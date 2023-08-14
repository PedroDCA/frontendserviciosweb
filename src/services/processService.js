import getAllProcessesEndpoint from "@/endpoints/processEndpoints/getAllProcessesEndpoint";

export const getAllProcesses = async () => {
  const processesFromApi = await getAllProcessesEndpoint();
  return processesFromApi;
};
