import React from "react";
import "../style.scss";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Feature from "../component/Feature";
import PropertyList from "../component/PropertyList";
import FeaturedPropeties from "../component/FeaturedPropeties";
import MailList from "../component/MailList";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedPropeties />
        <MailList />
        <Footer />

      </div>
    </div>
  );
};

export default Home;
