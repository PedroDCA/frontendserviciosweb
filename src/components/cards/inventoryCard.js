'use client';

export default function InventoryCard({elementName, elementId, elementQuantity}){
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
        <button data-open-update-modal data-element-name={elementName} data-element-id={elementId}>Modificar inventario</button>
      </p>
    </div>
  )
}