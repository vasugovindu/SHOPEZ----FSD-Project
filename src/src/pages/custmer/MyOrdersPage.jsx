import React from "react";
import "../../styles/MyOrdersPage.css";
import CartPage from "./CartPage";

const orders = [
  {
    id: "ORD1001",
    date: "12 Mar 2026",
    status: "Delivered",
    items: [
      { name: "Samsung TV", quantity: 1, price: 45000 },
      { name: "Bluetooth Speaker", quantity: 2, price: 2000 }
    ]
  },
  {
    id: "ORD1002",
    date: "10 Mar 2026",
    status: "Shipped",
    items: [
      { name: "iPhone", quantity: 1, price: 75000 }
    ]
  },
  {
    id: "ORD1003",
    date: "8 Mar 2026",
    status: "Pending",
    items: [
      { name: "Men Shirt", quantity: 3, price: 1200 }
    ]
  }
];

const MyOrdersPage = () => {

  const getTotal = (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="orders-page">
        <CartPage/>

      <h2>My Orders</h2>

      {orders.map((order) => (

        <div className="order-box" key={order.id}>

          <div className="order-header">

            <div>
              <strong>Order ID:</strong> {order.id}
            </div>

            <div>
              <strong>Date:</strong> {order.date}
            </div>

            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>

          </div>

          <div className="order-items">

            {order.items.map((item, index) => (

              <div className="order-item" key={index}>

                <span>{item.name}</span>

                <span>Qty: {item.quantity}</span>

                <span>₹{item.price}</span>

              </div>

            ))}

          </div>

          <div className="order-total">
            Total: ₹{getTotal(order.items)}
          </div>

        </div>

      ))}

    </div>
  );
};

export default MyOrdersPage;