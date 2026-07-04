import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserLogin.css";

const UserLogin = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("CUSTOMER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    localStorage.setItem("role", role);
    window.location.reload();
    e.preventDefault();

    const loginData = {
      role,
      email,
      password
    };

    console.log("Login Data:", loginData);

    // Save role
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "SELLER") {
      navigate("/seller/dashboard");
    } else if (role === "ADMIN") {
      navigate("/admin/categories");
    }else if (role === "CUSTOMER") {
      navigate("/");} 
    else {
      navigate("/");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Login to ShopEase</h2>

        <form onSubmit={handleLogin}>

          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="SELLER">Seller</option>
            <option value="ADMIN">Administrator</option>
          </select>

          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

        </form>

      </div>

    </div>
  );
};

export default UserLogin;