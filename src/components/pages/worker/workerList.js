'use client';

import InformationCard from "@/components/cards/informationCard";
import NewWorkerModal from "@/components/modals/worker/newWorkerModal";
import { addWorkerApiUrl, getWorkersApiUrl } from "@/routing/apiRoutes";
import { getRoleById } from "@/services/roleService";
import { useEffect, useState } from "react";

/**
 * Gets the component for the worker list section.
 * @param {Array} initialWorkers List of current workers.
 * @returns The component related to the worker list.
 */
export default function WorkerList({initialWorkers}) {
  const [workers, setWorkers] = useState(initialWorkers || []);
  const [isNewWorkerModalOpened, setIsNewWorkerModalOpened] = useState(false);
  const [isWorkerCreated, setIsWorkerCreated] = useState(false);
  const [newWorkerInformation, setNewWorkerInformation] = useState();

  useEffect(() => {
    if (!newWorkerInformation) {
      return;
    }

    const addWorkerCall = fetch(addWorkerApiUrl, {
      body: JSON.stringify(newWorkerInformation),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    addWorkerCall.then((response) => {
      setIsWorkerCreated(response.ok);
      const message = response.ok ? 'Se ha guardado el trabajador correctamente' : 'No se ha podido guardar el trabajador, por favor inténtelo de nuevo';
      alert(message);
      setIsNewWorkerModalOpened(false);
    });
  }, [newWorkerInformation]);

  useEffect(() => {
    const { Modal } = require('bootstrap');
    const modalElement = document.getElementById('newWorkerModal');
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    if (isNewWorkerModalOpened) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [isNewWorkerModalOpened]);

  useEffect(() => {
    if (!isWorkerCreated) {
      return;
    }

    const getAllWorkers = fetch(getWorkersApiUrl);
    getAllWorkers.then((response) => response.json()).then((updatedWorkers) => setWorkers(updatedWorkers));
  }, [isWorkerCreated]);

  return (
    <div>
      <NewWorkerModal setIsNewWorkerModalOpened={setIsNewWorkerModalOpened} setNewWorkerInformation={setNewWorkerInformation}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de trabajadores</h2>
        <button onClick={() => setIsNewWorkerModalOpened(true)} className="add-button"/>
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
