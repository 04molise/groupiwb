import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar,
  XAxis, YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const SalesDashboard = () => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const [queries, setQueries] = useState([]);
  const [selectedQueryId, setSelectedQueryId] = useState(null);
  const [responseText, setResponseText] = useState('');

  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantitySold, setQuantitySold] = useState(1);
  const [paymentReceived, setPaymentReceived] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductCategory, setNewProductCategory] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductQuantity, setNewProductQuantity] = useState('');

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showSellProduct, setShowSellProduct] = useState(false);
  const [showSalesHistory, setShowSalesHistory] = useState(false);
  const [showClientQueries, setShowClientQueries] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchSalesHistory();
    fetchQueries();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const fetchSalesHistory = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/sales');
      setSales(res.data);
    } catch (error) {
      console.error('Error fetching sales history:', error.message);
    }
  };

  const fetchQueries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/queries');
      setQueries(res.data);
    } catch (error) {
      console.error('Error fetching queries:', error.message);
    }
  };

  const analyzeQuerySentiment = (message) => {
    // Very basic sentiment analysis based on keywords
    const positiveKeywords = ['love', 'like', 'great', 'amazing', 'best'];
    const negativeKeywords = ['bad', 'terrible', 'awful', 'problem', 'issue'];

    let positiveScore = 0;
    let negativeScore = 0;

    positiveKeywords.forEach(keyword => {
      if (message.toLowerCase().includes(keyword)) positiveScore++;
    });

    negativeKeywords.forEach(keyword => {
      if (message.toLowerCase().includes(keyword)) negativeScore++;
    });

    if (positiveScore > negativeScore) return 'Positive';
    if (negativeScore > positiveScore) return 'Negative';
    return 'Neutral';
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

  const handleResponse = async (queryId) => {
    if (!responseText.trim()) {
      alert('Enter a response first.');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/api/queries/${queryId}`, {
        status: 'complete',
        response: responseText
      });

      const updatedQueries = queries.map(query => {
        if (query._id === queryId) {
          return { ...query, status: 'complete', response: responseText };
        }
        return query;
      });

      setQueries(updatedQueries);
      setResponseText('');
      setSelectedQueryId(null);
      alert('Response sent.');
    } catch (error) {
      console.error('Error sending response:', error.message);
      alert('Failed to send response.');
    }
  };

  const handleSale = async () => {
    if (!selectedProduct || quantitySold <= 0 || paymentReceived === '') {
      alert('Please fill in all fields correctly.');
      return;
    }

    try {
      const product = products.find(p => p._id === selectedProduct);
      if (!product) return alert('Product not found.');
      if (quantitySold > product.quantityInStock) return alert('Not enough stock.');

      await axios.post('http://localhost:5000/api/sales', {
        productId: selectedProduct,
        quantitySold,
        soldBy: "660f43d95169e86c1b12b2f4", // Replace with dynamic user ID later
      });

      setSelectedProduct('');
      setQuantitySold(1);
      setPaymentReceived('');
      fetchProducts();
      fetchSalesHistory();
      alert('Sale recorded successfully!');
    } catch (error) {
      console.error('Error recording sale:', error.message);
    }
  };

  const handleAddProduct = async () => {
    if (!newProductName || !newProductCategory || !newProductPrice || !newProductQuantity) {
      alert('Please fill all product fields.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/products', {
        name: newProductName,
        description: newProductDescription,
        category: newProductCategory,
        price: parseFloat(newProductPrice),
        quantityInStock: parseInt(newProductQuantity),
      });

      fetchProducts();
      setNewProductName('');
      setNewProductDescription('');
      setNewProductCategory('');
      setNewProductPrice('');
      setNewProductQuantity('');
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const queryStatusCounts = queries.reduce((acc, query) => {
    acc[query.status] = (acc[query.status] || 0) + 1;
    return acc;
  }, {});

  const queryStatusData = Object.entries(queryStatusCounts).map(([status, count]) => ({
    status,
    count
  }));

  const styles = {
    container: {
      padding: '30px',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #dbeafe, #f0abfc)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#374151',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    bigBox: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
      marginBottom: '50px',
      maxWidth: '1000px', // Increased max width
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    table: {
      width: '100%',
      textAlign: 'center',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#93c5fd',
      padding: '12px',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #eee',
    },
    chartContainer: {
      width: '100%',
      maxWidth: '800px', // Match bigBox max width
      margin: '20px auto',
      height: '400px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sales Dashboard</h1>

      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => {
          setShowAddProduct(true);
          setShowSellProduct(false);
          setShowSalesHistory(false);
          setShowClientQueries(false);
        }}>
          Add Product
        </button>

        <button style={styles.button} onClick={() => {
          setShowSellProduct(true);
          setShowAddProduct(false);
          setShowSalesHistory(false);
          setShowClientQueries(false);
        }}>
          Sell Product
        </button>

        <button style={styles.button} onClick={() => {
          setShowSalesHistory(true);
          setShowAddProduct(false);
          setShowSellProduct(false);
          setShowClientQueries(false);
        }}>
          View Sales History
        </button>

        <button style={styles.button} onClick={() => {
          setShowClientQueries(true);
          setShowSalesHistory(false);
          setShowAddProduct(false);
          setShowSellProduct(false);
        }}>
          View Client Queries
        </button>
      </div>

      {/* Add Product Section */}
      {showAddProduct && (
        <div style={styles.bigBox}>
          <h2 style={{ ...styles.title, fontSize: '30px' }}>Add New Product</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input type="text" style={styles.input} value={newProductName} onChange={e => setNewProductName(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <input type="text" style={styles.input} value={newProductDescription} onChange={e => setNewProductDescription(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <input type="text" style={styles.input} value={newProductCategory} onChange={e => setNewProductCategory(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price:</label>
            <input type="number" style={styles.input} value={newProductPrice} onChange={e => setNewProductPrice(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Initial Quantity:</label>
            <input type="number" style={styles.input} value={newProductQuantity} onChange={e => setNewProductQuantity(e.target.value)} />
          </div>
          <button style={styles.button} onClick={handleAddProduct}>Add Product</button>
        </div>
      )}

      {/* Sell Product Section */}
      {showSellProduct && (
        <div style={styles.bigBox}>
          <h2 style={{ ...styles.title, fontSize: '30px' }}>Sell Product</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Search Product:</label>
            <input type="text" style={styles.input} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Select Product:</label>
            <select style={styles.select} value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
              <option value="">Select Product</option>
              {filteredProducts.map(product => (
                <option key={product._id} value={product._id}>{product.name} ({product.quantityInStock} in stock)</option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Quantity Sold:</label>
            <input type="number" style={styles.input} value={quantitySold} onChange={e => setQuantitySold(Number(e.target.value))} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Payment Received (optional):</label>
            <input type="text" style={styles.input} value={paymentReceived} onChange={e => setPaymentReceived(e.target.value)} />
          </div>
          <button style={styles.button} onClick={handleSale}>Record Sale</button>
        </div>
      )}

      {/* Sales History Section */}
      {showSalesHistory && (
        <div style={styles.bigBox}>
          <h2 style={{ ...styles.title, fontSize: '30px' }}>Sales History</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Product</th>
                <th style={styles.th}>Quantity Sold</th>
                <th style={styles.th}>Total Amount</th>
                <th style={styles.th}>Date Sold</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale, index) => (
                <tr key={index}>
                  <td style={styles.td}>{sale.product?.name || 'Unknown'}</td>
                  <td style={styles.td}>{sale.quantitySold}</td>
                  <td style={styles.td}>${sale.totalAmount}</td>
                  <td style={styles.td}>{new Date(sale.saleDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Client Queries Section */}
      {showClientQueries && (
        <div style={styles.bigBox}>
          <h2 style={{ ...styles.title, fontSize: '30px' }}>Client Queries</h2>

          {/* Query Status Chart */}
          <div style={styles.chartContainer}>
            <h3>Query Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={queryStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" name="Number of Queries" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {queries.length === 0 ? (
            <p>No queries found.</p>
          ) : (
            queries.map((query) => (
              <div key={query._id} style={{ marginBottom: '30px', border: '1px solid #ccc', borderRadius: '12px', padding: '20px' }}>
                <p><strong>From:</strong> {query.name || 'Anonymous'}</p>
                <p><strong>Email:</strong> {query.email || 'N/A'}</p>
                <p><strong>Query:</strong> {query.message}</p>
                <p><strong>Sentiment:</strong> {analyzeQuerySentiment(query.message)}</p>
                <p><strong>Status:</strong> {query.status}</p>
                {query.response && (
                  <p><strong>Response:</strong> {query.response}</p>
                )}
                {query.status !== 'complete' && (
                  <>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Automated Response:</label>
                      <textarea
                        rows="3"
                        style={{ ...styles.input, resize: 'vertical' }}
                        value={generateAutomatedResponse(query.message)}
                        readOnly
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Your Response:</label>
                      <textarea
                        rows="3"
                        style={{ ...styles.input, resize: 'vertical' }}
                        value={selectedQueryId === query._id ? responseText : ''}
                        onChange={(e) => {
                          setSelectedQueryId(query._id);
                          setResponseText(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      style={{ ...styles.button, backgroundColor: '#10b981' }}
                      onClick={() => handleResponse(query._id)}
                    >
                      Send Response
                    </button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SalesDashboard;