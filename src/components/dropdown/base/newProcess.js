'use client';

import { useState } from 'react';

function MaterialSection({materialList}) {
  return (
    <div className="d-flex align-items-center material_information mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center option-line">
        <p>Material</p>
        <select data-material-id>
          {materialList.map((material, index) => {
            return (<option value={material.id} key={index}>{material.name}</option>);
          })}
        </select>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center option-line">
        <p>Cantidad</p>
        <input type="number" defaultValue={1} data-material-quantity></input>
      </div>
    </div>
  );
}

export default function NewProcess({id, materialList, processList}) {
  const [materialRequiredSize, setMaterialRequiredSize] = useState(0);
  return (
    <div className="new_process d-flex flex-column justify-content-center align-items-center">
      <button className="btn-toggle d-inline-flex align-items-center border-3" aria-expanded="false" data-toggle-button>Paso {id}</button>
      <div className="collapse w-100" data-toggle-list>
        <ul className="btn-toggle-nav list-unstyled fw-normal p-4 small process_information">
          <li>
            <div className='d-flex align-items-center material_information mb-4'>
              <div className="d-flex flex-column mb-3 option-line">
                <p>Proceso por realizar</p>
                <select className="w-50" data-process>
                  {processList.map((processInformation, index) => (<option value={processInformation.id} key={index}>{processInformation.name}</option>))}
                </select>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center option-line">
                <p>Minutos requeridos</p>
                <input type="number" defaultValue={1} data-process-time></input>
              </div>
            </div>
          </li>
          <li data-material-list>
            {[...Array(materialRequiredSize)].map((_, index) => <MaterialSection key={index} materialList={materialList}/>)}
          </li>
          <li>
            <p className="option" onClick={() => setMaterialRequiredSize(materialRequiredSize + 1)}>Agregar material</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
