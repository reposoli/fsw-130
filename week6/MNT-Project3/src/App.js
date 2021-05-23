import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Movie } from './features/components/Movie';
import { TvShow } from './features/components/TvShow';
import { Navbar } from './features/components/Navbar';
import { Footer } from './features/components/Footer';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Movie} />
        <Route path='/tvshows' component={TvShow} />
      </Switch>
      <Footer />
    </div>
    
  );
}

export default App;