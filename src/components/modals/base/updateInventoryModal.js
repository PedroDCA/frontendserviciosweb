export default function UpdateMaterialModal({inventoryName, setNewInventoryInformation, setIsUpdatingInventoryModalOpened}) {
  function saveChangesClick() {
    const modal = document.getElementById('updateModal');
    const modalInventoryIdElement = modal.querySelector('[data-modal-inventory-id]');
    const inventoryId = Number(modalInventoryIdElement.value);
    
    const inventorySizeElement = document.querySelector('[data-modal-inventory-size]');
    const inventorySize = Number(inventorySizeElement.value);
    if (inventorySize < 0) {
      alert('Por favor, ingrese un valor no negativo');
      return;
    }
  
    const inventoryInformation = {
      id: inventoryId,
      quantity: inventorySize,
    };
  
    setNewInventoryInformation({
      type: 'update',
      data: inventoryInformation
    });
  }
  return (
    <div>
      <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true" data-modal>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateModalLabel">Actualizar cantidad</h1>
              <button type="button" className="btn-close" onClick={() => setIsUpdatingInventoryModalOpened(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{inventoryName}:</p>
              <p data-modal-inventory-name></p>
              <input type="hidden" data-modal-inventory-id/>
              <p>Ingrese la nueva cantidad:</p>
              <input type="number" data-modal-inventory-size/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsUpdatingInventoryModalOpened(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={saveChangesClick}>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}