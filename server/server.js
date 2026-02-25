require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();  // ✅ Create app FIRST

// Middleware
app.use(cors());
app.use(express.json());

// Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Routes (AFTER app is created)
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Coco Moon Backend Running");
});

// Test DB
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});