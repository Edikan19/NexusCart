const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { Sequelize } = require('sequelize');

const app = express();

// Database connection
const sequelize = new Sequelize(process.env.DB_URI);

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('DB connection error:', err));

sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Sync error:', err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Health-check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'NexusCart Backend is running' });
});

module.exports = app;