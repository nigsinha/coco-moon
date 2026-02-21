import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <h2>Our Premium Chocolates</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card p-3">
              <h5>{product.name}</h5>
              <p>₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-dark">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;