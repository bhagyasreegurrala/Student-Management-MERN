require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Validate environment variables
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('Error: MONGO_URI is not defined in .env');
  process.exit(1);
}

// Log connection attempt (hide password)
const safeUri = uri.replace(/(mongodb\+srv:\/\/[^:]+:)[^@]+/, '$1*****');
console.log('Connecting to MongoDB with URI:', safeUri);

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// API routes
app.use('/api/students', studentRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
