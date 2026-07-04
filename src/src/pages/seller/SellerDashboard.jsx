import React, { useState } from "react";
import "../../styles/SellerDashboard.css";

const initialOrders = [
  {
    id: "ORD101",
    product: "Samsung TV",
    customer: "Rahul",
    quantity: 1,
    status: "Pending"
  },
  {
    id: "ORD102",
    product: "iPhone",
    customer: "Anita",
    quantity: 2,
    status: "Shipped"
  }
];

const SellerDashboard = () => {

  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id, newStatus) => {

    const updated = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );

    setOrders(updated);
  };

  return (
    <div className="seller-dashboard">

      <h2>Seller Dashboard</h2>

      <table>

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order.id}>

              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.customer}</td>
              <td>{order.quantity}</td>

              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>

              <td>

                <button
                  onClick={() => updateStatus(order.id,"Shipped")}
                >
                  Ship
                </button>

                <button
                  onClick={() => updateStatus(order.id,"Delivered")}
                >
                  Deliver
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default SellerDashboard;