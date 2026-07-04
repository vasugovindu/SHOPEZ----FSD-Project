
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaShoppingCart,
  FaBoxOpen,
  FaHome
} from "react-icons/fa";

import "../../styles/Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          ShopEase
        </Link>
      </div>

      {/* Search */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products, brands and more"
        />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Right Menu */}
      <div className="navbar-right">

        {/* Home */}
        <Link to="/" className="nav-item">
          <FaHome /> Home
        </Link>

        {/* Login */}
        <Link to="/userlogin" className="nav-item">
          <FaUserCircle /> Login
        </Link>

        {/* Orders */}
        <Link to="/placeorder" className="nav-item">
          <FaBoxOpen /> Orders
        </Link>

        {/* Cart */}
        <Link to="/my-orders" className="nav-item">
          <FaShoppingCart /> Cart
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;