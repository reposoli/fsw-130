import React from "react"
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./components/Home"
import Arsenal from "./components/Arsenal"
import Contact from "./components/Contact"

import Footer  from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />      
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Arsenal" element={<Arsenal/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Footer />
    </div>
  
  )
}
        

export default App