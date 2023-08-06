'use client';

import InventoryCard from "@/components/cards/inventoryCard";
import NewMaterialModal from "@/components/modals/material/newMaterialModal";
import UpdateMaterialModal from "@/components/modals/material/updateMaterialModal";
import { useEffect, useState } from "react";

export default function MaterialList({initialMaterials}) {
  const [materials, setMaterials] = useState(initialMaterials || []);
  useEffect(() => {
    require('./events');
  }, []);

  return (
    <div className="p-5 w-100">
      <UpdateMaterialModal/>
      <NewMaterialModal/>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Lista de materiales</h2>
        <button data-new-material-button className="add-button"/>
      </div>
      <div className="d-flex justify-content-center align-items-center content-container card-list" data-card-list>
        {materials.map((product, index) => {
          return (<InventoryCard elementName={product.name} elementId={product.id} elementQuantity={product.quantity} key={index}/>)
        })}
      </div>
    </div>
  );
}
