import React, { useEffect, useState } from "react";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="products my-5 container">
        <h1 className="text-center brand-name">All Products</h1>
        <div className="products-container">
          {products.map((product, index) => (
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
                <button className="btn add-btn">Buy Now</button>
              </div>

              {/* <Link to={`/booking/${product._id}`}>
            <button>Book Now</button>
          </Link> */}
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
