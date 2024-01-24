// Write your Color component here
import React, { useState } from 'react';
import './index.css';

// Color component
const Color = ({ color, setSelectedColor, selectedColor }) => {
  const isSelected = color === selectedColor;

  return (
    <div 
      className={`${color} ${isSelected ? 'selected' : ''}`} 
      onClick={() => setSelectedColor(color)} 
    ></div>
  );
}

// App component
const App = () => {
 
const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

export default App;