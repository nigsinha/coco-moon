import { useState } from "react";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-dark text-white mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center py-3">

        <div>
          © {new Date().getFullYear()} Myra & Team. 
          Handcrafted with Passion. All rights reserved.
        </div>

        <div className="mt-2 mt-md-0">
          <button 
            type="button"
            className="btn btn-link text-white text-decoration-none p-0 me-3"
            onClick={() => setShowModal(true)}
          >
            Privacy & Contact
          </button>
        </div>

      </div>

      {/* Combined Privacy & Contact Modal */}
      {showModal && (
        <div className="privacy-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <div className="privacy-modal-body">
              <h1>Privacy Policy & Contact</h1>

              <p>At Coco Moon, we value your privacy.</p>

              <h3>Information We Collect</h3>
              <p>We collect your name, email, phone number, and address when you place an order.</p>

              <h3>How We Use Information</h3>
              <p>Your information is used only to process orders and improve our services.</p>

              <h3>Payment Security</h3>
              <p>Payments are processed securely through trusted third-party providers.</p>

              <h3>Contact Us - +91-9999988888</h3>
              <p>Email: support@cocomoon.com</p>

              <div className="text-end mt-3">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;