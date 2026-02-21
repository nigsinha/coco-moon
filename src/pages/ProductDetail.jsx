import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetail({ addToCart }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mt-4">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-dark">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="product-detail-image rounded" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="lead">{product.description}</p>
          <h4 className="product-price mb-2">₹{product.price}</h4>
          <p className="text-muted mb-4">{product.weight}</p>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => {
                let v = parseInt(e.target.value) || 1;
                if (v < 1) v = 1;
                if (v > 5) v = 5;
                setQuantity(v);
              }}
              className="form-control w-50"
            />
            <div className="form-text">Maximum 5 units per product.</div>
          </div>

          <button
            className="btn btn-dark btn-lg me-2"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>

          <Link to="/" className="btn btn-outline-secondary btn-lg">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;