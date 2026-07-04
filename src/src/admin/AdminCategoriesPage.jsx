import React, { useState } from "react";
import "../styles/AdminCategoriesPage.css";
import { Link } from "react-router-dom";

const AdminCategoriesPage = () => {

  const [categories, setCategories] = useState([
    "Mobiles",
    "Computers",
    "TV",
    "Furniture"
  ]);

  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {

    if (newCategory.trim() === "") return;

    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const deleteCategory = (index) => {

    const updated = categories.filter((_, i) => i !== index);
    setCategories(updated);

  };

  return (
    <div className="admin-category-page">

      <h2>Category Management</h2>

      <div className="category-add">

        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <button onClick={addCategory}>Add</button>

      </div>

      <div className="admin-nav">

  <Link to="/admin/categories">
    <button>Categories</button>
  </Link>

  <Link to="/admin/users">
    <button>Users</button>
  </Link>

</div>

      <table>

        <thead>
          <tr>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {categories.map((cat, index) => (

            <tr key={index}>

              <td>{cat}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteCategory(index)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AdminCategoriesPage;