import { addMaterialApiUrl, addToolApiUrl } from '@/routing/apiRoutes';
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

async function getMaterials(){
  const response = await fetch(getAllMaterialsApiUrl, {
    method: 'GET',
  });
  return response.json();
}

async function createTool(toolInformation) {
  const payload = {
    name: toolInformation.name,
    quantity: toolInformation.quantity || 0,
  };

  const response = await fetch(addToolApiUrl, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.ok;
}

const createInventoryMapper = {
  'material': createMaterial,
  'tool': createTool
};

function closeNewInventoryModal() {
  const modalElement = document.getElementById('newInventoryModal');
  const modal = Modal.getInstance(modalElement);

  modal.hide();
}

async function saveButtonClick() {
  const inventoryNameElement = document.querySelector('[data-modal-inventory-name]');
  const inventoryName = inventoryNameElement.value.trim();
  if (!inventoryName) {
    alert('Por favor, agregue un nombre');
    return;
  }

  const inventorySizeElement = document.querySelector('[data-modal-inventory-size]');
  const inventorySize = Number(inventorySizeElement.value);
  if (inventorySize < 0) {
    alert('Por favor, ingrese un valor no negativo');
    return;
  }

  const createNewInventoryElement = document.querySelector('[data-inventory-category]');
  const inventoryCategory = createNewInventoryElement.dataset.inventoryCategory;

  const inventoryInformation = {
    name: inventoryName,
    quantity: inventorySize,
  }
  const createInventory = createInventoryMapper[inventoryCategory];
  const isinventorySaved = await createInventory(inventoryInformation);
  const message = isinventorySaved ? 'Se ha guardado correctamente' : 'No se ha podido guardar, por favor inténtelo de nuevo';
  alert(message);
  closeNewInventoryModal();
}

function openNewInventoryModal(event){    
  const newInventoryButton = event.target.closest('[data-new-inventory-button]');
  if (!newInventoryButton) {
    return;
  }

  const modalElement = document.getElementById('newInventoryModal');
  const modal = Modal.getInstance(modalElement) || new Modal(modalElement);

  modal.show();
}

const saveMaterialElement = document.querySelector('[data-create-inventory]');
saveMaterialElement.addEventListener('click', saveButtonClick);

function saveChangesClick(event) {
  const saveChangesButton = event.target.closest('[data-update-type] [data-save]');
  if (!saveChangesButton) {
    return;
  }

  const modal = document.querySelector('[data-update-type]');
  const modalMaterialIdElement = modal.querySelector('[data-modal-inventory-id]');
  
  const inventorySizeElement = document.querySelector('[data-modal-inventory-size]');
  const inventorySize = Number(inventorySizeElement.value);
  if (inventorySize < 0) {
    alert('Por favor, ingrese un valor no negativo');
    return;
  }

  console.log(modalMaterialIdElement.value, inventorySize);
  closeUpdateModal();
}

function closeUpdateModal() {
  const updateModalElement = document.querySelector('[data-update-type]');
  const modal = Modal.getInstance(updateModalElement);
  modal.hide();
}

function openUpdateModal(event) {
  const clickedElement = event.target;
  if (!clickedElement || !clickedElement.hasAttribute('data-open-update-modal')) {
    return;
  }

  const { elementName, elementId } = clickedElement.dataset;
  const updateModalElement = document.querySelector('[data-update-type');
  const modalMaterialElement = updateModalElement.querySelector('[data-modal-inventory-name]');
  const modalMaterialIdElement = updateModalElement.querySelector('[data-modal-inventory-id]');

  modalMaterialElement.textContent = elementName;
  modalMaterialIdElement.value = elementId;

  const modal = Modal.getInstance(updateModalElement) || new Modal(updateModalElement);
  modal.show();
}

const mainSection = document.querySelector('main');
mainSection.addEventListener('click', openUpdateModal);
mainSection.addEventListener('click', saveChangesClick);
mainSection.addEventListener('click', openNewInventoryModal);
