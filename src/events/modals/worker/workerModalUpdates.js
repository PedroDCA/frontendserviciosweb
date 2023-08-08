import { addWorkerApiUrl } from '@/routing/apiRoutes';
import { Modal } from 'bootstrap';

async function createWorker(workerInformation) {
  const payload = workerInformation;

  const response = await fetch(addWorkerApiUrl, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.ok;
}

function openNewInventoryModal(){    
  const modalElement = document.getElementById('newWorkerModal');
  const modal = Modal.getInstance(modalElement) || new Modal(modalElement);

  modal.show();
}

const createNewWorkerButton = document.querySelector('[data-new-worker-button]');
createNewWorkerButton.addEventListener('click', openNewInventoryModal);

function closeNewWorkerModal() {
  const modalElement = document.getElementById('newWorkerModal');
  const modal = Modal.getInstance(modalElement);

  modal.hide();
}

async function createButtonClick() {
  const workerNameElement = document.querySelector('[data-modal-worker-name]');
  const workerName = workerNameElement.value.trim();
  if (!workerName) {
    alert('Por favor, agregue un nombre');
    return;
  }

  if (workerName.split(' ') !== 2) {
    alert('Por favor, ingrese el nombre y primer apellido separado por un espacio.');
    return;
  }

  const workerRoleElement = document.querySelector('[data-modal-role-id]');
  const workerRoleId = Number(workerRoleElement.value);
  if (workerSize <= 0) {
    alert('Por favor, ingrese un rol valido');
    return;
  }

  const [ firstName, lastName ] = workerName.split(' ');

  const workerInformation = {
    firstName,
    lastName,
    roleId: workerRoleId,
  }

  const isWorkerSaved = await createWorker(workerInformation);
  const message = isWorkerSaved ? 'Se ha guardado el trabajador correctamente' : 'No se ha podido guardar el trabajador, por favor inténtelo de nuevo';
  alert(message);
  closeNewWorkerModal();
}

const submitNewWorkerButton = document.querySelector('[data-create-worker]');
submitNewWorkerButton.addEventListener('click', createButtonClick);