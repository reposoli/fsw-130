import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Movie } from './features/components/Movie';
import { TvShow } from './features/components/TvShow';
import { Navbar } from './features/components/Navbar';
import { Footer } from './features/components/Footer';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route 
          path='/movie' 
          element={<Movie/>} 
        />
        <Route 
          path='/tvshows' 
          element={<TvShow/>}
        />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;