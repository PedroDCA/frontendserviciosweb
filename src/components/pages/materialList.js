'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewMaterialModal from "@/components/modals/material/newMaterialModal";
import UpdateMaterialModal from "@/components/modals/material/updateMaterialModal";
import { addMaterialApiUrl, getAllMaterialsApiUrl } from "@/routing/apiRoutes";
import { getAllMaterials } from "@/services/materialService";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";

async function getMaterials(){
  const response = await fetch(getAllMaterialsApiUrl, {
    method: 'GET',
  });
  return response.json();
}

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

export default function MaterialList({initialMaterials}) {
  const [materials, setMaterials] = useState(initialMaterials || []);
  function saveChangesClick() {
    const modal = document.querySelector('[data-modal]');
    const modalMaterialIdElement = modal.querySelector('[data-modal-material-id]');
    
    const materialSizeElement = document.querySelector('[data-modal-size]');
    const materialSize = Number(materialSizeElement.value);
    if (materialSize < 0) {
      alert('Por favor, ingrese un valor no negativo');
      return;
    }

    console.log(modalMaterialIdElement.value, modalMaterialSizeElement.value);
  }

  function openNewMaterialModal(){    
    const modalElement = document.getElementById('newMaterialModal');
    const modal = new Modal(modalElement);

    modal.show();
  }

  return (
    <div className="p-5 w-100">
      <UpdateMaterialModal saveChangesFunction={saveChangesClick}/>
      <NewMaterialModal saveMaterial={createMaterial}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button onClick={openNewMaterialModal} className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list">
        {materials.map((product, index) => {
          return (<InventoryCard elementName={product.name} elementId={product.id} elementQuantity={product.quantity} key={index}/>)
        })}
      </div>
    </div>
  );
}
