import WorkerList from "@/components/pages/worker/workerList";
import { getAllWorkers } from "@/services/workerService";

async function getWorkers(){
  'use server'
  return await getAllWorkers();
}

export default async function Page() {
  const workers = await getWorkers();
  return (<WorkerList initialWorkers={workers}/>);
}