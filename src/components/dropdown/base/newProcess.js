'use client';

import { useEffect } from 'react';

export default function NewProcess({id}) {
  return (
    <div className="new_process d-flex flex-column justify-content-center align-items-center">
      <button className="btn-toggle d-inline-flex align-items-center border-3" aria-expanded="false" data-toggle-button>Paso {id}</button>
      <div className="collapse w-100" data-toggle-list>
        <ul className="btn-toggle-nav list-unstyled fw-normal p-4 small process_information">
          <li>
            <div className="d-flex flex-column mb-3 option-line">
              <p>Proceso por realizar</p>
              <select className="w-50">
                <option>Pintar</option>
                <option>Lijar</option>
              </select>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center material_information mb-4">
              <div className="d-flex flex-column justify-content-center align-items-center option-line">
                <p>Material</p>
                <select>
                  <option>Madera</option>
                  <option>Pintura blanca</option>
                  <option>Pintura naranja</option>
                </select>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center option-line">
                <p>Cantidad</p>
                <input type="number" defaultValue={1}></input>
              </div>
            </div>
            <p className="option">Agregar otro material</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
