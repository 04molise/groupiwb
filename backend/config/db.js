const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // ✅ Use environment variable for MongoDB URI
    const uri = process.env.MONGODB_URI;
    
    // ✅ Removed deprecated options (Mongoose 7+ uses modern defaults)
    await mongoose.connect(uri);
    
    console.log('MongoDB Atlas Connected Successfully 🚀');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;