import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Watch", price: 5000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container my-4">
      <h2 className="mb-3">Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">₹{p.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => dispatch(addToCart(p))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
