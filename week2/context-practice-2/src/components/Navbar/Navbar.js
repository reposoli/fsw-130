import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  return (
    <div className = "navbarContainer">
        <Link to='/' className='links'> Home </Link>
        <Link to='/' className='links'> About </Link>
        <Link to='/' className='links'> Contact </Link>
    </div>
  );
}

export default Navbar;
