import React from "react";
import { Link } from "react-router-dom";
import cb from "../../assets/visa.png";
import mc from "../../assets/mc.png";
import tk from "../../assets/tickets.png";
import cheque from "../../assets/logo-cheque.gif";
import ticket from "../../assets/chequedej.png";
import vac from "../../assets/vacances.jpg";
import facebook from "../../assets/facebook.svg";
import barket from "../../assets/barket.png";

function Footer({ langue }) {
  return (
    <footer className="flex-col center padding1 footer ">
      <div>
        <h2>
          {langue === "fr"
            ? "Moyens de paiement acceptés"
            : "Mwayin péman aksèpté"}
        </h2>
        <div className="flex">
          <img src={cb} alt="mastercard logo" />
          <img src={mc} alt="tickets restaurants logo" />
          <img src={ticket} alt="tickets restaurants logo" />
          <img src={tk} alt="tickets restaurants logo" />
          <img src={cheque} alt="cheque accepté logo" />
          <img src={vac} alt="cheques vacances accepté logo" />
        </div>
      </div>
      <div>
        <h2>
          {langue === "fr"
            ? "Retrouver nous sur les réseaux"
            : "Artrouv anou su bann rézo"}
        </h2>
        <ul className="barket">
          <a href="https://www.facebook.com/pages/Via-Veneto-Pizza/118507218238458">
            <li>
              <img src={facebook} alt="logo de Facebook" />
            </li>{" "}
          </a>
          <a href="https://barket.re">
            <li>
              <img src={barket} alt="barket.re" />
            </li>
          </a>
        </ul>
      </div>

      <small>
        {langue === "fr"
          ? "Designé et développé par le"
          : "Disayné é dévlopé par lo"}
        {"  "}
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
        <small className="small">
          {langue === "fr" ? "Mentions Légales" : "Mansyion Légal"}
        </small>
      </Link>
    </footer>
  );
}

export default Footer;
