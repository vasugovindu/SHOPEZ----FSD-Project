import React, { useState } from "react";
import "../../styles/CartPage.css";

const initialCart = [
  {
    id: 1,
    name: "Samsung TV",
    price: 45000,
    image: "/assets/TV/1.jpg",
    quantity: 1
  },
  {
    id: 2,
    name: "iPhone",
    price: 75000,
    image: "/assets/Mobiles/1.jpg",
    quantity: 1
  }
];

const CartPage = () => {

  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h2>My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (

            <div className="cart-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-details">

                <h3>{item.name}</h3>

                <p>Price: ₹{item.price}</p>

                <div className="qty-controls">

                  <button onClick={() => decreaseQty(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQty(item.id)}>+</button>

                </div>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>

            </div>

          ))}

          <div className="cart-total">

            <h3>Total: ₹{total}</h3>

            <button className="checkout-btn">
              Proceed to Order
            </button>

          </div>

        </>
      )}

    </div>
  );
};

export default CartPage;