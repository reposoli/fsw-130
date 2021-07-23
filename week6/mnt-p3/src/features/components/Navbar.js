import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <div className='navbar-container' >
      <ul className='navbar-links-container'>
        <Link className='navbar-links' to='/'> Movies </Link>
        <Link className='navbar-links' to='tvshows'> Tv Shows </Link>
      </ul>
    </div>
  );
}