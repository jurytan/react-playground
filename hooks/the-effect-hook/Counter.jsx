// 02
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count: ${count}`);
  }); 

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

// 03
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => setClickCount((prev) => prev + 1);
  
  useEffect(()=> {
    document.addEventListener('mousedown', increment);
    return () => document.removeEventListener('mousedown', increment);
  })

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

