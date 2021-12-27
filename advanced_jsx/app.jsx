// 01 
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = <div className='big'>I AM A BIG DIV</div>

ReactDOM.render(myDiv, document.getElementById('app'));

// 02 - Always include self-closing slash
const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );

// 03
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  // This just prints 2 + 3
  <h1>2 + 3</h1>,
  document.getElementById('app')
);

// 04 - use {} to evaluate logic between tags
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  // This prints 5
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

// 05
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = (<h1>2 + 3 = {2 + 3}</h1>)

ReactDOM.render(math, document.getElementById('app'));

// 06
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

// 07
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = (
  <img 
    src={goose}
  />
)

ReactDOM.render(gooseImg, document.getElementById('app'));

// 08
// You can find all the events here: http://facebook.github.io/react/docs/events.html#supported-events
import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
    onClick={makeDoggy} 
  />
);

ReactDOM.render(kitty, document.getElementById('app'));