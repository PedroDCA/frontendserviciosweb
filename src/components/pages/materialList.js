'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewInventoryModal from "@/components/modals/inventory/newInventoryModal";
import UpdateInventoryModal from "@/components/modals/inventory/updateInventoryModal";
import { getAllMaterialsApiUrl } from "@/routing/apiRoutes";
import { getAllMaterials } from "@/services/materialService";
import { useEffect, useState } from "react";

async function getMaterials(){
  const response = await fetch(getAllMaterialsApiUrl, {
    method: 'GET',
  });
  return response.json();
}

export default function MaterialList({initialMaterials}) {
  const [materials, setMaterials] = useState(initialMaterials || []);
  function saveChangesClick() {
    const modal = document.querySelector('[data-modal]');
    const modalMaterialIdElement = modal.querySelector('[data-modal-material-id]');
    const modalMaterialSizeElement = modal.querySelector('[data-modal-size]');

    console.log(modalMaterialIdElement.value, modalMaterialSizeElement.value);
  }

  return (
    <div className="p-5 w-100">
      <UpdateInventoryModal saveChangesFunction={saveChangesClick}/>
      <NewInventoryModal/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button data-bs-toggle="modal" data-bs-target="#newInventoryModal" className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list">
        {materials.map((product, index) => {
          return (<InventoryCard elementName={product.name} elementId={product.id} elementQuantity={product.quantity} key={index}/>)
        })}
      </div>
    </div>
  );
}
