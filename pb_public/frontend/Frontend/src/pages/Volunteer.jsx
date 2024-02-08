import React from 'react';
const founders = [
  {
    name: 'Nickhil Shivakumar',
     
  
    image: " images cat/1f5b1a0c-08b8-4e3b-b149-748018527030.jpg", // Replace with actual image file
  },
  {
    name: 'Harsh Ahuja',
    
    image: 'images cat/747bb105-9292-4ed9-98af-911c1216f163.jpg', // Replace with actual image file
  },

  {
    name: 'Piyush',
    
    image: 'images cat/9513b570-4e2a-4c3d-ac74-b49c58c94787.jpg', // Replace with actual image file
  },
  {
    name: 'Karan Bhatia',
    
    image: 'images cat/d20226c5-6cb4-47c5-a8c9-4a6fff0ffb69.jpg', // Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  