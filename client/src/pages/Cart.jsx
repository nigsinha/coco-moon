import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  const removeItem = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-5">
          <p className="display-6 text-muted">
            Your cart is empty.
          </p>
          <Link to="/" className="btn btn-dark btn-lg mt-3">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          
          {/* LEFT SIDE – CART ITEMS */}
          <div className="col-lg-8">
            {cart.map(item => (
              <div key={item.id} className="card mb-2 shadow-sm p-2">
                <div className="row align-items-center">

                  {/* Product Image */}
                  <div className="col-3 col-md-2 text-center">
                    <div className="cart-image-wrapper">
                      <img
                        src={item.media?.[0]?.url || "/placeholder.jpg"}
                        className="cart-item-image"
                        alt={item.name}
                        loading="lazy"
                        width="110"
                        height="110"
                        onError={(e) => (e.target.src = "/placeholder.jpg")}
                      />

                      {/* Hover Preview */}
                      <div className="cart-preview">
                        <img
                          src={item.media?.[0]?.url || "/placeholder.jpg"}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="col-9 col-md-7">
                    <h6 className="mb-1 fw-bold">{item.name}</h6>
                    <p className="text-muted small mb-1">
                      {item.weight}
                    </p>
                    <p className="mb-1 small">
                      Quantity: {item.quantity}
                    </p>
                    <p className="fw-bold mb-0">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <div className="col-md-3 text-md-end mt-3 mt-md-0">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE – ORDER SUMMARY */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4">
              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Total Price</span>
                <span className="fw-bold">
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>

              <Link to="/checkout" className="btn btn-success w-100 mb-2">
                Proceed to Buy
              </Link>

              <Link to="/" className="btn btn-outline-secondary w-100">
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;