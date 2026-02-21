import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/product/:id" 
          element={<ProductDetail addToCart={addToCart} />} 
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;