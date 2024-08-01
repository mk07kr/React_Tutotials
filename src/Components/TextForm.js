import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const ChangeUpCase = () => {
    let newText = text.toUpperCase();
    // console.log(newText);
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const ChangeLwrCase = () => {
    let newText = text.toLowerCase();
    // console.log(newText);
    setText(newText);
  };
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  const ClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="container" width="100vw" height="100vh"
      style={{
  
        color: props.mode === "dark" ? "white" : "black"
      }}
    >
      {/* Form Operation */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onChange}
          id="myBox"
          style={{ backgroundColor: props.mode === "dark" ? "grey" : "white",color: props.mode === "dark" ? "white" : "black", }}
          rows="7"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={ChangeUpCase}>
          Convert UpperCase
        </button>
        <button className="btn btn-secondary mx-3 my-2" onClick={ChangeLwrCase}>
          Convert LowerCase
        </button>
        <button className="btn btn-success mx-1 my-2" onClick={ClearText}>
          Clear All
        </button>
        <button className="btn btn-success mx-1 my-2" onClick={handleReverse}>
          Reverse Words
        </button>
        <button
          className="btn btn-success mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-success mx-1 my-2" onClick={handleCopy}>
          Copy text
        </button>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something above to Preview it Here"}
        </p>
      </div>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "Enter heading",
};
