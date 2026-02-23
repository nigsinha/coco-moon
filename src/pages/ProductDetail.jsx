import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetail({ addToCart }) {

  const { id } = useParams();
  const productId = Number(id);

  const product = products.find(
    (item) => item.id === productId
  );

  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!product) {
    return (
      <div className="container mt-4 text-center">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  if (!product.media) return null;

  return (
    <div className="container mt-4">
      <div className="row g-4">
        
        <div className="col-md-6 text-center">
          <div>
            {product.media[currentSlide].type === "image" ? (
              <img
                src={product.media[currentSlide].url}
                className="product-detail-image rounded img-fluid"
                alt={`${product.name} media`}
                onError={(e) => (e.target.src = "/placeholder.jpg")}
              />
            ) : (
              <video
                src={product.media[currentSlide].url}
                controls
                className="rounded w-100"
              />
            )}

            <div className="mt-3">
              <button
                className="btn btn-outline-dark me-2"
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === 0
                      ? product.media.length - 1
                      : currentSlide - 1
                  )
                }
              >
                Prev
              </button>

              <button
                className="btn btn-outline-dark"
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === product.media.length - 1
                      ? 0
                      : currentSlide + 1
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>

          <p className="lead">{product.description}</p>

          <h4 className="product-price mb-2">
            ₹{product.price}
          </h4>

          <p className="text-muted mb-4">
            {product.weight}
          </p>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity:
            </label>

            <input
              type="number"
              id="quantity"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => {
                let v = Number(e.target.value) || 1;
                if (v < 1) v = 1;
                if (v > 5) v = 5;
                setQuantity(v);
              }}
              className="form-control w-50"
            />

            <div className="form-text">
              Maximum 5 units per product.
            </div>
          </div>

          <button
            className="btn btn-dark btn-lg me-2"
            onClick={() => {
              addToCart(product, quantity);
              setQuantity(1);
            }}
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