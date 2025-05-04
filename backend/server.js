const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Force redeploy - 2025-05-05
const forceRedeploy = "Redeploy 2025-05-05"; // ✅ Added

// Import routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const salesRoutes = require('./routes/salesRoutes');
const queryRoutes = require('./routes/queryRoutes'); 
const incomeRoutes = require('./routes/incomeRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/queries', queryRoutes); 
app.use('/api/income', incomeRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    // ✅ Changed from DB_URI to MONGODB_URI
    await mongoose.connect(process.env.MONGODB_URI); 
    console.log('MongoDB connected 🎉🎉');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});