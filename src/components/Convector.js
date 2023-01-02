import React, { useState } from 'react';
function Convector(){
  let [color, setColor] = useState('');
  function hex2rgb(c) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }
  
  let printResult = hex2rgb(color) ? hex2rgb(color) : "#CCCCCC";
  
  let bgStyle = {backgroundColor: "red"};
  if (color.length === 7) {
    bgStyle = {backgroundColor: color}
  }

  function colorChange(event) {
    setColor(event.target.value);
	}

let rgbFormat =  `rgb(${printResult.r}, ${printResult.g}, ${printResult.b})`;
let correctColor = (printResult.r && printResult.g && printResult.b && color.length === 7) ? rgbFormat : "Ошибка!";

  return <section className = "wrapper" style={bgStyle}>
    <input value={color} onChange={colorChange} />
    <div className = "result">{correctColor}</div>
  </section>
}
export default Convector