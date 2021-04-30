import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './navbar.css';

const Navbar = () => {

  return (
    <div>
      <ul className='navbarContainer'>
        <Link to='/' className='links'> Home </Link>
      </ul>
    </div>
  );
}

export default withAuth(Navbar);