import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <h2>Our Premium Chocolates</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 product-card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <p className="product-price mb-1">₹{product.price}</p>
                <p className="text-muted small mb-3">{product.weight}</p>
                <Link to={`/product/${product.id}`} className="btn btn-dark mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;