// Intro to JSX - Codeacademy

// 01-04 =============================================
const h1 = <h1>Hello world</h1>;

// 05 =============================================
{/* <p>Hello world</p> */}

// 06 =============================================
const myArticle = <article></article>;

// 07 =============================================
const p1 = <p id='large'>foo</p>
const p2 = <p id='small'>bar</p>

// 08 =============================================
const myDiv = (
    <div>
      <h1>Hello world</h1>
    </div>
  );

// 09 =============================================
const blog = (
    <div>
      <img src="pics/192940u73.jpg" />
      <h1>
        Welcome to Dan's Blog!
      </h1>
      <article>
        Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
      </article>
    </div>
  );
   
// 10 =============================================
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

// 11 =============================================
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

// 12 =============================================
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

// 13 =============================================
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (<ul>
  <li>Bollocks</li>
  <li>Buttmunch</li>
  <li>Boobies</li>
</ul>);

ReactDOM.render(myList, document.getElementById('app'));