import React from "react";
import JuiceMenu from "./JuiceMenu";
import { Link } from "react-router-dom"; 
import "./Body.css"; 

function Body() {
  return (
    <div className="body">
      <div className="homepage__title">
        <h1>Healthy Diet</h1>
        <p>
          Healthy Juices for everyone. Pick any of your flavor.
        </p>
      </div>
      <div className="juice__display">
        <div className="juice__image">
          <img
            src="http://rosacanina.eu/wp-content/uploads/2017/09/smoothie_03.png"
            alt=""
          />
        </div>
        <div className="juice__description">
          <h2>Blue Berry Nights</h2>
          <p>Frozen Blueberries, Banana and Raspberry juice</p>
        </div>
      </div>

      <div className="juice__displays">
        <Link className="juiceMenu__link" to="/mellon_yellow">
          <JuiceMenu
            image="http://rosacanina.eu/wp-content/uploads/2017/09/smoothie_02.png"
            title="Melon Yellow"
            options="Melon, Pineapple, Banana juice"
          />
        </Link>
        <Link className="juiceMenu__link" to="/green_monster">
          <JuiceMenu
            image="http://rosacanina.eu/wp-content/uploads/2013/06/product_03.png"
            title="Green Monster"
            options="Cucumber, Lemon, Apple juice"
          />
        </Link>
        <Link className="juiceMenu__link" to="/strawberry_fields">
          <JuiceMenu
            image="http://rosacanina.eu/wp-content/uploads/2017/09/smoothie_01.png"
            title="Strawberry Fields"
            options="Blueberries, Strawberry juice"
          />
        </Link>
      </div>
    </div>
  );
}

export default Body;
