import React from "react";
import { Link } from "react-router-dom";

function Burger() {
  return (
    <header className="flex padding-header justify-between align-center">
      <Link to="/">
        <h2>Via Veneto</h2>
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
