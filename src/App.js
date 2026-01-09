import React, { useState, useEffect } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light') // 'light' or 'dark'

  useEffect(() => {
    // update body background and text color when mode changes
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white'
    document.body.style.color = mode === 'dark' ? 'white' : 'black'
  }, [mode])

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
