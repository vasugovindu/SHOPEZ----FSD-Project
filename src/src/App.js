import { useState, useEffect } from "react";
import Footer from "./components/common/FooterTemp";
import Navbar from "./components/common/NavbarTemp";

import SellerNavbar from "./pages/seller/SellerNavbar";
import AdminNavbar from "./admin/AdminNavbar";

import { Routes, Route } from "react-router-dom";

import UserLogin from "./login/Userlogin";
import HomePage from "./pages/Homepage";
import ProductListPage from "./pages/custmer/ProductListPage";
import PlaceOrderPage from "./pages/custmer/PlaceOrderPage";
import MyOrdersPage from "./pages/custmer/MyOrdersPage";

import SellerDashboard from "./pages/seller/SellerDashboard";
import AddProductForm from "./pages/seller/AddProductForm";

import AdminCategoriesPage from "./admin/AdminCategoriesPage";
import AdminUsersPage from "./admin/AdminUsersPage";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {/* Dynamic Navbar */}

      {role === "SELLER" && <SellerNavbar />}
      {role === "ADMIN" && <AdminNavbar />}
      {role !== "SELLER" && role !== "ADMIN" && <Navbar />}

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/userlogin" element={<UserLogin />} />

        <Route path="/products" element={<ProductListPage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />

        <Route
          path="/seller/dashboard"
          element={
            <ProtectedRoute allowedRole="SELLER">
              <SellerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/seller/add-product"
          element={
            <ProtectedRoute allowedRole="SELLER">
              <AddProductForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminCategoriesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <AdminUsersPage />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;