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

        <Link to="/" className="btn btn-dark mt-4">
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default Success;