import React from 'react';
import './Poster.css'; // Importing CSS for styling

const GreetingCard = () => {
  return (
    <div className="greeting-card">
      <h2>This is the children component</h2>
      <p>This is nested component inside another component</p>
    </div>
  );
};

export default GreetingCard;