import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Spot from './pages/Spot'
import About from './pages/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spot' element={<Spot />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
