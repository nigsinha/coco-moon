import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");
  const [error, setError] = useState("");

  // ✅ Protect checkout page on mount only (not on cart changes)
  useEffect(() => {
    if (!cart || cart.length === 0) {
      window.location.hash = "#/";
    }
  }, []); // Empty dependency array - only run on mount

  const handleOrder = () => {
    if (!address.trim()) {
      setError("Please enter delivery address.");
      return;
    }

    setError("");

    // Navigate to success page FIRST (before clearing cart)
    window.location.hash = "#/success";

    // Clear cart after navigation
    setCart([]);
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Delivery Address</label>

        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter full delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Payment Method</label>

        <select
          className="form-select"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
        </select>
      </div>

      <button
        className="btn btn-success"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;