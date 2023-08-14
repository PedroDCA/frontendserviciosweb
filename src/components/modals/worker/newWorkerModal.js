"use client";

import { getAllRoles } from "@/services/roleService";

const roles = getAllRoles();
const availableRoles = roles.filter(role => role.id !== 1);

export default function NewWorkerModal({setNewWorkerInformation, setIsNewWorkerModalOpened}) {

  function createButtonClick() {
    const workerNameElement = document.querySelector('[data-modal-worker-name]');
    const workerName = workerNameElement.value.trim();
    if (!workerName) {
      alert('Por favor, agregue un nombre');
      return;
    }

    if (workerName.split(' ').length !== 2) {
      alert('Por favor, ingrese el nombre y primer apellido separado por un espacio.');
      return;
    }

    const workerRoleElement = document.querySelector('[data-modal-role-id]');
    const workerRoleId = Number(workerRoleElement.value);
    if (workerRoleId <= 0) {
      alert('Por favor, ingrese un rol valido');
      return;
    }

    const [ firstName, lastName ] = workerName.split(' ');

    const workerInformation = {
      firstName,
      lastName,
      roleId: workerRoleId,
    }

    setNewWorkerInformation(workerInformation);
  }

  return (
    <div>
      <div className="modal fade" id="newWorkerModal" tabIndex="-1" aria-labelledby="newWorkerModalLabel" aria-hidden="true" data-modal data-new-worker>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newWorkerModalLabel">Agregar trabajador</h1>
              <button type="button" className="btn-close" onClick={() => setIsNewWorkerModalOpened(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Nombre y primer apellido del trabajador:</p>
              <input type="text" data-modal-worker-name/>
              <p>Ingrese el rol:</p>
              <select defaultValue={2} data-modal-role-id>
                {availableRoles.map((role, index) => {
                  return (<option value={role.id} key={index}>{role.name}</option>);
                })}
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsNewWorkerModalOpened(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={createButtonClick}>Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}