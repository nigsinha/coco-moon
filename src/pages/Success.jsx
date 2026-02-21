import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container mt-4 text-center">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for shopping with Coco Moon 🍫</p>

      <Link to="/" className="btn btn-dark mt-3">
        Back to Home
      </Link>
    </div>
  );
}

export default Success;