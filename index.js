const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('AI-Powered Legal Portal API is running');
});

// Routes (to be implemented)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/provisions', require('./routes/provisions'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/admin', require('./routes/admin'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
