import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementCount,
  decrementCount,
} from "../features/basket/basketSlice";

const Basket = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(incrementCount(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementCount(product));
  };

  const handleRemove = (product) => {
    dispatch(removeItem(product));
  };

  const getTotal = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  return (
    <div>
      <h2>Your Basket</h2>
      {basketItems.length === 0 ? (
        <p>Basket is empty.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Count</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.count}</td>
                <td>${item.price * item.count}</td>
                <td>
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <button
                    onClick={() => handleDecrement(item)}
                    disabled={item.count === 1}
                  >
                    -
                  </button>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">
                <strong>Total</strong>
              </td>
              <td colSpan="2">
                <strong>${getTotal()}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Basket;
