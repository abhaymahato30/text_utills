import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // text="new_text";//Wrong way to change the state
  // setText('new_text');//Wright way to change the text

  const handleUpClick = () => {
    // console.log("this is button to upperCase the letters" + text);
    let newtext =text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    // console.log("this is button to upperCase the letters" + text);
    let newtext =text.toLowerCase();
    setText(newtext);
  };
  const handleClearClick = () => {
    // console.log("this is button to upperCase the letters" + text);
    let newtext ='';
    setText(newtext);
  };

  const handleOnchange = (event) => {
    // console.log("This is on on change value");
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}       placeholder="Enter The Text" id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        CONVERT TO UPPERCLASS
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        CONVERT TO LOWERCLASS
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          CLEAR
        </button>
      </div>
      </div>

    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black',}}>
      <h1> YOUR TEXT SUMMARY</h1>
      <p>{text.split(" ").length} WORDS AND {text.length} CHARACTERS </p>
      <p>{0.008 *text.split(" ").length} MINUTES TO READ</p>
     <h2>PREVIEW</h2>
     <p>{text.length>0?text:"ENTER YOUR TEXT TO PREVIEW"}</p>

    </div>

    </>
  );
}
