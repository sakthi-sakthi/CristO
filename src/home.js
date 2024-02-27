import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import AboutCristo from "./Components/AboutCristo";
import WelcomeCristo from "./Components/WelcomeCristo";
import Products from "./Components/Products";
import DataTransfer from "./Components/DataTransfer";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <AboutCristo />
      <WelcomeCristo />
      <Products />
      <br />
      <DataTransfer />
      <Footer />
    </>
  );
};

export default Home;
