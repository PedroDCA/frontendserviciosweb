import { Modal } from 'bootstrap';

async function createMaterial(materialInformation) {
  const payload = {
    name: materialInformation.name,
    quantity: materialInformation.quantity || 0,
  };

  const response = await fetch(addMaterialApiUrl, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.ok;
}

async function SaveButtonClick() {
  const materialNameElement = document.querySelector('[data-modal-material-name]');
  const materialName = materialNameElement.value.trim();
  if (!materialName) {
    alert('Por favor, agregue un nombre');
    return;
  }

  const materialSizeElement = document.querySelector('[data-modal-size]');
  const materialSize = Number(materialSizeElement.value);
  if (materialSize < 0) {
    alert('Por favor, ingrese un valor no negativo');
    return;
  }

  const materialInformation = {
    name: materialName,
    quantity: materialSize,
  }
  const isMaterialSaved = await createMaterial(materialInformation);
  const message = isMaterialSaved ? 'El material se ha guardado correctamente' : 'No se ha podido guardar el material, por favor inténtelo de nuevo';
  alert(message);
  closeNewMaterialModal();
}

function closeNewMaterialModal() {
  const modalElement = document.getElementById('newMaterialModal');
  const modal = Modal.getInstance(modalElement);

  modal.hide();
}

function openNewMaterialModal(){    
  const modalElement = document.getElementById('newMaterialModal');
  const modal = Modal.getInstance(modalElement) || new Modal(modalElement);

  modal.show();
}

const saveMaterialElement = document.querySelector('[data-save-material]');
saveMaterialElement.addEventListener('click', SaveButtonClick);


async function getMaterials(){
  const response = await fetch(getAllMaterialsApiUrl, {
    method: 'GET',
  });
  return response.json();
}

function saveChangesClick() {
  const modal = document.querySelector('[data-update-type="material"]');
  const modalMaterialIdElement = modal.querySelector('[data-modal-material-id]');
  
  const materialSizeElement = document.querySelector('[data-modal-size]');
  const materialSize = Number(materialSizeElement.value);
  if (materialSize < 0) {
    alert('Por favor, ingrese un valor no negativo');
    return;
  }

  console.log(modalMaterialIdElement.value, materialSize);
  closeUpdateModal();
}

function closeUpdateModal() {
  const updateModalElement = document.querySelector('[data-update-type="material"]');
  const modal = Modal.getInstance(updateModalElement);
  modal.hide();
}

function openUpdateModal(event) {
  const clickedElement = event.target;
  if (!clickedElement || !clickedElement.hasAttribute('data-open-update-modal')) {
    return;
  }

  const { elementName, elementId } = clickedElement.dataset;
  const updateModalElement = document.querySelector('[data-update-type="material"]');
  const modalMaterialElement = updateModalElement.querySelector('[data-modal-material]');
  const modalMaterialIdElement = updateModalElement.querySelector('[data-modal-material-id]');

  modalMaterialElement.textContent = elementName;
  modalMaterialIdElement.value = elementId;

  const modal = Modal.getInstance(updateModalElement) || new Modal(updateModalElement);
  modal.show();
}


const updateSaveElement = document.querySelector('[data-update-type="material"] [data-save]');
updateSaveElement.addEventListener('click', saveChangesClick);

const newMaterialButton = document.querySelector('[data-new-material-button]');
newMaterialButton.addEventListener('click', openNewMaterialModal);

const cardListContainer = document.querySelector('[data-card-list]');
cardListContainer.addEventListener('click', openUpdateModal);