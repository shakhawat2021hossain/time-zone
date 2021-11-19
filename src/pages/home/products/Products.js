import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products my-5 container">
      <h1 className="text-center brand-name">Our Products</h1>
      <div className="products-container">
        {products.slice(0, 6).map((product, index) => (
          <div className="product shadow p-3 rounded">
            <div className="image">
              <img src={product?.img} alt="" />
            </div>
            <div className="card-body">
              <h3>{product?.Name}</h3>
              <p>{product?.Description}</p>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
              <h5>${product?.Price}</h5>
              <Link to={`/booking/${product._id}`}>
                <button className="btn add-btn">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/allProducts"> View All </Link>
      </div>
    </div>
  );
};

export default Products;
