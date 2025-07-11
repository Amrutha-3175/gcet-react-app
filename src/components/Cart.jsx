import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const { cart, setCart, products, user } = useContext(AppContext);
  const [orderValue, setOrderValue] = useState(0);
  const Navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setOrderValue(
      products.reduce((sum, value) => {
        return sum + value.price * (cart[value.pid] ?? 0);
      }, 0)
    );
  }, [products, cart]);

  const increment = (pid) => {
    setCart((prev) => ({
      ...prev,
      [pid]: (prev[pid] || 0) + 1
    }));
  };

  const decrement = (pid) => {
    setCart((prev) => ({
      ...prev,
      [pid]: Math.max((prev[pid] || 1) - 1, 0)
    }));
  };

  const placeOrder = async () => {
    const url = `${API}/orders/new`;
    await axios.post(url, { email: user.email, orderValue: orderValue });
    setCart({});
    Navigate("/order");
  };

  const loginToOrder = () => {
    Navigate("/login");
  };

  return (
    <div>
      My Cart
      {products &&
        products.map(
          (value) =>
            cart[value.pid] > 0 && (
              <div key={value.pid}>
                {value.pid} - {value.name} - ₹{value.price} -
                <button onClick={() => decrement(value.pid)}>-</button>
                {cart[value.pid]}
                <button onClick={() => increment(value.pid)}>+</button>
                = ₹{value.price * cart[value.pid]}
              </div>
            )
        )}
      <hr />
      <h3>Order Value: ₹{orderValue}</h3>
      <hr />
      {user.name ? (
        <button onClick={placeOrder}>Place Order</button>
      ) : (
        <button onClick={loginToOrder}>Login to Order</button>
      )}
      <hr />
    </div>
  );
}