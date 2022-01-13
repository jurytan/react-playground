// 02
// import the default export and the named export `useState` from the 'react' library impor
import React, { useState } from 'react';


export default function ColorPicker() {
 // call useState and assign its return values to `color` and `setColor`
 // this is basically our constructor for the state
 const [color, setColor] = useState();

 // notice we don't need this. keyword here
 const divStyle = {backgroundColor: color};

  // to pass the function call, we use a lambda function
  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

// 03
import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
 // By adding a value in the useState, it provides a default value
 // this uses array destructuring (assigns array values to those variables)
 const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}



