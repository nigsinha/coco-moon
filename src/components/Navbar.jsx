import { Link } from "react-router-dom";

function Navbar({ cart }) {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3">
      <Link to="/" className="navbar-brand text-white fw-bold fs-4">
        <img src="/logo.png" alt="Coco Moon" height="40" className="me-2" />
        Coco Moon
      </Link>

      <div className="ms-auto">
        <Link to="/cart" className="btn btn-warning position-relative">
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