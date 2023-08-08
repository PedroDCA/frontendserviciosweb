'use client';

import InformationCard from "@/components/cards/informationCard";
import NewWorkerModal from "@/components/modals/worker/newWorkerModal";
import { getRoleById } from "@/services/roleService";
import { useEffect, useState } from "react";

export default function WorkerList({initialWorkers}) {
  const [workers, setWorkers] = useState(initialWorkers || []);
  useEffect(() => {
    require('../../../events/modals/worker/workerModalUpdates');
  }, []);

  return (
    <div>
      <NewWorkerModal/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de trabajadores</h2>
        <button data-new-worker-button className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {workers.map((worker, index) => {
          const workerFullName = `${worker.firstName} ${worker.lastName}`;
          const workerRole = getRoleById(worker.roleId);
          const information = `Rol: ${workerRole.name}`;
          return (<InformationCard elementName={workerFullName} elementInformation={information} key={index}/>)
        })}
      </div>
    </div>
  );
}
