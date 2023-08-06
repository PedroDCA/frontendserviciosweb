'use client';

import { Modal } from 'bootstrap';

export default function NewMaterialModal({saveMaterial}) {
  async function SaveButtonClick() {
    const materialNameElement = document.querySelector('[data-modal-material-name]');
    const materialName = materialNameElement.value.trim();
    if (!materialName) {
      alert('Por favor, agregue un nombre');
      return;
    }

    const materialSizeElement = document.querySelector('[data-modal-size]');
    const materialSize = Number(materialSizeElement.value);
    if (materialSize < 0) {
      alert('Por favor, ingrese un valor no negativo');
      return;
    }

    const materialInformation = {
      name: materialName,
      quantity: materialSize,
    }
    const isMaterialSaved = await saveMaterial(materialInformation);
    const message = isMaterialSaved ? 'El material se ha guardado correctamente' : 'No se ha podido guardar el material, por favor inténtelo de nuevo';
    alert(message);
    closeModal();
  }

  function closeModal() {
    const modalElement = document.getElementById('newMaterialModal');
    const modal = Modal.getInstance(modalElement);

    modal.hide();
  }

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
              <button type="button" className="btn btn-primary" onClick={SaveButtonClick} >Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}