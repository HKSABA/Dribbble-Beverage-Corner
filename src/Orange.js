import React from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import "./JuicePage.css";

function Orange() {
  return (
    <div id="orange" className="juicePage" >      
      <Header backButton="/" shopButton />
      <div className="juicepage__body">
        <Product
          name="Mellon yellow"
          choices="Melon, Pineapple juice, Banana"
          nutrient="Vitamin A Healthy"
          rating="4.9"
          price="$18"
          image="http://rosacanina.eu/wp-content/uploads/2017/09/smoothie_02.png"
        />
      </div>
      <div className="juicepage__footer">
        <Footer />
      </div> 
    </div>
  );
}

export default Orange;
