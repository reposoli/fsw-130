import React, { useState, useEffect } from 'react';
import { withAuth } from '../../providers/AuthProvider';
import './login.css';
import { Link } from 'react-router-dom';

const Login = ({ handleAuthLogin, getToken, userToken }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    getToken()
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    handleAuthLogin ()
  }


console.log(userToken)

  return (
    <div className='loginContainer'><div>
        </div>
      <form onSubmit={handleSubmit}>
        <input 
          className='loginBox'
          type='text'
          name='userName'
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br/>
        <input 
          className="loginBox"
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <Link to="/tweets"><button className='loginButton'> Log in </button> </Link>
      </form>
    </div>
  );
}

export default withAuth(Login);