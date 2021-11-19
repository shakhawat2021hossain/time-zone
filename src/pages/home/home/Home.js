import React from "react";
import Banner from "../banner/Banner";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Products from "../products/Products";
import Review from "../review/Review";
import Subscribe from "../subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
