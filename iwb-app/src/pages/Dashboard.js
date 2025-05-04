import React from 'react';

const Dashboard = ({ userRole }) => {
  if (!userRole) {
    return <p>Please login to access the dashboard.</p>;
  }

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.welcomeMessage}>
        <h2>Welcome to your Dashboard, {userRole}!</h2>
        <p>Here you can view and manage your data.</p>
      </div>
    
    </div>
  );
};

const styles = {
  dashboardContainer: {
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    minHeight: '100vh',
    color: '#fff',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  welcomeMessage: {
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '600px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default Dashboard;
