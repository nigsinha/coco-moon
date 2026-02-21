import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";

function App() {

  const [cart, setCart] = useState([]);
  const MAX_QTY = 5;

  const addToCart = (product, quantity) => {
    quantity = parseInt(quantity) || 1;
    if (quantity < 1) quantity = 1;

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      const newQty = Math.min(MAX_QTY, existing.quantity + quantity);
      if (newQty === existing.quantity) {
        window.alert('Maximum quantity of 5 reached for this product.');
        return;
      }
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: newQty }
          : item
      ));
    } else {
      const qtyToAdd = Math.min(MAX_QTY, quantity);
      if (qtyToAdd < quantity) {
        window.alert('Added maximum quantity (5) for this product.');
      }
      setCart([...cart, { ...product, quantity: qtyToAdd }]);
    }
  };

  return (
    <HashRouter>
      <Navbar cart={cart} />
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

        <Route 
          path="/checkout" 
          element={<Checkout setCart={setCart} />} 
        />

        <Route path="/success" element={<Success />} />

      </Routes>
    </HashRouter>
  );
}

export default App;