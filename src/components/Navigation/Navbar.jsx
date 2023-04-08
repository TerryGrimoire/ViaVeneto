import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/Menu">
        <button className="CTA_home" type="button">
          Notre menu
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
