import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Image from "../components/Home/LandingPage/Image";

import loc from "../assets/loc.png";
import tel from "../assets/tel.png";
import cal from "../assets/cal.png";
import op from "../assets/op.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Image title={helmet.title} />
      <section className="articles_container">
        <article>
          <h2>Ouvert depuis plus de 35 ans</h2>
          <p>
            C'est en 1988 que Fabienne et Serge ont ouvert le Via Veneto à Saint
            Denis. Au fil des années, ils ont su faire de leur restaurant un
            lieu convivial, authentique et familial. Ici, les plats
            méditerranéens sont à l'honneur. On les cuisine avec rigueur et
            générosité pour assurer à chaque client une expérience gustative
            satisfaisante mêlant tradition et passion.
          </p>
        </article>
        <article>
          <h2>Des plats de qualité</h2>
          <p>
            Nous proposons une variétés de plats faits maisons qui émerveillent
            les papilles de nos clients depuis de nombreuses années. Nos
            produits sont séléctionnés avec minutie, nos pizzas sont faites avec
            la vraie pâte à l'italienne et nos recettes nous viennent tout droit
            de notre héritage familiale. C'est en celà que notre cuisine a un
            caractère si particulier.
          </p>
        </article>
      </section>
      <section className="retrouve">
        <div className="iframe">
          <h2>Nous retrouver</h2>
          <div className="locaux">
            <p>
              <img src={loc} alt="icone pour localisation" />
              <span className="gras">
                151 Rue Jules Auber, Saint-Denis, 97400, La Réunion
              </span>
            </p>
            <p>
              <img src={tel} alt="icone pour téléphone" />
              <span className="gras">
                Réservez une table directement au{" "}
                <a href="tel:+262262219271">0262219271</a>
              </span>
            </p>
            <p>
              <img src={cal} alt="icone représantant un calendrier" />
              <span className="gras">
                Ouvert du mardi au dimanche. Fermé le lundi.
              </span>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.940523409725!2d55.4543619!3d-20.8827236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827fe74ecf7ed9%3A0xd3403e7b6b2701d6!2sVia%20Veneto!5e0!3m2!1sfr!2sfr!4v1680977961123!5m2!1sfr!2sfr"
            title="google maps"
          />
        </div>
        <div className="hor">
          <div>
            <h2>Nos horaires d'ouverture</h2>
            <img src={op} alt="open store" className="desktop open" />
          </div>
          <ul className="horaires">
            <li>
              <h5>Lundi :</h5> <span>Fermé</span>{" "}
            </li>
            <li>
              <h5>Mardi :</h5> <span>11h45 - 13h45 </span>{" "}
              <span>18h00 - 21h30</span>
            </li>
            <li>
              <h5>Mercredi :</h5> <span>11h45 - 13h45 </span>{" "}
              <span> 18h00 - 21h30</span>
            </li>
            <li>
              <h5>Jeudi :</h5> <span>11h45 - 13h45</span>{" "}
              <span>18h00 - 21h30</span>
            </li>
            <li>
              <h5>Vendredi : </h5> <span>11h45 - 13h45 </span>{" "}
              <span>18h30 - 22h00</span>
            </li>
            <li>
              <h5>Samedi :</h5> <span>18h30 - 22h00</span>
            </li>
            <li>
              <h5>Dimanche :</h5> <span>18h30 - 22h00</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
