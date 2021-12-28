import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

let title = '';
let images = [];
let fun_fact = '';
const showBackground = true;
for (const animal in animals) {
  images.push(<img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
  />);
}

function displayFact(e) {
  let animal_selected = animals[e.target.alt];
  let random_fact_index = Math.floor(Math.random() * animal_selected.facts.length);
  fun_fact = animal_selected.facts[random_fact_index];
  console.log(fun_fact);
  let fact_element = document.getElementById('fact');
  fact_element.innerHTML = fun_fact;
}

const background = (<img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
/>);
// const animalFactsTitle = title === '' ? <h1>Click an animal for a fun fact</h1> : <h1>{title}</h1>;
const animalFactsTitle = <h1>{title || 'Click an animal for a fun fact'}</h1>;

const animalPictures = (<div className='animals'>
  {images}
</div>);

const animalFacts = <p id='fact'></p>

const app = (<div>
  {animalFactsTitle}
  {showBackground && background}
  {animalPictures}
  {animalFacts}
</div>);

ReactDOM.render(app, document.getElementById('root'));