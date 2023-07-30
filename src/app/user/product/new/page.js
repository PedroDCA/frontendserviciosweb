import InventoryCard from "@/components/cards/inventoryCard";

export default function Home() {
  
  return (
    <div className="d-flex justify-content-center align-items-center content-container card-list">
      <InventoryCard/>
      <InventoryCard/>
      <InventoryCard/>
      <InventoryCard/>
    </div>
  );
}
