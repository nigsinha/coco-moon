import { Link } from "react-router-dom";

function Navbar({ cart }) {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand text-white">
        Coco Moon 🍫
      </Link>

      <Link to="/cart" className="btn btn-warning">
        Cart ({totalItems})
      </Link>
    </nav>
  );
}

export default Navbar;