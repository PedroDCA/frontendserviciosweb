'use client';

import ExistingProcess from "@/components/dropdown/base/existingProcess";
import { getProcessesByProductIdUrl, startProductionUrl } from "@/routing/apiRoutes";
import { useEffect, useState } from "react";

async function getProcessesByProductId(productId) {
  const processes = await fetch(`${getProcessesByProductIdUrl}?productId=${productId}`);

  return processes.json();
}

function getMaterialAvailabilityDictionary(materialList) {
  const materialAvailabilityDictionary = {};
  materialList.forEach(material => {
    materialAvailabilityDictionary[material.id] = material.quantity;
  });

  return materialAvailabilityDictionary;
}

export default function StartProduction({productList, materialList, workerList}) {
  const [products, setProducts] = useState(productList);
  const [selectedProductId, setSelectedProductId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [processes, setProcesses] = useState([]);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [newProduction, setNewProduction] = useState();
  const materialAvailabilityDictionary = getMaterialAvailabilityDictionary(materialList);

  useEffect(()=> {
    if (selectedProductId === 0) {
      setIsLoading(false);
      setProcesses([]);
    }

    if (!selectedProductId) {
      return;
    }

    setIsLoading(true);
    const newProcesses = getProcessesByProductId(selectedProductId);
    newProcesses.then((response) => setProcesses(response.productionProcesses));
  }, [selectedProductId]);

  useEffect(() => {
    if (processes.length === 0) {
      return;
    }

    setIsLoading(false);
  }, [processes]);

  useEffect(() => {
    setEnableSubmit(!isLoading && processes.length > 0);
  }, [isLoading, processes]);

  useEffect(() => {
    if (!newProduction) {
      return;
    }

    const startProductionCall = fetch(startProductionUrl, {
      body: JSON.stringify(newProduction),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    startProductionCall.then(() => {
      alert('Producción creada');
      setSelectedProductId(0);
    });
  }, [newProduction]);

  function startProductionHandle() {
    const processElementList = Array.from(document.querySelector('[data-process-list]').children);
    const processInformation = processElementList.map((processElement) => {
      const productProcessId = Number(processElement.dataset.productProcessId);
      const selectedWorkerElement = processElement.querySelector('[data-selected-worker]');
      const selectedWorker = Number(selectedWorkerElement.value);

      return {
        productProcessId,
        employeeChargeId: selectedWorker,
      };
    });
    const datePicker = document.getElementById('start-date');
    const selectedDate = datePicker.value;
    setNewProduction({
      productId: selectedProductId,
      startDate: selectedDate,
      productionProcesses: processInformation
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Crear nueva producción</h2>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-3 align-middle">Seleccione el producto a producir</div>
        <select defaultValue={0} value={selectedProductId} onChange={(event) => setSelectedProductId(Number(event.target.value))}>
          <option value={0}>Ver Productos</option>
          {products.map((product, index) => {
            return (<option value={product.id} key={index}>{product.name}</option>);
          })}
        </select>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-3 align-middle">Seleccione la fecha de inicio de producción</div>
        <input id="start-date" type="date"/>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center process_list w-100" data-process-list>
        {isLoading ? <div>loading...</div> : processes.map((process, index) => (<ExistingProcess processInformation={process} materialDictionary={materialAvailabilityDictionary} workerList={workerList} key={index} setEnableSubmit={setEnableSubmit}/>))}
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center process_list w-100">
        <button disabled={!enableSubmit} className="mt-4" onClick={startProductionHandle}>Empezar producción</button>
      </div>
    </div>
  );
}
