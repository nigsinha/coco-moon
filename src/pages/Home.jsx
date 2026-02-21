import products from "../data/products";
import { Link } from "react-router-dom";

function Home() {

  if (!products || products.length === 0) {
    return <p className="text-center mt-5">No products available.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Premium Chocolates</h2>

      <div className="row">
        {products.map(({ id, name, image, description, price, weight }) => (
          <div className="col-md-4 mb-4" key={id}>
            <div className="card h-100 product-card shadow-sm">

              <img
                src={image || "/placeholder.jpg"}
                className="card-img-top"
                alt={`${name} chocolate`}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>

                <p className="card-text flex-grow-1">
                  {description}
                </p>

                <p className="product-price fw-bold mb-1">
                  ₹{price}
                </p>

                <p className="text-muted small mb-3">
                  {weight}
                </p>

                <Link
                  to={`/product/${id}`}
                  className="btn btn-dark mt-auto"
                >
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