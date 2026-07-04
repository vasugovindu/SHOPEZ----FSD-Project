import React, { useState } from "react";
import "../../styles/PlaceOrderPage.css";

const initialProducts = [
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
    image: "/assets/Mobiles/4.jpg",
    quantity: 1
  }
];

const PlaceOrderPage = () => {

  const [products, setProducts] = useState(initialProducts);
  const [address, setAddress] = useState("");

  const updateQuantity = (id, value) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, quantity: value } : p
    );
    setProducts(updated);
  };

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();

    const orderData = {
      products,
      address,
      total
    };

    console.log("Order Submitted:", orderData);

    // Later connect backend API
    // POST /api/customer/order
  };

  return (
    <div className="order-page">

      <h2>Place Your Order</h2>

      <div className="order-container">

        {/* Product List */}
        <div className="order-products">

          {products.map((product) => (

            <div className="order-card" key={product.id}>

              <img src={product.image} alt={product.name} />

              <div className="order-details">

                <h3>{product.name}</h3>

                <p>Price: ₹{product.price}</p>

                <label>Quantity</label>

                <input
                  type="number"
                  min="1"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, Number(e.target.value))
                  }
                />

              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="order-summary">

          <h3>Order Summary</h3>

          <p>Total Price: <b>₹{total}</b></p>

          <form onSubmit={handleOrder}>

            <label>Delivery Address</label>

            <textarea
              placeholder="Enter delivery address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />

            <button type="submit">Place Order</button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default PlaceOrderPage;