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
        <div className="text-center mt-5">
          <p className="display-6 text-muted">Your cart is empty.</p>
          <Link to="/" className="btn btn-dark btn-lg mt-3">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row">
            {cart.map(item => (
              <div key={item.id} className="col-md-12 mb-3">
                <div className="card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img src={item.image} className="cart-item-image rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="text-muted small">{item.weight}</p>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <p className="product-price">Price: ₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4 p-3">
            <h4 className="mb-3">Total: ₹{totalPrice}</h4>
            <div className="d-flex gap-2">
              <Link to="/" className="btn btn-secondary">
                Add More Items
              </Link>
              <Link to="/checkout" className="btn btn-success">
                Proceed to Buy
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;