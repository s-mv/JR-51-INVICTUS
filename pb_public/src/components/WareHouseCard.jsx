import React from 'react';
import "../css/WareHouseCard.css";
import { useState } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { getUserID } from '../firebase.js';


function WarehouseCard({ id, name, capacity, size }) {
    const navigate = useNavigate();

    WarehouseCard.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        capacity: PropTypes.number,
        size: PropTypes.number,
    };

    const [isEditable, setIsEditable] = useState(false);

    const handleSaveClick = () => {
        // Add your save logic here
        console.log('Saved:', { id, name, capacity });
        setIsEditable(false); // Disable editing after saving
    };

    const handleDeleteClick = () => {
        //Delete logic
    }

    const handleEditClick = () => {
        //Edit logic
        setIsEditable(true); //Enables editing again
    }

    const handleGoodsStatusClick = () => {
        navigate("/goods-status", { state: { id } });
    }
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-id">
                    <h2>ID: {id}</h2>
                </div>
                <div className="card-name">
                    <h3>NAME: {isEditable ? <input type="text" value={name} onChange={(e) => { setDB(e.target.value, "companies", "companies", getUserID(), "warehouses", id, "name") }} /> : name}</h3>
                </div>
                <div className="card-capacity">
                    <p>CAPACITY: {isEditable ? <input type="text" value={capacity} onChange={(e) => { setDB(~~e.target.value, "companies", "companies", getUserID(), "warehouses", id, "cap") }} /> : capacity}</p>
                </div>
                <div className="card-capacity">
                    <p>UTILIZED CAPACITY: {isEditable ? <input type="text" value={size} onChange={e => { setDB(~~e.target.value, "companies", "companies", getUserID(), "warehouses", id, "size") }} /> : size}</p>
                </div>
            </div>
            <div className="button-container">
                <div className="btn">
                    {isEditable ? <button onClick={handleSaveClick} className='btn1'>Save</button> : <button onClick={handleEditClick} className='btn3'>Edit</button>}
                </div>
                <div className="btn">
                    <button onClick={handleDeleteClick} className='btn2'>Delete</button>
                </div>
                <div className="btn">
                    <button onClick={handleGoodsStatusClick} className='btn4'>Goods Status</button>
                </div>
            </div>
        </div>
    );
};

export default WarehouseCard;
