import React, { useState } from "react";
import "../../styles/AddProductForm.css";

const AddProductForm = () => {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Added:", product);

    // future API
    // POST /api/seller/product
  };

  return (
    <div className="add-product-page">

      <h2>Add New Product</h2>

      <form className="product-form" onSubmit={handleSubmit}>

        <label>Product Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          required
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          required
          onChange={handleChange}
        />

        <label>Stock</label>
        <input
          type="number"
          name="stock"
          required
          onChange={handleChange}
        />

        <label>Category</label>
        <select name="category" onChange={handleChange} required>

          <option value="">Select Category</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Computers">Computers</option>
          <option value="TV">TV</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Furniture">Furniture</option>

        </select>

        <button type="submit">Add Product</button>

      </form>

    </div>
  );
};

export default AddProductForm;