import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import papa from "papaparse";

import plat from "../assets/plat.png";
import dessert from "../assets/dessert.png";
import pizzaImg from "../assets/pizza.png";
import salade from "../assets/salade.png";
import boisson from "../assets/boisson.png";
import pate from "../assets/pate.png";

function Services({ helmet }) {
  const [pizzas, setPizzas] = useState([]);
  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 3) {
        data[9].forEach((key, j) => {
          if (
            line[j] !== "Description" &&
            line[j] !== "Type" &&
            line[j] !== "id" &&
            line[j] !== "Nom" &&
            line[j] !== "prix"
          ) {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    sessionStorage.setItem("pizzas", JSON.stringify([...new Set(json)]));
    setPizzas(
      JSON.parse(sessionStorage.getItem("pizzas")).filter(
        (el, index) => index > 0
      )
    );
  };

  const [choice, setChoice] = useState("plat");

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(import.meta.env.VITE_DATA)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);
  return (
    <div className="menu">
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section>
        <h1>Notre carte</h1>
        <div className="button_container">
          <button
            type="button"
            className={
              choice === "plat" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("plat")}
          >
            <img src={plat} alt="pizza icone" />
            <p>Les plats</p>
          </button>
          <button
            type="button"
            className={
              choice === "pizza" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("pizza")}
          >
            <img src={pizzaImg} alt="oeuf icone" />
            <p>Pizzas</p>
          </button>
          <button
            type="button"
            className={
              choice === "pate" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("pate")}
          >
            <img src={pate} alt="viande icone" />
            <p>Pâtes</p>
          </button>
          <button
            type="button"
            className={
              choice === "salade" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("salade")}
          >
            <img src={salade} alt="poisson icone" />
            <p>Salades</p>
          </button>
          <button
            type="button"
            className={
              choice === "dessert" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("dessert")}
          >
            <img src={dessert} alt="poivron icone" />
            <p>Desserts</p>
          </button>
          <button
            type="button"
            className={
              choice === "boisson" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("boisson")}
          >
            <img src={boisson} alt="cupcake icone" />
            <p>Boissons</p>
          </button>
        </div>

        <div>
          <p className="dispo">
            {pizzas !== null &&
            pizzas.filter((el) => el.Nom !== "Nom" && el.Type.includes(choice))
              .length > 0 ? (
              <>
                {
                  pizzas.filter(
                    (el) => el.Nom !== "Nom" && el.Type.includes(choice)
                  ).length
                }{" "}
                résultats disponibles
              </>
            ) : (
              <p>chargement de la carte</p>
            )}
          </p>
          <div className="dispo">
            {choice === "pizza" && (
              <div>
                <h4>Suppléments</h4>
                <ul className="supp">
                  <li>1 € pour tout supplément</li>
                  <li>
                    2 € pour les suppléments viande, poisson, chèvre ou
                    roquefort
                  </li>
                  <li>3€ pour le supplément crevette</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            {pizzas !== null &&
              pizzas
                .filter((el) => el.Nom !== "Nom" && el.Type.includes(choice))
                .map((pizza) => (
                  <div className="plats" key={pizza.Nom}>
                    <div>
                      <h3>{pizza.Nom}</h3>
                      <h4>{pizza.prix}</h4>
                    </div>
                    <p>{pizza.Description}</p>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
