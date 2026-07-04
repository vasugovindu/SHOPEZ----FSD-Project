import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/SellerNavbar.css";

const SellerNavbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/userlogin");
  };

  return (
    <nav className="seller-navbar">

      <h2 className="seller-logo">Seller Panel</h2>

      <div className="seller-links">

        <Link to="/seller/dashboard">Dashboard</Link>

        <Link to="/seller/add-product">Add Product</Link>

        <Link to="//userlogin"><button onClick={logout}>Logout</button></Link>

      </div>

    </nav>
  );
};

export default SellerNavbar;