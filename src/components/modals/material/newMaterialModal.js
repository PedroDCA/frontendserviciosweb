export default function NewMaterialModal() {
  return (
    <div>
      <div className="modal fade" id="newMaterialModal" tabIndex="-1" aria-labelledby="newMaterialModalLabel" aria-hidden="true" data-modal>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newMaterialModalLabel">Agregar nuevo material</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Nombre del material:</p>
              <p data-modal-material></p>
              <input type="text" data-modal-material-name/>
              <p>Ingrese el actual inventario:</p>
              <input type="number" data-modal-size defaultValue={0}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-save-material>Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}