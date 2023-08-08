'use client';

import NewProcess from "@/components/dropdown/base/newProcess";
import { useState } from "react";

export default function CreateProduct() {
  const [processRequiredSize, setProcessRequiredSize] = useState(1);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Crear nuevo plano de producción</h2>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center planning_options">
        <div className="pb-4 d-flex flex-column justify-content-center align-items-center">
          <p>Agregue el nombre del producto.</p>
          <input type="text"/>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center process_list w-100" data-process-list>
          {[...Array(processRequiredSize)].map((_, index) => <NewProcess id={index + 1} key={index}/>)}
        </div>
        <div className="add_process">
          <p className="option mt-3" onClick={() => setProcessRequiredSize(processRequiredSize + 1)}>Agregar proceso</p>
        </div>
        <button className="mt-3" data-save-planning>Guardar</button>
      </div>
    </div>
  );
}
