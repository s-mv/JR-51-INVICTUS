import { useState } from "react";
import { Queue } from "../../mgmt/Queue.js";
import { Item } from "../../mgmt/Item.js";
import { QueueCard } from "../components/QueueCard";
import { useLocation } from "react-router-dom";
import "../css/QueuePage.scss";



export let QueuePage = () => {
  let inflow = getDB("companies", "companies", getUserID(), "inflow");
  let outflow = getDB("companies", "companies", getUserID(), "outflow");

  const { state } = useLocation();
  const id = state && state.id;
  // const [value, setValue] = useState(0);

  return (
    <div className="queue-page">
      <div className="title">
        <h1>Goods Status for Warehouse {id}</h1>
      </div>
      <div className="columns">
        <div className="left-column">
          {inflow.data.map(
            (value, index) => <QueueCard index={value.id} value={value.factor} key={index} />
          )}
        </div>

        <div className="center-column">
          <button>Add inflow</button>
          <button>Add outflow</button>
        </div>
        <div className="right-column">
          {outflow.data.map(
            (value, index) => <QueueCard index={value.id} value={value.factor} key={index} />
          )}
        </div>
      </div>
    </div>);
}