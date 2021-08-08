import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./Product.css";

function Product({ name, choices, nutrient, rating, price, image }) {
  return (
    <div className="product">
      <div className="product__details" id="white__text">
        <h1>{name}</h1>
        <br />
        <p>{choices}</p>
        <br />
        <h3>{nutrient}</h3>
        <br />
        <p id="product__rating">
          <StarIcon fontSize="large" />
          &nbsp;&nbsp;<strong>{rating}</strong>
        </p>
        <br />
        <p>Staring from</p>
        <h1>{price}</h1>
        <p>Promotional Price</p>
        <br />
        <br />
        <div id="product__buy">
          <h3>Buy Now</h3>
        </div>
      </div>
      <div className="product__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Product;
