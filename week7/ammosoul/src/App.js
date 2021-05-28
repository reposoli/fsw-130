import React from "react"
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from "./components/Home"
import Arsenal from "./components/Arsenal"
import Contact from "./components/Contact"

import Footer  from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />      
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Arsenal" component={Arsenal}/>
            <Route path="/Contact" component={Contact}/>
        </Switch>
        <Footer />
    </div>
  
  )
}
        

export default App