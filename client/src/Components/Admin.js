import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:5001/api/admin', { username, password });
        if (response.status === 200) {
            navigate('/AdminHome'); // Redirect to AdminDashboard on successful login
        }
    } catch (error) {
        setError('Invalid username or password');
    }
  };

  return (
    <div className='header-container'>
      <Header />
      <div className='body'>
        <div className='card'>
        <form onSubmit={handleLogin}>
          <h3>ADMIN LOGIN</h3>
          <label className='me-4'> AdminName:  </label>
          <input  className='ms-2'type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /> 
          <label className='mt-3 mb-3 ms-3 '> Password:
              <input type="password" className='ms-5' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
