'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewInventoryModal from "@/components/modals/base/newInventoryModal";
import UpdateMaterialModal from "@/components/modals/base/updateInventoryModal";
import { useEffect, useState } from "react";

export default function ToolList({initialTools}) {
  const [tools, setTools] = useState(initialTools || []);
  useEffect(() => {
    require('../../modals/base/events');
  }, []);

  const inventoryConfiguration = {
    inventoryCategory: 'tool',
    inventoryName: 'Herramienta'
  };

  return (
    <div className="p-5 w-100">
      <UpdateMaterialModal inventoryConfiguration={inventoryConfiguration}/>
      <NewInventoryModal inventoryConfiguration={inventoryConfiguration}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de herramientas</h2>
        <button data-new-inventory-button className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {tools.map((tool, index) => {
          return (<InventoryCard elementName={tool.name} elementId={tool.id} elementQuantity={tool.quantity} key={index}/>)
        })}
      </div>
    </div>
  );
}
