export default function NewInventoryModal({inventoryName, setNewInventoryInformation, setIsNewInventoryModalOpened}) {
  function saveButtonClick() {
    const newInventoryModal = document.getElementById('newInventoryModal');
    const inventoryNameElement = newInventoryModal.querySelector('[data-modal-inventory-name]');
    const inventoryName = inventoryNameElement.value.trim();
    if (!inventoryName) {
      alert('Por favor, agregue un nombre');
      return;
    }
  
    const inventorySizeElement = newInventoryModal.querySelector('[data-modal-inventory-size]');
    const inventorySize = Number(inventorySizeElement.value);
    if (inventorySize < 0) {
      alert('Por favor, ingrese un valor no negativo');
      return;
    }
  
    const inventoryInformation = {
      name: inventoryName,
      quantity: inventorySize,
    };

    setNewInventoryInformation({
      data: inventoryInformation,
      type: 'create'
    });
  }

  return (
    <div>
      <div className="modal fade" id="newInventoryModal" tabIndex="-1" aria-labelledby="newInventoryModalLabel" aria-hidden="true" data-new-inventory-modal data-modal>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newInventoryModalLabel">Agregar {inventoryName.toLowerCase()}</h1>
              <button type="button" className="btn-close" onClick={() => setIsNewInventoryModalOpened(false)} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Nombre de {inventoryName.toLowerCase()}:</p>
              <input type="text" data-modal-inventory-name/>
              <p>Ingrese el actual inventario:</p>
              <input type="number" data-modal-inventory-size defaultValue={0}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsNewInventoryModalOpened(false)}>Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={saveButtonClick}>Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}