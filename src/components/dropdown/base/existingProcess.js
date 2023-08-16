function MaterialSection({material}) {
  return (
    <div className="d-flex align-items-center material_information mb-4">
      <div className="d-flex flex-column justify-content-center align-items-center option-line">
        <p>Material: {material.name}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center option-line">
        <p>Requiere: {material.required}</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center option-line">
        <p>Disponible: {material.available}</p>
      </div>
    </div>
  );
}

export default function ExistingProcess({processInformation, workerList, materialDictionary, setEnableSubmit}) {
  const validWorkers = workerList.filter(worker => worker.roleId === processInformation.role.id);
  return (
    <div className="new_process d-flex flex-column justify-content-center align-items-center" data-product-process-id={processInformation.id}>
      <button className="btn-toggle d-inline-flex align-items-center border-3" aria-expanded="false" data-toggle-button>{processInformation.name} - Tiempo requerido: {processInformation.minutesRequired} minutos</button>
      <div className="collapse w-100" data-toggle-list>
        <ul className="btn-toggle-nav list-unstyled fw-normal p-4 small process_information">
          <li>
            <div className="d-flex flex-column mb-3 option-line">
              <p>Encargado</p>
              <select className="w-50" data-selected-worker>
                {validWorkers.map((worker, index) => (<option key={index} value={worker.id}>{`${worker.firstName} ${worker.lastName}`}</option>))}
              </select>
            </div>
          </li>
          <li data-material-list>
            {processInformation?.materials?.map((material, index) => {
              const stockMaterial = materialDictionary[material.id];
              if (stockMaterial < material.quantity) {
                setEnableSubmit(false);
              }
              const materialInformation = {
                name: material.name,
                required: material.quantity,
                available: stockMaterial,
              }
              return <MaterialSection key={index} material={materialInformation}/>
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
