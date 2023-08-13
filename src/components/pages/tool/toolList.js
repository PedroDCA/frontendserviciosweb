'use client';

import InformationCard from "@/components/cards/informationCard";
import InventoryCard from "@/components/cards/inventoryCard";
import NewInventoryModal from "@/components/modals/base/newInventoryModal";
import UpdateMaterialModal from "@/components/modals/base/updateInventoryModal";
import { useEffect, useState } from "react";

export default function ToolList({initialTools}) {
  const [tools, setTools] = useState(initialTools || []);
  useEffect(() => {
    require('../../../events/modals/base/inventoryModalUpdates');
  }, []);

  const inventoryConfiguration = {
    inventoryCategory: 'tool',
    inventoryName: 'Herramienta'
  };

  return (
    <div>
      <NewInventoryModal inventoryConfiguration={inventoryConfiguration}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de herramientas</h2>
        <button data-new-inventory-button className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {tools.map((tool, index) => {
          return (<InformationCard elementName={tool.name} elementInformation={'Disponible'} key={index}/>)
        })}
      </div>
    </div>
  );
}
