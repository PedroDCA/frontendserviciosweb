import addWorkerEndpoint from "@/endpoints/workerEndpoints/addWorkerEndpoint";
import getAllWorkersEndpoint from "@/endpoints/workerEndpoints/getAllWorkers";

/**
 * Saves a new worker.
 * @param {object} workerInformation Worker information.
 * @returns A confirmation.
 */
export const addNewWorker = async (workerInformation) => {
  const response = await addWorkerEndpoint(workerInformation);
  const wasWorkerCreated = response?.id && Number(response?.id) > 0;
  const data = {
    workerId: response.id,
    wasWorkerCreated,
  };
  return data; 
};

/**
 * Gets all the current workers.
 * @returns A list of current workers
 */
export const getAllWorkers = async () => {
  const workersFromAPI = await getAllWorkersEndpoint();
  const workers = workersFromAPI.map(worker => ({
    id: worker.id,
    firstName: worker.name,
    lastName: worker.lastName,
    roleId: worker.roleId
  }));

  return workers; 
};