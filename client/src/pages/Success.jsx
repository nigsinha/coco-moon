import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container mt-5 text-center">

      <div className="card p-5 shadow-sm">

        <h2 className="text-success mb-3">
          🎉 Order Placed Successfully!
        </h2>

        <p className="lead">
          Thank you for shopping with <strong>Coco Moon</strong> 🍫
        </p>

        <p className="text-muted">
          Your delicious chocolates will be delivered soon.
        </p>

        {/* Updated Premium Centered Button */}
        <div className="mt-4 text-center">
          <Link 
            to="/" 
            className="btn btn-dark px-5 py-2 fw-semibold rounded-pill"
            style={{ minWidth: "220px" }}
          >
            Continue Shopping
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Success;