import { useState } from "react";
import WarehouseCard from "../components/WareHouseCard.jsx";
import "../WareHousePage.css";

export let WareHousePage = () => {
    const [warehouseCards, setWarehouseCards] = useState([
        { id: 1, name: "Ware1", capacity: "5000" },
      ]);
    
      const handleAddCard = () => {
        const newCard = {
          id: warehouseCards.length + 1,
          name: "",
          capacity: "",
        };
        setWarehouseCards((prevCards) => [...prevCards, newCard]);
      };
    
      return (
        <div className="warehouse-container">
          {warehouseCards.map((card) => (
            <WarehouseCard
              key={card.id}
              id={card.id}
              name={card.name}
              capacity={card.capacity}
            />
          ))}
          <button onClick={handleAddCard}>+</button>
        </div>
      );
}
