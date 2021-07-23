import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NewUglyPost from './components/NewUglyPost/newUglyPost';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer'
import UglyPost from './components/NewUglyPost/newUglyPost'


const App = () => {

  return (
    <div >
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/posts' component={UglyPost}/>
      </Switch>
      <NewUglyPost />
      <Footer />
     
    </div>
    
  );
}

export default App;