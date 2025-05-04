import React from 'react';

const DeveloperDashboard = () => {
  const dashboardStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const sectionStyle = {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '10px',
    borderBottom: '2px solid #eee',
    paddingBottom: '5px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  const restrictedStyle = {
    opacity: 0.7,
    pointerEvents: 'none',
    backgroundColor: '#f9f9f9',
    border: '1px dashed #ccc',
    padding: '10px',
    borderRadius: '4px',
  };

  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Developer Dashboard</h2>
      <p>Welcome, Developer. You have full access to the application's codebase for development purposes.</p>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Codebase Access</h3>
        <p>
          Access the codebase and contribute to the project.
        </p>
        <ul>
          <li>
            <a href="[Placeholder: Link to Codebase]" style={linkStyle}>
              View Code Repository
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Documentation]" style={linkStyle}>
              Access API Documentation
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Style Guide]" style={linkStyle}>
              Review Style Guide
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Development Tools</h3>
        <p>
          Utilize these tools to enhance your development workflow.
        </p>
        <ul>
          <li>
            <a href="[Placeholder: Link to Debugging Tool]" style={linkStyle}>
              Debugging Tools
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Testing Framework]" style={linkStyle}>
              Testing Framework
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Performance Monitoring]" style={linkStyle}>
              Performance Monitoring
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Collaboration</h3>
        <p>
          Connect with other developers and collaborate on projects.
        </p>
        <ul>
          <li>
            <a href="[Placeholder: Link to Team Chat]" style={linkStyle}>
              Join Team Chat
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Project Management Tool]" style={linkStyle}>
              Access Project Management Board
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Code Review Tool]" style={linkStyle}>
              Participate in Code Reviews
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Restricted Access Areas</h3>
        <p>
          Access to Sales, Queries, and Income data is restricted unless specifically required for development and authorized by management.
        </p>
        <div style={restrictedStyle}>
          <h4>Sales Data (Restricted)</h4>
          <p>[Placeholder: Sales data would appear here if access were granted]</p>
          <h4>Customer Queries (Restricted)</h4>
          <p>[Placeholder: Customer queries would appear here if access were granted]</p>
          <h4>Income Data (Restricted)</h4>
          <p>[Placeholder: Income data would appear here if access were granted]</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;