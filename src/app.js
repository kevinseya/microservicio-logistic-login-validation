const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Server Online 🚀</h1>');
});

// Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server online on http://localhost:${PORT}`);
});