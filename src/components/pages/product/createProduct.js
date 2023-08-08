'use client';

import NewProcess from "@/components/dropdown/base/newProcess";
import { useEffect, useState } from "react";

export default function CreateProduct() {

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Crear nuevo plano de producción</h2>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center process_list">
        <div className="pb-4 d-flex flex-column justify-content-center align-items-center">
          <p>Agregue el nombre del producto.</p>
          <input type="text"/>
        </div>
        <NewProcess id={1}/>
      </div>
    </div>
  );
}
