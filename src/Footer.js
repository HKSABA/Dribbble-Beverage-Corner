import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer" id="white__text">
            <div className="footer__text">
              <h2>Suggested Desserts</h2>
              <p>Here are different flavors of your favorite desserts</p>
            </div>
            <div className="desserts">
                <div className="dessert__image">
                    <img 
                      src="https://www.keyingredient.com/media/91/29/fba573ad413693dcae5d5e20cfdd898ff624.jpg/rh/strawberry-pavlova-with-mint.jpg"
                      alt=""
                    />
                </div>
                <div className="dessert__image">
                    <img 
                      src="https://belleofthekitchen.com/wp-content/uploads/2020/04/best-chocolate-cake-square.jpg"
                      alt=""
                    />
                </div>
                <div className="dessert__image">
                    <img 
                      src="https://www.rockrecipes.com/wp-content/uploads/2012/08/Brandied-Peach-Shortcake-overhead-phot-of-entire-shortcake.jpg"
                      alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;
