'use client';

import NewProcess from "@/components/dropdown/base/newProcess";
import { addProductionPlanning } from "@/routing/apiRoutes";
import { useEffect, useState } from "react";

function getStepInformationFromStepCard(stepElement) {
  const processId = Number(stepElement.querySelector('[data-process]').value);
  const materialListContainer = stepElement.querySelector('[data-material-list]');
  const materialListElements = materialListContainer.children;
  const materialInformation = Array.from(materialListElements).map(getMaterialInformationFromMaterialSection);
  const minutesRequired = Number(stepElement.querySelector('[data-process-time]').value);

  return {
    processId,
    minutesRequired,
    materials: materialInformation,
  }
}

function getMaterialInformationFromMaterialSection(materialElement) {
  const id = Number(materialElement.querySelector('[data-material-id]').value);
  const quantity = Number(materialElement.querySelector('[data-material-quantity]').value);

  return { id, quantity };
}

/**
 * Gets create a new product section.
 * @param {Array} materialList List of current materials.
 * @param {Array} processList List of current processes.
 * @returns The component for the create product page.
 */
export default function CreateProduct({materialList, processList}) {
  const [processRequiredSize, setProcessRequiredSize] = useState(1);
  const [newProductionPlanningInformation, setNewProductionPlanningInformation] = useState();

  function saveProductionPlanning() {
    const stepsListContainer = document.querySelector('[data-process-list]');
    const stepsListElement = stepsListContainer.children;
    const stepsInformation = Array.from(stepsListElement).map(getStepInformationFromStepCard);

    const productName = document.querySelector('[data-product-name]').value;

    const productionPlanningInformation = {
      name: productName,
      steps: stepsInformation,
    };

    setNewProductionPlanningInformation(productionPlanningInformation);
  }

  function createNewProductionPlanning(productionPlanningInformation) {
    const productionPlanningCall = fetch(addProductionPlanning, {
      body: JSON.stringify(productionPlanningInformation),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    productionPlanningCall.then((response) => {
      const message = response.ok ? 'Se ha creado el plano de producción correctamente' : 'No se ha podido guardar el plano de producción, por favor inténtelo de nuevo';
      alert(message);
    });
  }
  
  useEffect(() => {
    if (!newProductionPlanningInformation) {
      return;
    }

    createNewProductionPlanning(newProductionPlanningInformation)
    setProcessRequiredSize(1);

  }, [newProductionPlanningInformation]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Crear nuevo plano de producción</h2>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center planning_options">
        <div className="pb-4 d-flex flex-column justify-content-center align-items-center">
          <p>Agregue el nombre del producto.</p>
          <input type="text" data-product-name/>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center process_list w-100" data-process-list>
          {[...Array(processRequiredSize)].map((_, index) => <NewProcess id={index + 1} key={index} materialList={materialList} processList={processList}/>)}
        </div>
        <div className="add_process">
          <p className="option mt-3" onClick={() => setProcessRequiredSize(processRequiredSize + 1)}>Agregar proceso</p>
        </div>
        <button className="mt-3" onClick={saveProductionPlanning}>Guardar</button>
      </div>
    </div>
  );
}
