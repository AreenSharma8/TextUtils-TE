import React, { useState, useEffect } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light') // 'light' or 'dark'
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  useEffect(() => {
    // update body background and text color when mode changes
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white'
    document.body.style.color = mode === 'dark' ? 'white' : 'black'
  }, [mode])

  const toggleMode = () => {
    setMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      showAlert(`${newMode === 'dark' ? 'Dark' : 'Light'} mode has been enabled`, "success");
      return newMode;
    })
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
