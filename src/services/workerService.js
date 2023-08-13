import addWorkerEndpoint from "@/endpoints/workerEndpoints/addWorkerEndpoint";
import getAllWorkersEndpoint from "@/endpoints/workerEndpoints/getAllWorkers";

export const addNewWorker = async (workerInformation) => {
  const response = await addWorkerEndpoint(workerInformation);
  const wasWorkerCreated = response?.id && Number(response?.id) > 0;
  const data = {
    workerId: response.id,
    wasWorkerCreated,
  };
  console.log(data)
  return data; 
};

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