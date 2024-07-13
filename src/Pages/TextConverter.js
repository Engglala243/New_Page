import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextConverter.css';
import Alert from '../Components/Alert';

function TextConverter() {
  document.title = 'React page - Text Convert';
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert(<b>"Convert to uppercase","Success"</b>);
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert(<b>"Convert to lowercase","Success"</b>);
  }

  // const handleClearClick = () => {
  //   let newText = '';
  //   setText(newText);
  //   const specialCharacters = text.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
  //   setSpecialCharacters(specialCharacters);

  // }

  const handleColorChange = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    showAlert(<b>"Random color","Success"</b>);
  }

  const handleSpeCharAnalyze = () => {
    const specialCharacters = text.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
    setSpecialCharacters(specialCharacters);
    showAlert(<b>"Analyze of special characters","Success"</b>);
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClearAndSpecCharAnalyze = () => {
    let newText = '';
    setText(newText);
    const specialCharacters = [];
    setSpecialCharacters(specialCharacters);
    showAlert(<b>"Clear all","Success"</b>);
    // handleClearClick();
    //handleSpeCharAnalyze();
  }

  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  const [specialCharacters, setSpecialCharacters] = useState([]);

  return (
    <>
      <Navigation/>
      <Alert alert={alert}/>
      <div className="textMessage-container">
        <header className="contact-header">
            <h1>Enter the text :-</h1>
        </header>
        <div className="container my-3 textarea-container">
          <div className="mb-10">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ color: color }}></textarea>
          </div>
        </div>
        <div className="button-container">
          <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleLoClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleClearAndSpecCharAnalyze}>Clear text</button>
          <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleColorChange}>Change text Color</button>
          <button className="btn btn-primary mx-1 my-1"  disabled={text.length===0} onClick={handleSpeCharAnalyze}>Analyze Special Characters</button>
          </div>
      </div>
      <div className="container">  
        <p>{text.split(/\s+/).filter((elemnet)=>{return elemnet.length !== 0}).length} Word and {text.length} characters</p>
        <p>{0.004 * text.split(" ").filter((elemnet)=>{return elemnet.length !== 0}).length} Time to read words in minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        <h3>Special Characters in Text</h3>
        <p>{specialCharacters.join(' ').length>0?specialCharacters:"Nothing to special characters"}</p>
      </div>
    </>
  );
}
export default TextConverter;