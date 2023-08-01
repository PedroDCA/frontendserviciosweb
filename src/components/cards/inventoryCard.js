'use client';

import { useEffect } from "react";

export default function InventoryCard({elementName, elementId, elementQuantity}){
  function updateModal() {
    const modal = document.querySelector('[data-modal]');
    const modalMaterialElement = modal.querySelector('[data-modal-material]');
    const modalMaterialIdElement = modal.querySelector('[data-modal-material-id]');

    modalMaterialElement.textContent = elementName;
    modalMaterialIdElement.value = elementId;
  }
  return (
    <div className="card p-1">
      <div className="title-card d-flex justify-content-start align-items-center">
        <p className="inventory-icon d-flex justify-content-center align-items-center p-3">
          {elementName.charAt('0').toUpperCase()}
        </p>
        {elementName}
      </div>
      <p>
        Cantidad: {elementQuantity}
        <button data-bs-toggle="modal" data-bs-target="#updateModal" onClick={updateModal}>Modificar inventario</button>
      </p>
    </div>
  )
}