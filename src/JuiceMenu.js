import React from "react";
import "./JuiceMenu.css";

function JuiceMenu({
    image,
    title,
    options
}) {
    return (
        <div className="juiceMenu">
          <div className="juiceMenu__image">
            <img src={image} alt="" />
          </div>
          <div className="juiceMenu__description">
            <h3>{title}</h3>
            <p>{options}</p>
          </div>
        </div>
    )
}

export default JuiceMenu;
