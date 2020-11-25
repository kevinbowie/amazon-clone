import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_nav_option">
            <span className="header_nav_option_top">Hello Guest</span>
            <span className="header_nav_option_bottom">Sign In</span>
          </div>
        </Link>
        <div className="header_nav_option">
          <span className="header_nav_option_top">Returns</span>
          <span className="header_nav_option_bottom">& Orders</span>
        </div>
        <div className="header_nav_option">
          <span className="header_nav_option_top">Your</span>
          <span className="header_nav_option_bottom">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_nav_option-basket">
            <ShoppingBasketIcon />
            <span className="header_nav_option_bottom header_nav_option-basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
