// import About from "./Components/About";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1900);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("DarkMode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Enabled", "success");
    }
  };

  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm
                  showAlert={showAlert}
                  heading="Enter your Text here"
                  mode={mode}
                  toggleMode={toggleMode}
                />
        </div>
      {/* USING ROUTER PATH ROUTES
       <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        < className="container my-3">
          {/* using routes in place of switch and using element is mandatory in case of Routes */}
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your Text here"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            />
          </Routes>
        </div>
      </Router> */} 
      
    </>
    );
  
}

export default App;
