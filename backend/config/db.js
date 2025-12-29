const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

const connectDB = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("PostgreSQL connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = {
  pool,
  connectDB,
};
