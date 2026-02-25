const pool = require("../config/db");

exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE is_active = true"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};