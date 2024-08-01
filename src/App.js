// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alerts";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");


  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#212529';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};


  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert="This is a Alert"/>
      <div className="container my-3">
        <TextForm
          heading="Enter your Text here"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </>
  );
}

export default App;
