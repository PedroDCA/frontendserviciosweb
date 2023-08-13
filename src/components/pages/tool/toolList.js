'use client';

import InformationCard from "@/components/cards/informationCard";
import NewInventoryModal from "@/components/modals/base/newInventoryModal";
import { addToolApiUrl, getToolsApiUrl } from "@/routing/apiRoutes";
import { useEffect, useState } from "react";

export default function ToolList({initialTools}) {
  const [tools, setTools] = useState(initialTools || []);
  const [isNewToolModalOpened, setIsNewToolModalOpened] = useState(false);
  const [shouldUpdateList, setShouldUpdateList] = useState(false);
  const [newToolInformation, setNewToolInformation] = useState();

  useEffect(() => {
    if (!newToolInformation) {
      return;
    }

    const addToolCall = fetch(addToolApiUrl, {
      body: JSON.stringify(newToolInformation.data),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    });

    addToolCall.then((response) => {
      setShouldUpdateList(response.ok);
      const message = response.ok ? 'Se ha guardado la herramienta correctamente' : 'No se ha podido guardar la herramienta, por favor inténtelo de nuevo';
      alert(message);
      setIsNewToolModalOpened(false);
    });
  }, [newToolInformation]);
  
  useEffect(() => {
    const { Modal } = require('bootstrap');
    const modalElement = document.getElementById('newInventoryModal');
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    if (isNewToolModalOpened) {
      modal.show();
    } else {
      modal.hide();
    }
  }, [isNewToolModalOpened]);

  useEffect(() => {
    if (!shouldUpdateList) {
      return;
    }

    const getAllTools = fetch(getToolsApiUrl);
    getAllTools.then((response) => response.json()).then((updatedTools) => setTools(updatedTools));
  }, [shouldUpdateList]);

  useEffect(() => {
    setShouldUpdateList(false);
  }, [tools]);

  return (
    <div>
      <NewInventoryModal inventoryName={'Herramienta'} setNewInventoryInformation={setNewToolInformation} setIsNewInventoryModalOpened={setIsNewToolModalOpened}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de herramientas</h2>
        <button onClick={() => setIsNewToolModalOpened(true)} className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {tools.map((tool, index) => {
          return (<InformationCard elementName={tool.name} elementInformation={'Disponible'} key={index}/>)
        })}
      </div>
    </div>
  );
}
