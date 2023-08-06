'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewMaterialModal from "@/components/modals/material/newMaterialModal";
import UpdateMaterialModal from "@/components/modals/material/updateMaterialModal";

export default function Home() {
  function saveChangesClick() {
    const modal = document.querySelector('[data-modal]');
    const modalMaterialIdElement = modal.querySelector('[data-modal-material-id]');
    const modalMaterialSizeElement = modal.querySelector('[data-modal-size]');

    console.log(modalMaterialIdElement.value, modalMaterialSizeElement.value);
  }

  return (
    <div className="p-5 w-100">
      <UpdateMaterialModal saveChangesFunction={saveChangesClick}/>
      <NewMaterialModal/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button data-bs-toggle="modal" data-bs-target="#newMaterialModal" className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list">
        <InventoryCard elementName='Mercurio' elementId='1' elementQuantity='3'/>
        <InventoryCard elementName='Madera' elementId='2' elementQuantity='2'/>
        <InventoryCard elementName='Barra de Metal' elementId='5' elementQuantity='10'/>
        <InventoryCard elementName='Pintura blanca' elementId='7' elementQuantity='3'/>
        <InventoryCard elementName='Pintura negra' elementId='99' elementQuantity='2'/>
        <InventoryCard elementName='Tela' elementId='8' elementQuantity='0'/>
        <InventoryCard elementName='Tela' elementId='8' elementQuantity='0'/>
        <InventoryCard elementName='Tela' elementId='8' elementQuantity='0'/>
        <InventoryCard elementName='Tela' elementId='8' elementQuantity='0'/>
      </div>
    </div>
  );
}
