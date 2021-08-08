import React from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import "./JuicePage.css";

function Avocado() {
  return (
    <div id="avocado" className="juicePage" >
      <Header backButton="/" shopButton />
      <div className="juicepage__body">
        <Product
          name="Green monster"
          choices="Cucumber, Lemon, Apple juice, Spinach Kale"
          nutrient="Vitamin B Healthy"
          rating="4.5"
          price="$22"
          image="http://rosacanina.eu/wp-content/uploads/2013/06/product_03.png"
        />
      </div>
      <div className="juicepage__footer">
        <Footer />
      </div> 
    </div>
  );
}

export default Avocado;
