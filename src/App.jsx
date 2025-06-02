import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <header>
        <h1>Online Shopping Section</h1>
        <nav>
          <Link to="/">Home</Link> - <Link to="/cart">Cart</Link> - <Link to="/login">Login</Link>
        </nav>
        <hr />
      </header>

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>

      <footer>
        <hr />
        &copy; 2025. All rights Reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;