import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestorDashboard = () => {
    const [incomeStatements, setIncomeStatements] = useState([]);
    const [error, setError] = useState(null);

    // Fetch the income statements from the backend
    useEffect(() => {
        const fetchIncomeStatements = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/income'); // Replace with correct endpoint
                setIncomeStatements(response.data); // Assuming response.data contains the list of income statements
            } catch (err) {
                setError('Failed to fetch income statements');
                console.error(err);
            }
        };

        fetchIncomeStatements();
    }, []); // Empty dependency array means it runs once when the component mounts

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f4f4f4',
            minHeight: '100vh',
        },
        title: {
            fontSize: '2em',
            color: '#333',
            marginBottom: '20px',
            textAlign: 'center',
        },
        error: {
            color: 'red',
            marginBottom: '10px',
        },
        tableContainer: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            overflowX: 'auto',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
        },
        tableHeader: {
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: 'bold',
            padding: '12px 15px',
            textAlign: 'left',
        },
        tableRow: {
            borderBottom: '1px solid #ddd',
        },
        tableCell: {
            padding: '10px 15px',
            textAlign: 'left',
        },
        noData: {
            padding: '20px',
            textAlign: 'center',
            fontStyle: 'italic',
            color: '#777',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Investor Dashboard</h2>
            <p>Welcome, Investor. Here you can view investment details and income statements.</p>

            {/* Error handling */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Display income statements */}
            <h3>Income Statements</h3>
            {incomeStatements.length === 0 ? (
                <p style={styles.noData}>No income statements available.</p>
            ) : (
                <div style={styles.tableContainer}>
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
                                <tr key={statement._id} style={styles.tableRow}>
                                    <td style={styles.tableCell}>{statement.month}</td>
                                    <td style={styles.tableCell}>{statement.year}</td>
                                    <td style={styles.tableCell}>{statement.totalSales}</td>
                                    <td style={styles.tableCell}>{statement.totalExpenses}</td>
                                    <td style={styles.tableCell}>{statement.netIncome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default InvestorDashboard;