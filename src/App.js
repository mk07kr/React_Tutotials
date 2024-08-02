// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import About from "./Components/About";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({msg:message,
    type:type});

    setTimeout(() => {
      setAlert(null);
    }, 1900);
  }


  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#212529';
        showAlert("DarkMode Enabled","success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("LightMode Enabled","success");
    }
};


  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your Text here"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
      <About title="About Us"/>
    </>
  );
}

export default App;
