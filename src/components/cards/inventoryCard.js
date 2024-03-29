'use client';

/**
 * Gets a card with the current item stock and be able to update it.
 * @param {string} elementName Name to be shown.
 * @param {Number} elementId Identifier for the element.
 * @param {Number} elementQuantity The quantity for the item.
 * @param {function} setIsUpdatingInventoryModalOpened Setter to define if the updating modal is opened.
 * @returns 
 */
export default function InventoryCard({elementName, elementId, elementQuantity, setIsUpdatingInventoryModalOpened}){
  /**
   * Opens the updating modal.
   * @param {Event} event Event that was triggered.
   */
  function openUpdateModal(event) {
    const clickedElement = event.target;
    const { elementName, elementId } = clickedElement.dataset;
    const updateModalElement = document.getElementById('updateModal');
    const modalMaterialElement = updateModalElement.querySelector('[data-modal-inventory-name]');
    const modalMaterialIdElement = updateModalElement.querySelector('[data-modal-inventory-id]');
  
    modalMaterialElement.textContent = elementName;
    modalMaterialIdElement.value = elementId;
  
    setIsUpdatingInventoryModalOpened(true);
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
        <button onClick={openUpdateModal} data-element-name={elementName} data-element-id={elementId}>Modificar inventario</button>
      </p>
    </div>
  )
}