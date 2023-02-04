import React from "react";
import { Link } from "react-router-dom";
import cb from "../../assets/visa.png";
import cheque from "../../assets/cheque.png";
import ticket from "../../assets/chequedej.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className="flex-col center padding1 footer ">
      <div>
        <h2>Moyens de paiement acceptés</h2>
        <div className="flex">
          <img src={cb} alt="mastercard logo" />
          <img src={ticket} alt="tickets restaurants logo" />
          <img src={cheque} alt="cheque accepté logo" />
        </div>
      </div>
      <div className="footer_contact">
        <h2>Nos réseaux sociaux</h2>

        <ul className="flex">
          <li>
            <a href="https://www.facebook.com/planetpizza974">
              <img src={facebook} alt="logo de Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/planetpizza_974/">
              <img src={instagram} alt="logo de Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <small>
        Designé et développé par le{"  "}
        <a
          href="https://grimoire-numerique.re/"
          target="_blank"
          rel="noreferrer"
          className="gn"
        >
          Grimoire Numérique
        </a>
      </small>
      <Link to="/Mentions">
        <small className="small">Mentions Légales</small>
      </Link>
    </footer>
  );
}

export default Footer;
