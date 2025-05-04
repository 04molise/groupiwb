import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToAbout = () => {
    navigate('/about');
  };

  const goToCompany = () => {
    navigate('/company');
  };

  const goToOverview = () => {
    navigate('/overview');
  };

  const goToContactUs = () => {
    navigate('/contact-us');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        Welcome to <span style={styles.highlight}>IWB Recycling</span>
      </div>
      <div style={styles.right}>
        
        <button
          onClick={goToAbout}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00C9A7')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          About
        </button>
        <button
          onClick={goToCompany}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00C9A7')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          Company
        </button>
        <button
          onClick={goToOverview}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00C9A7')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          Overview
        </button>
        <button
          onClick={goToContactUs}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00C9A7')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          Contact Us
        </button>
        <button
          onClick={handleLogout}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#00C9A7')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffffff')}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    height: '70px',
    width: '94.8%',
    background: 'linear-gradient(90deg, #00B4DB 0%, #0083B0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    fontFamily: '"Poppins", sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  left: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  highlight: {
    color: '#FFD700',
    marginLeft: '8px',
  },
  right: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center', // Vertically center the buttons
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    color: '#0083B0',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

export default Navbar;