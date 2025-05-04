import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip, Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const FinanceDashboard = () => {
  const [sales, setSales] = useState([]);
  const [incomeStatements, setIncomeStatements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesResponse = await axios.get('http://localhost:5000/api/sales');
        setSales(salesResponse.data);

        const incomeResponse = await axios.get('http://localhost:5000/api/income');
        setIncomeStatements(incomeResponse.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalSales = sales.reduce((acc, sale) => acc + sale.totalAmount, 0);

  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#374151',
    },
    section: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
      marginBottom: '50px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '30px',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#93c5fd',
      padding: '12px',
    },
    tableCell: {
      padding: '10px',
      borderBottom: '1px solid #eee',
      textAlign: 'center',
    },
    noData: {
      padding: '20px',
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#777',
    },
    error: {
      color: 'red',
      textAlign: 'center',
    },
    totalSales: {
      fontSize: '24px',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Finance Dashboard</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Welcome, Finance team. Here you can manage financial records.
      </p>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading financial data...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : (
        <>
          {/* Total Sales */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Total Sales</h3>
            <p style={styles.totalSales}>${totalSales.toFixed(2)}</p>
          </div>

          {/* Sales History */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Sales History</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Product</th>
                  <th style={styles.tableHeader}>Quantity Sold</th>
                  <th style={styles.tableHeader}>Total Amount</th>
                  <th style={styles.tableHeader}>Date Sold</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale, index) => (
                  <tr key={index}>
                    <td style={styles.tableCell}>{sale.product?.name || 'Unknown'}</td>
                    <td style={styles.tableCell}>{sale.quantitySold}</td>
                    <td style={styles.tableCell}>${sale.totalAmount.toFixed(2)}</td>
                    <td style={styles.tableCell}>{new Date(sale.saleDate).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Income Statements Table */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Income Statements</h3>
            {incomeStatements.length === 0 ? (
              <p style={styles.noData}>No income statements available.</p>
            ) : (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>Month</th>
                    <th style={styles.tableHeader}>Year</th>
                    <th style={styles.tableHeader}>Total Sales</th>
                    <th style={styles.tableHeader}>Total Expenses</th>
                    <th style={styles.tableHeader}>Net Income</th>
                  </tr>
                </thead>
                <tbody>
                  {incomeStatements.map((statement) => (
                    <tr key={statement._id}>
                      <td style={styles.tableCell}>{statement.month}</td>
                      <td style={styles.tableCell}>{statement.year}</td>
                      <td style={styles.tableCell}>${statement.totalSales}</td>
                      <td style={styles.tableCell}>${statement.totalExpenses}</td>
                      <td style={styles.tableCell}>${statement.netIncome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Income Statement Charts */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Income Statement Charts</h3>
            {incomeStatements.length > 0 && (
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={incomeStatements}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="totalSales" stroke="#4ade80" name="Total Sales" />
                  <Line type="monotone" dataKey="totalExpenses" stroke="#facc15" name="Expenses" />
                  <Line type="monotone" dataKey="netIncome" stroke="#60a5fa" name="Net Income" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Bar Chart Summary</h3>
            {incomeStatements.length > 0 && (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={incomeStatements}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalSales" fill="#4ade80" name="Total Sales" />
                  <Bar dataKey="totalExpenses" fill="#f87171" name="Expenses" />
                  <Bar dataKey="netIncome" fill="#60a5fa" name="Net Income" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FinanceDashboard;
