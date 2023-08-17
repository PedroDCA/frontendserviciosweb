'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewInventoryModal from "@/components/modals/base/newInventoryModal";
import UpdateInventoryModal from "@/components/modals/base/updateInventoryModal";
import { addMaterialApiUrl, getAllMaterialsApiUrl, updateMaterialApiUrl } from "@/routing/apiRoutes";
import { useEffect, useState } from "react";

/**
 * Gets the material list section.
 * @param {Array} initialMaterials List of current materials.
 * @returns The component for the material list page.
 */
export default function MaterialList({initialMaterials}) {
  const [materials, setMaterials] = useState(initialMaterials || []);
  const [isNewMaterialModalOpened, setIsNewMaterialModalOpened] = useState(false);
  const [isUpdatingMaterialModalOpened, setIsUpdatingMaterialModalOpened] = useState(false);
  const [shouldUpdateList, setShouldUpdateList] = useState(false);
  const [newMaterialInformation, setMaterialMaterialInformation] = useState();

  function createNewMaterial(materialInformation) {
    const addToolCall = fetch(addMaterialApiUrl, {
      body: JSON.stringify(materialInformation),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    addToolCall.then((response) => {
      setShouldUpdateList(response.ok);
      const message = response.ok ? 'Se ha guardado el material correctamente' : 'No se ha podido guardar el material, por favor inténtelo de nuevo';
      alert(message);
      setIsNewMaterialModalOpened(false);
    });
  }
  
  function updateMaterial(materialInformation) {
    const addToolCall = fetch(updateMaterialApiUrl, {
      body: JSON.stringify(materialInformation),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    addToolCall.then((response) => {
      setShouldUpdateList(response.ok);
      const message = response.ok ? 'Se ha actualizado el material correctamente' : 'No se ha podido guardar el material, por favor inténtelo de nuevo';
      alert(message);
      setIsUpdatingMaterialModalOpened(false);
    });
  }

  useEffect(() => {
    if (!newMaterialInformation) {
      return;
    }

    if (newMaterialInformation.type === 'create') {
      createNewMaterial(newMaterialInformation.data);      
    }

    if (newMaterialInformation.type === 'update'){
      updateMaterial(newMaterialInformation.data);
    }

  }, [newMaterialInformation]);
  
  useEffect(() => {
    const { Modal } = require('bootstrap');
    const modalElement = document.getElementById('newInventoryModal');
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    if (isNewMaterialModalOpened) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [isNewMaterialModalOpened]);
  
  useEffect(() => {
    const { Modal } = require('bootstrap');
    const modalElement = document.getElementById('updateModal');
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    if (isUpdatingMaterialModalOpened) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [isUpdatingMaterialModalOpened]);

  useEffect(() => {
    if (!shouldUpdateList) {
      return;
    }

    const getAllMaterials = fetch(getAllMaterialsApiUrl);
    getAllMaterials.then((response) => response.json()).then((updatedMaterials) => setMaterials(updatedMaterials));
  }, [shouldUpdateList]);

  useEffect(() => {
    setShouldUpdateList(false);
  }, [materials]);
  
  return (
    <div>
      <UpdateInventoryModal inventoryName={'Material'} setNewInventoryInformation={setMaterialMaterialInformation} setIsUpdatingInventoryModalOpened={setIsUpdatingMaterialModalOpened}/>
      <NewInventoryModal inventoryName={'Material'} setNewInventoryInformation={setMaterialMaterialInformation} setIsNewInventoryModalOpened={setIsNewMaterialModalOpened}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button onClick={() => setIsNewMaterialModalOpened(true)} className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {materials.map((material, index) => {
          return (<InventoryCard elementName={material.name} elementId={material.id} elementQuantity={material.quantity} key={index} setIsUpdatingInventoryModalOpened={setIsUpdatingMaterialModalOpened}/>)
        })}
      </div>
    </div>
  );
}
