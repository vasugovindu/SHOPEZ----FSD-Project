import React from "react";
import "../styles/Homepage.css";

const products = [
  {
    name: "iPhone 14",
    description: "Latest Apple smartphone with A15 chip",
    price: 75000,
    stock: 10,
    category: "Mobiles",
    image: "/assets/Mobiles/1.jpg"
  },
  {
    name: "Dell Laptop",
    description: "High performance laptop for work and gaming",
    price: 65000,
    stock: 7,
    category: "Computers",
    image: "/assets/Computers/1.jpg"
  },
  {
    name: "Samsung Smart TV",
    description: "50 inch Ultra HD Smart Television",
    price: 42000,
    stock: 5,
    category: "TV",
    image: "/assets/TV/1.jpg"
  },
  {
    name: "Kitchen Mixer",
    description: "Multipurpose kitchen mixer grinder",
    price: 3500,
    stock: 15,
    category: "Kitchen",
    image: "/assets/Kitchen/1.jpg"
  },
  {
    name: "Wooden Sofa",
    description: "Comfortable wooden living room sofa",
    price: 18000,
    stock: 3,
    category: "Furniture",
    image: "/assets/Furniture/1.jpg"
  },
  {
    name: "Men Casual Shirt",
    description: "Stylish cotton shirt for men",
    price: 1200,
    stock: 20,
    category: "Men Wear",
    image: "/assets/MenWear/1.jpg"
  },
  {
    name: "Women Dress",
    description: "Beautiful casual dress for women",
    price: 1500,
    stock: 12,
    category: "Women",
    image: "/assets/Woman/1.jpg"
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking smart watch",
    price: 4000,
    stock: 8,
    category: "Watch",
    image: "/assets/Watch/2.jpg"
  }
];

const HomePage = () => {
  return (
    <div className="home">

      {/* Banner */}
      <div className="banner">
        <img src="/assets/banner1.jpg" alt="banner" />
      </div>

      <h2 className="title">Featured Products</h2>

      <div className="product-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="desc">{product.description}</p>

            <p className="price">₹{product.price}</p>

            <p className="stock">
              Stock: {product.stock}
            </p>

            <span className="category">
              {product.category}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default HomePage;