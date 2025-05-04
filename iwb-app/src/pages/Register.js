import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use 'useNavigate' for React Router v6

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // Default role is client
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Updated to use 'useNavigate'

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password, role });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.select}
        >
          <option value="sales">Sales</option>
          <option value="finance">Finance</option>
          <option value="developer">Developer</option>
          <option value="investor">Investor</option>
          <option value="primary_partner">Primary Partner</option>
          <option value="client">Client</option>
        </select>
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <p style={styles.redirectText}>
        Already have an account? <a href="/login" style={styles.link}>Login here</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    transition: '0.3s ease',
  },
  
  select: {
    margin: '10px 0',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    transition: '0.3s ease',
  },
  button: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: '14px',
  },
  redirectText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px',
    marginTop: '15px',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Register;
