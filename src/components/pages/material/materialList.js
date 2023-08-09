'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewInventoryModal from "@/components/modals/base/newInventoryModal";
import UpdateInventoryModal from "@/components/modals/base/updateInventoryModal";
import { useEffect, useState } from "react";

export default function MaterialList({initialMaterials}) {
  const [materials, setMaterials] = useState(initialMaterials || []);
  useEffect(() => {
    require('../../../events/modals/base/inventoryModalUpdates');
  }, []);

  const inventoryConfiguration = {
    inventoryCategory: 'material',
    inventoryName: 'Material'
  };
  
  return (
    <div>
      <UpdateInventoryModal inventoryConfiguration={inventoryConfiguration}/>
      <NewInventoryModal inventoryConfiguration={inventoryConfiguration}/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button data-new-inventory-button className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {materials.map((material, index) => {
          return (<InventoryCard elementName={material.name} elementId={material.id} elementQuantity={material.quantity} key={index}/>)
        })}
      </div>
    </div>
  );
}
