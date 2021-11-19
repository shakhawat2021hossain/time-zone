import React from "react";
import Banner from "../banner/Banner";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Products from "../products/Products";
import Review from "../review/Review";
import Subscribe from "../subscribe/Subscribe";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <About></About>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
