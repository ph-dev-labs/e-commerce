import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="title">TestedShop</h1>
      <div className="links-cont">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="cart-profile-cont">
        <div className="profile-cont">
          <CgProfile className="icon"/>
          <span className="cos-name">mezie</span>
        </div>
        <div className="cart-cont">
          <BsCart4 className="icon"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
