import WorkerList from "@/components/pages/worker/workerList";
import { getAllWorkers } from "@/services/workerService";

/**
 * Gets the current workers information.
 * @returns An array with the workers information.
 */
async function getWorkers(){
  'use server'
  return await getAllWorkers();
}

/**
 * Gets the page for the worker.
 * @returns The page for the worker.
 */
export default async function Page() {
  const workers = await getWorkers();
  return (<WorkerList initialWorkers={workers}/>);
}