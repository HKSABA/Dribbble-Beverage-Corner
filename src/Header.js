import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ backButton, shopButton }) {
  return (
    <div className="header">
      {backButton ? (
        <Link to="/">
          <IconButton>
            <ArrowBackRoundedIcon 
              className="header__icon" 
              fontSize="large" 
              style={{ color: "white" }} />
          </IconButton>
        </Link>
      ) : (
        <IconButton>
          <MenuIcon 
            className="header__icon" 
            fontSize="large" 
            style={{ color: "black" }} />
        </IconButton>  
      )}
      {shopButton ? (
        <IconButton>
          <ShoppingCartOutlinedIcon 
            className="header__icon" 
            fontSize="large" 
            style={{color: "white"}} />
        </IconButton>
      ) : (
        <IconButton>
          <MoreVertIcon 
            className="header__icon" 
            fontSize="large" 
            style={{ color: "black" }} />
        </IconButton>
      )}
    </div>
  );
}

export default Header;
