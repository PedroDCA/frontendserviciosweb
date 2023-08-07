export default function UpdateMaterialModal({inventoryConfiguration}) {
  const { inventoryCategory, inventoryName } = inventoryConfiguration;
  return (
    <div>
      <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true" data-modal data-update-type={inventoryCategory}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateModalLabel">Actualizar cantidad</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{inventoryName}:</p>
              <p data-modal-inventory-name></p>
              <input type="hidden" data-modal-inventory-id/>
              <p>Ingrese la nueva cantidad:</p>
              <input type="number" data-modal-inventory-size/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-save>Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}