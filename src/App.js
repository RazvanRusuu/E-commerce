import React from "react";
import Aos from "aos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  SingleProduct,
  Cart,
  // Checkout,
  Error,
  About,
  Products,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components/index";
import { useUserContext } from "./context/user_context";

function App() {
  Aos.init();

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
