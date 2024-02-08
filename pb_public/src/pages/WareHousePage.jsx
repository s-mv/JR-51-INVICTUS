import React from "react";
import { useState } from "react";
import WarehouseCard from "../components/WareHouseCard.jsx";
import "../css/WareHousePage.css";
import { Warehouse } from "../../mgmt/Warehouse.js";
import { pb } from "../backend.js";

let warehouseDB = [];

let result = await pb.collection("companies").getOne("2j9cj2y8p8gawli");
console.log(result.warehouses);

function WarehousePage() {
  let warehouses = [];
  for (let warehouse of warehouseDB) {
    warehouses.push(new Warehouse(warehouse.id, warehouse.name, warehouse.size, warehouse.capacity))
  }

  const [warehouseCards, setWarehouseCards] = useState(warehouses);

  
  const handleAddCard = async () => {
    let record = await pb.collection("warehouses").create({
      name: "Notebooks",
      size: 20,
      capacity: 20,
    });
    const newCard = new Warehouse();

    setWarehouseCards((prevCards) => [...prevCards, newCard]);
  };


  return (
    <div className="warehouse-container">
      {warehouseCards.map((card) => (
        <WarehouseCard
          key={card.id}
          id={card.id}
          name={card.name}
          size={card.size}
          capacity={card.capacity}
        />))}
      <div className="plus-container">
        <button onClick={handleAddCard} className="add">+</button>
      </div>
    </div>
  );
}

export default WarehousePage;