import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Burger() {
  return (
    <header className="flex padding-header justify-between">
      <Link to="/">
        <img src={logo} alt="logo via veneto" className="logo" />
      </Link>
      <Link to="/Menu">
        <button className="CTA_home" type="button">
          Notre menu
        </button>
      </Link>
    </header>
  );
}

export default Burger;
