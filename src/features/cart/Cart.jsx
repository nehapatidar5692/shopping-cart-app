import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h2 className="mb-3">Your Cart</h2>
      {items.length === 0 ? (
        <div className="alert alert-info">Cart is empty</div>
      ) : (
        <ul className="list-group mb-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>
                ₹{item.price * item.quantity}{" "}
                <button
                  className="btn btn-sm btn-danger ms-3"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Cart;
