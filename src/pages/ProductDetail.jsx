import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

function ProductDetail({ addToCart }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>

      <div className="mt-3">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="form-control w-25"
        />

        <button
          className="btn btn-dark mt-3"
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;