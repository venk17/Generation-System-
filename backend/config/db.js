const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false  // Required for Render PostgreSQL
  },
  max: 10,  // Similar to connectionLimit in MySQL
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test the connection
pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('PostgreSQL connection error:', err);
  } else {
    console.log('Successfully connected to PostgreSQL database');
  }
});

module.exports = pool;