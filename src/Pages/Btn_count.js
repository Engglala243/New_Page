import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import './Btn_conut.css';

function Btn_conut(){
  let [count, setCount] = useState(0);
  let [number1, setNumber1] = useState(null);
  let [number2, setNumber2] = useState(null);
  let [isEqual, setIsEqual] = useState(null);

  const handleClick = () =>{
    setCount(count + 1);
  };

  const generateRandomNumbers = () =>{
    let rand1 = Math.floor(Math.random() * 100) + 1;
    let rand2 = Math.floor(Math.random() * 100) + 1;
    setNumber1(rand1);
    setNumber2(rand2);
    setIsEqual(rand1 === rand2);
  };
  return(
    <>
      <Navigation />
      <div className="btn_count-container">
        <header className="btn_count-header">
          <h1>Click on button to count</h1>
        </header>
        <section className="btn_count-form-section">
          <div className="btn_count-form">
            <label htmlFor="btn_count">Number of counts on click: {count}</label>
            <button type="button" onClick={handleClick}>Click</button>
          </div>
        </section>
      </div>
      <div className="btn_count-container">
        <header className="random_number-header">
          <h1>Generate the random values</h1>
        </header>
        <section className="random-number-section">
          <label htmlFor="btn_count">Click on the button</label>
          <button type="button" onClick={generateRandomNumbers}>Click</button>
          {number1 !== null && number2 !== null && (
            <div className="random_number-results">
              <p>Number 1: {number1}</p>
              <p>Number 2: {number2}</p>
              <p style={{ color: isEqual ? 'green' : 'blue' }}>{isEqual ? 'true' : 'false'}</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
export default Btn_conut;