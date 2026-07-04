import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminNavbar.css";

const AdminNavbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/userlogin");
  };

  return (
    <nav className="admin-navbar">

      <h2 className="admin-logo">Admin Panel</h2>

      <div className="admin-links">

        <Link to="/admin/categories">Categories</Link>

        <Link to="/admin/users">Users</Link>
        <Link to="/userlogin"><button onClick={logout}>Logout</button></Link>

        

      </div>

    </nav>
  );
};

export default AdminNavbar;