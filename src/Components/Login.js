import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const { login, token } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simulate an API call to get the authentication token
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful! Token saved:', data.token);
        login(data.token);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  // Redirect to home if already logged in
  if (token) {
    return <Navigate to="/home" />;
  }


  return (
    <div className=' mt-2 container'>
    <h2 className='text-white'>Login :-</h2>
    <div className="mb-3">
      <label htmlFor="username" className="form-label text-white">
        Username:-
      </label>
      <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label text-white">
        Password:-
      </label>
      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button className="btn btn-success" onClick={handleLogin}>
      Login
    </button>
  </div>
  );
}

export default Login;
