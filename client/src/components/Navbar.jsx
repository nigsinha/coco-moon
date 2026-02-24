import { Link } from "react-router-dom";
import { useMemo } from "react";

function Navbar({ cart }) {

  const totalItems = useMemo(() =>
    cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">

      <Link to="/" className="navbar-brand text-white fw-bold fs-4 d-flex align-items-center">
        <img
          src="/logo.png"
          alt="Coco Moon Logo"
          height="40"
          className="me-2"
          onError={(e) => e.target.style.display = "none"}
        />
        Coco Moon
      </Link>

      <div className="ms-auto">
        <Link
          to="/cart"
          className="btn btn-warning position-relative fw-semibold"
        >
          🛒 Cart

          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;