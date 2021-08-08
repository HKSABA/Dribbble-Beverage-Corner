import React from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import "./JuicePage.css";

function Strawberry() {
  return (
    <div id="strawberry" className="juicePage">
      <Header backButton="/" shopButton />
      <div className="juicepage__body">
        <Product
          name="Strawberry fields"
          choices="Frozen Blueberries, Banana, Strawberry Juice"
          nutrient="Vitamin C Healthy"
          rating="4.8"
          price="$20"
          image="http://rosacanina.eu/wp-content/uploads/2017/09/smoothie_01.png"
        />
      </div>
      <div className="juicepage__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Strawberry;
