'use client';

import ExistingProcess from "@/components/dropdown/base/existingProcess";
import { getProcessesByProductIdUrl } from "@/routing/apiRoutes";
import { useEffect, useState } from "react";

async function getProcessesByProductId(productId) {
  const processes = await fetch(`${getProcessesByProductIdUrl}?productId=${productId}`);

  return processes.json();
}

export default function StartProduction({productList}) {
  const [products, setProducts] = useState(productList);
  const [selectedProductId, setSelectedProductId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [processes, setProcesses] = useState([]);
  useEffect(()=> {
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
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Crear nueva producción</h2>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-3 align-middle">Seleccione el producto a producir</div>
        <select defaultValue={0} onChange={(event) => setSelectedProductId(Number(event.target.value))}>
          <option value={0}>Ver Productos</option>
          {products.map((product, index) => {
            return (<option value={product.id} key={index}>{product.name}</option>);
          })}
        </select>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center process_list w-100" data-process-list>
        {isLoading ? <div>loading</div> : processes.map((process, index) => (<ExistingProcess processInformation={process} workerList={[]} key={index}/>))}
      </div>
    </div>
  );
}
