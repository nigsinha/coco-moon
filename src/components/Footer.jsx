import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">

        <div>
          © {new Date().getFullYear()} Myra & Team. 
          Handcrafted with Passion. All rights reserved.
        </div>

        <div className="mt-2 mt-md-0">
          <Link to="/privacy" className="text-white text-decoration-none me-3">
            Privacy
          </Link>

          <Link to="/contact" className="text-white text-decoration-none">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;