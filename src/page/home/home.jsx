import React from "react";
import Banner from "./banner/banner";
import Menu from "../../components/menu/menu";
import ProductCategory from "./banner/productCategory";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <div style={{ marginLeft: "150px", marginRight: "150px" }}>
        <Menu />
        <Banner />
        <ProductCategory />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
