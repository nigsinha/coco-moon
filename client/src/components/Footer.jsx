import { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-3">
            <p className="mb-0">
              © {new Date().getFullYear()} Myra & Team. 
              <br />
              Handcrafted with Passion. All rights reserved.
            </p>
          </div>

          <div className="col-md-6 py-3 text-md-end">
            <button 
              type="button"
              className="btn btn-link text-white text-decoration-none fw-semibold p-0"
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer", fontSize: "1rem" }}
            >
              Privacy & Contact
            </button>
          </div>
        </div>
      </div>

      {/* Combined Privacy & Contact Modal */}
      {showModal && (
        <div className="privacy-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button (X) */}
            <div style={{ position: "relative", paddingBottom: "1rem" }}>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  zIndex: 1,
                }}
              ></button>
            </div>

            <div className="privacy-modal-body">
              <h1>Privacy Policy & Contact</h1>

              <p>At Coco Moon, we value your privacy.</p>

              <h3>Information We Collect</h3>
              <p>We collect your name, email, phone number, and address when you place an order.</p>

              <h3>How We Use Information</h3>
              <p>Your information is used only to process orders and improve our services.</p>

              <h3>Payment Security</h3>
              <p>Payments are processed securely through trusted third-party providers.</p>

              <h3>Contact Us</h3>
              <p>
                <strong>Phone:</strong> +91-9999988888<br />
                <strong>Email:</strong> support@cocomoon.com
              </p>

              <div className="text-end mt-4">
                <button 
                  className="btn btn-secondary fw-semibold" 
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;