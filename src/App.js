import { useState} from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#121212"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#ffffff"
    }
  }
  return (
    <>
        <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />

        <Routes>


          <Route path="/about" element={<About mode={mode} />}/>

          <Route path="/" element={<div className="container my-4">
              <TextForm heading="Enter The Text To Analyze" mode={mode} />
            </div>}/>

        </Routes>

        </BrowserRouter>
    </>
  );
}

export default App;
