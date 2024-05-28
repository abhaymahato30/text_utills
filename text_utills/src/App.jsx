import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from "./components/About.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the dark mode is onn or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#01021c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
    <>
      <Navbar tittle=" Text_utills" mode={mode} toggleMode={toggleMode} />
 <Routes>
      <Route
         path="/"
         element={<div className="container">
         <TextForm heading="ENTER THE TEXT TO ANALYZE" mode={mode} />
       </div> }
            
        
      >
      </Route>

        
       <Route path="/about" element={<About />}></Route> 
    </Routes>
      </>

    </Router>
  );
}

export default App;
