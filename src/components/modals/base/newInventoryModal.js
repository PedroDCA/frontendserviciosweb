export default function NewInventoryModal({inventoryConfiguration}) {
  const { inventoryCategory, inventoryName } = inventoryConfiguration;
  return (
    <div>
      <div className="modal fade" id="newInventoryModal" tabIndex="-1" aria-labelledby="newInventoryModalLabel" aria-hidden="true" data-modal data-inventory-category={inventoryCategory}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newInventoryModalLabel">Agregar {inventoryName.toLowerCase()}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Nombre de {inventoryName.toLowerCase()}:</p>
              <input type="text" data-modal-inventory-name/>
              <p>Ingrese el actual inventario:</p>
              <input type="number" data-modal-inventory-size defaultValue={0}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-create-inventory>Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}