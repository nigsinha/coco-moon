import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ setCart }) {

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");

  const handleOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    // 🔥 Clear cart after successful order
    setCart([]);

    // Navigate to success page
    navigate("/success");
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      <div className="mb-3">
        <label className="form-label">Delivery Address</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter full delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
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

      <button className="btn btn-success" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;