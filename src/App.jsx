// src/App.js
import React from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./features/cart/Cart.jsx";

function App() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-3">
        <h1>Redux Toolkit Shopping Cart</h1>
      </header>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
