import { addWorkerUrl } from "@/routing/backendRoutes";


const addWorkerEndpoint = async (workerInformation) => {
  const data = {
    name: workerInformation.firstName,
    lastName: workerInformation.lastName,
    roleId: workerInformation.roleId,
  };
  const dataJson = JSON.stringify(data);
  const response = await fetch(addWorkerUrl, {
    method: 'POST',
    body: dataJson,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default addWorkerEndpoint;