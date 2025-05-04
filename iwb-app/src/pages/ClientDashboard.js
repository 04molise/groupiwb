// src/pages/ClientDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientDashboard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [queries, setQueries] = useState([]);
  const [automatedResponse, setAutomatedResponse] = useState('');
  const [showAutomatedResponse, setShowAutomatedResponse] = useState(false);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/queries');
      setQueries(res.data);
    } catch (error) {
      console.error('Error fetching queries:', error.message);
    }
  };

  const generateAutomatedResponse = (message) => {
    if (message.toLowerCase().includes('shipping')) {
      return 'Our standard shipping time is 3-5 business days.  For more details, please see our Shipping Policy page.';
    } else if (message.toLowerCase().includes('return')) {
      return 'We offer a 30-day return policy. Please visit our Returns & Exchanges page for more information.';
    } else if (message.toLowerCase().includes('warranty')) {
      return 'Our products come with a one-year warranty against manufacturing defects.';
    } else {
      return 'Thank you for your query! We will get back to you as soon as possible.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/queries', formData);
      setFormData({ name: '', email: '', message: '' });
      fetchQueries();
      alert('Query submitted successfully!');

      // Generate and show the automated response after successful submission
      const autoResponse = generateAutomatedResponse(formData.message);
      setAutomatedResponse(autoResponse);
      setShowAutomatedResponse(true);
    } catch (error) {
      console.error('Error submitting query:', error.message);
      alert('Error submitting query.');
      setShowAutomatedResponse(false); // Ensure it's hidden on error
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#374151' }}>
        Client Dashboard
      </h1>

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '20px', boxShadow: '0px 8px 20px rgba(0,0,0,0.15)', marginBottom: '50px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Submit a Query</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Submit Query
          </button>
        </form>

        {showAutomatedResponse && (
          <div style={{ marginTop: '20px', marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>IBW AI Assistant:</label>
            <textarea
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
              value={automatedResponse}
              readOnly
            />
          </div>
        )}
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '20px', boxShadow: '0px 8px 20px rgba(0,0,0,0.15)', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Your Queries</h2>
        {queries.length === 0 ? (
          <p>No queries submitted yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {queries.map((query) => (
              <li key={query._id} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <p><strong>Message:</strong> {query.message}</p>
                <p><strong>Status:</strong> {query.status}</p>
                {query.response && <p><strong>Response:</strong> {query.response}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;