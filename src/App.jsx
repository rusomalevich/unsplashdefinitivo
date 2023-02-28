import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home/Home'
import { Busqueda } from './components/Busqueda/Busqueda'
import { MuestraImagenes } from './components/MuestraImagenes/MuestraImagenes'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}>
        </Route>
        <Route path="/search" element={<Busqueda />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App