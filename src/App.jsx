import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Privacy from "./pages/Privacy";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const MAX_QTY = 5;

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    quantity = Number(quantity) || 1;
    if (quantity < 1) quantity = 1;

    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        const newQty = Math.min(MAX_QTY, existing.quantity + quantity);

        if (newQty === existing.quantity) {
          alert("Maximum quantity of 5 reached for this product.");
          return prevCart;
        }

        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQty }
            : item
        );
      }

      const qtyToAdd = Math.min(MAX_QTY, quantity);

      if (qtyToAdd < quantity) {
        alert("Added maximum quantity (5) for this product.");
      }

      return [...prevCart, { ...product, quantity: qtyToAdd }];
    });
  };

  return (
    <HashRouter>
      <div className="app-root d-flex flex-column min-vh-100">

        <Navbar cart={cart} />

        <main className="flex-fill">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route 
              path="/product/:id" 
              element={<ProductDetail addToCart={addToCart} />} 
            />

            <Route 
              path="/cart" 
              element={<Cart cart={cart} setCart={setCart} />} 
            />

            {/* ✅ FIXED: Passing cart also */}
            <Route 
              path="/checkout" 
              element={<Checkout cart={cart} setCart={setCart} />} 
            />

            <Route path="/success" element={<Success />} />
            <Route path="/privacy" element={<Privacy />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </HashRouter>
  );
}

export default App;