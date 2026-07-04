import React, { useState } from "react";
import "../../styles/ProductListPage.css";

const productsData = [
  {
    id: 1,
    name: "Samsung TV",
    category: "TV",
    price: 45000,
    image: "/assets/TV/2.jpg"
  },
  {
    id: 2,
    name: "Dell Laptop",
    category: "Computers",
    price: 65000,
    image: "/assets/Computers/2.jpg"
  },
  {
    id: 3,
    name: "iPhone",
    category: "Mobiles",
    price: 75000,
    image: "/assets/Mobiles/2.jpg"
  },
  {
    id: 4,
    name: "Kitchen Mixer",
    category: "Kitchen",
    price: 3000,
    image: "/assets/Kitchen/2.jpg"
  },
  {
    id: 5,
    name: "Men Shirt",
    category: "MenWear",
    price: 1200,
    image: "/assets/MenWear/2.jpg"
  },
  {
    id: 6,
    name: "Women Dress",
    category: "Woman",
    price: 1800,
    image: "/assets/Woman/2.jpg"
  }
];

const ProductListPage = () => {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="products-page">

      <h2>Browse Products</h2>

      {/* Filter Section */}
      <div className="filters">

        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>

          <option value="All">All Categories</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Computers">Computers</option>
          <option value="TV">TV</option>
          <option value="Kitchen">Kitchen</option>
          <option value="MenWear">Men Wear</option>
          <option value="Woman">Women</option>

        </select>

      </div>

      {/* Product Grid */}
      <div className="product-grid">

        {filteredProducts.map((product) => (

          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">₹{product.price}</p>

            <button>Add to Cart</button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductListPage;