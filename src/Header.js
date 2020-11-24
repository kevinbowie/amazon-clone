import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Logo"
      />
      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_nav_option">
          <span className="header_nav_option_top">Hello Guest</span>
          <span className="header_nav_option_bottom">Sign In</span>
        </div>
        <div className="header_nav_option">
          <span className="header_nav_option_top">Returns</span>
          <span className="header_nav_option_bottom">& Orders</span>
        </div>
        <div className="header_nav_option">
          <span className="header_nav_option_top">Your</span>
          <span className="header_nav_option_bottom">Prime</span>
        </div>
        <div className="header_nav_option-basket">
          <ShoppingBasketIcon />
          <span className="header_nav_option_bottom header_nav_option-basket_count">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
