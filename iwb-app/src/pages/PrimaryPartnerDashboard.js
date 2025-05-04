import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrimaryPartnerDashboard = () => {
  const [sales, setSales] = useState([]);
  const [incomeStatements, setIncomeStatements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSalesHistory();
    fetchIncomeStatements();
  }, []);

  const fetchSalesHistory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/sales');
      setSales(res.data);
    } catch (error) {
      console.error('Error fetching sales history:', error.message);
    }
  };

  const fetchIncomeStatements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/income'); // Replace with correct endpoint
      setIncomeStatements(response.data); // Assuming response.data contains the list of income statements
    } catch (err) {
      setError('Failed to fetch income statements');
      console.error(err);
    }
  };


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

  const tableStyle = {
    width: '100%',
    textAlign: 'center',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#93c5fd',
    padding: '12px',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee',
  };

    const noDataStyle = {
        padding: '20px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#777',
    };

    const errorStyle = {
        color: 'red',
        marginBottom: '10px',
    };

    const tableContainerStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflowX: 'auto',
    };

    const tableHeaderStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        fontWeight: 'bold',
        padding: '12px 15px',
        textAlign: 'left',
    };

    const tableRowStyle = {
        borderBottom: '1px solid #ddd',
    };

    const tableCellStyle = {
        padding: '10px 15px',
        textAlign: 'left',
    };


  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Primary Partner Dashboard</h2>
      <p>Welcome, Primary Partner. Here you can manage your partnerships, view sales history, and income statements.</p>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Partnership Management</h3>
        <p>
          Manage and track your partnerships effectively.
        </p>
        <ul>
          <li>
            <a href="[Placeholder: Link to Partnership Agreements]" style={linkStyle}>
              View Partnership Agreements
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Partner Performance Reports]" style={linkStyle}>
              Access Partner Performance Reports
            </a>
          </li>
          <li>
            <a href="[Placeholder: Link to Communication Tools]" style={linkStyle}>
              Communicate with Partners
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Sales History</h3>
        <p>View the history of sales transactions.</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Quantity Sold</th>
              <th style={thStyle}>Total Amount</th>
              <th style={thStyle}>Date Sold</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={index}>
                <td style={tdStyle}>{sale.product?.name || 'Unknown'}</td>
                <td style={tdStyle}>{sale.quantitySold}</td>
                <td style={tdStyle}>${sale.totalAmount}</td>
                <td style={tdStyle}>{new Date(sale.saleDate).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* Income Statements Section */}
        <div style={sectionStyle}>
            <h3 style={headingStyle}>Income Statements</h3>
            {error && <p style={errorStyle}>{error}</p>}
            {incomeStatements.length === 0 ? (
                <p style={noDataStyle}>No income statements available.</p>
            ) : (
                <div style={tableContainerStyle}>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Month</th>
                                <th style={tableHeaderStyle}>Year</th>
                                <th style={tableHeaderStyle}>Total Sales</th>
                                <th style={tableHeaderStyle}>Total Expenses</th>
                                <th style={tableHeaderStyle}>Net Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeStatements.map((statement) => (
                                <tr key={statement._id} style={tableRowStyle}>
                                    <td style={tableCellStyle}>{statement.month}</td>
                                    <td style={tableCellStyle}>{statement.year}</td>
                                    <td style={tableCellStyle}>{statement.totalSales}</td>
                                    <td style={tableCellStyle}>{statement.totalExpenses}</td>
                                    <td style={tableCellStyle}>{statement.netIncome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    </div>
  );
};

export default PrimaryPartnerDashboard;