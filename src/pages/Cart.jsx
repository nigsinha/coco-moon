import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="card p-3 mb-2">
              <h5>{item.name}</h5>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h4 className="mt-3">Total: ₹{totalPrice}</h4>

          <Link to="/" className="btn btn-secondary me-2">
            Add More Items
          </Link>

          <Link to="/checkout" className="btn btn-success">
            Proceed to Buy
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;