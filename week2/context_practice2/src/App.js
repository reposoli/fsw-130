import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import PlantList from "./components/PlantForm/PlantList";
import PlantForm from "./components/PlantForm/PlantForm";
import Footer from "./components/Footer";

function App() {
  return (
     <div className = "FullPage">
          <Navbar />
          <Home />
          <PlantForm />
          <PlantList />
          <Footer />
      </div>
  )
}

export default App;