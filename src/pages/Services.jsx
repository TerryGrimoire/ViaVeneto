import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import plat from "../assets/plat.png";
import dessert from "../assets/dessert.png";
import pizzaImg from "../assets/pizza.png";
import salade from "../assets/salade.png";
import boisson from "../assets/boisson.png";
import pate from "../assets/pate.png";
import news from "../assets/new.png";

function Services({ helmet }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (JSON.parse(sessionStorage.getItem("pizzas")) === null) {
      navigate("/");
    }
  }, []);

  const pizzas = JSON.parse(sessionStorage.getItem("pizzas"));

  const [choice, setChoice] = useState("");
  return (
    <div className="menu">
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section>
        <h1>Nos pizzas</h1>
        <div className="button_container">
          <button
            type="button"
            className={
              choice === "" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("")}
          >
            <img src={plat} alt="pizza icone" />
            <p>Les plats</p>
          </button>
          <button
            type="button"
            className={
              choice === "nouveautes"
                ? "button_Choice choisie"
                : "button_Choice"
            }
            onClick={() => setChoice("nouveautes")}
          >
            <img src={pizzaImg} alt="oeuf icone" />
            <p>Pizzas</p>
          </button>
          <button
            type="button"
            className={
              choice === "Viandes" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("Viandes")}
          >
            <img src={pate} alt="viande icone" />
            <p>Pâtes</p>
          </button>
          <button
            type="button"
            className={
              choice === "Poissons" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("Poissons")}
          >
            <img src={salade} alt="poisson icone" />
            <p>Salades</p>
          </button>
          <button
            type="button"
            className={
              choice === "Végétarienne"
                ? "button_Choice choisie"
                : "button_Choice"
            }
            onClick={() => setChoice("Végétarienne")}
          >
            <img src={dessert} alt="poivron icone" />
            <p>Desserts</p>
          </button>
          <button
            type="button"
            className={
              choice === "sucrée" ? "button_Choice choisie" : "button_Choice"
            }
            onClick={() => setChoice("sucrée")}
          >
            <img src={boisson} alt="cupcake icone" />
            <p>Boissons</p>
          </button>
        </div>
        <div>
          {pizzas !== null && choice === "" ? (
            <div>
              <p className="dispo">
                {pizzas !== null &&
                  pizzas.filter((el, index) => el.Nom !== "Nom" && index > 1)
                    .length}{" "}
                pizzas disponibles
              </p>

              <div className="dispo">
                <small>1 pizza achetée = une boisson offerte</small>
                <small>3 pizzas achetées = une bouteille offerte (1.5L)</small>
                <small>Moitié-moitié : 1€ de plus</small>
                <small>Calzone : 3€ de plus</small>
                <div className="nouveau">
                  <img src={news} alt="nouveau" />
                  <h3>Salade à composer : 8,50€</h3>
                  <div>
                    <small>2 bases aux choix </small>
                    <small>4 ingrédients</small>
                    <small>1 viande ou poisson</small>
                  </div>
                </div>
              </div>

              {pizzas !== null &&
                pizzas
                  .filter((el, index) => el.Nom !== "Nom" && index > 1)
                  .map((pizza) => (
                    <div className="pizza" key={pizza.Nom}>
                      <div>
                        <h3>{pizza.Nom}</h3>
                        <p>{pizza.Description}</p>
                      </div>

                      <div className="prix">
                        {pizza.p2 === "-" ? (
                          <ul>
                            <li>Prix </li>
                            <li>{pizza.p1} €</li>
                          </ul>
                        ) : (
                          <>
                            {" "}
                            <ul>
                              <li>Pâte italienne</li>
                              <li>26cm : {pizza.p1} €</li>
                              <li>33cm : {pizza.p2} €</li>
                            </ul>
                            {pizza.p3 === "-" ? null : (
                              <ul>
                                <li>Pâte fine</li>
                                <li>33cm : {pizza.p3} €</li>
                                <li>40cm : {pizza.p4} €</li>
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
            </div>
          ) : (
            <div>
              <p className="dispo">
                {pizzas !== null &&
                  pizzas.filter((el) => el.Nom !== "Nom" && el.Base === choice)
                    .length}{" "}
                pizzas disponibles
              </p>
              <div className="dispo">
                <small>1 pizza achetée = une boisson offerte</small>
                <small>3 pizzas achetées = une bouteille offerte (1.5L)</small>
                <small>Moitié-moitié : 1€ de plus</small>
                <small>Calzone : 3€ de plus</small>
                <small>
                  <strong>Nouveau :</strong> Formule du midi & bar à salade
                </small>
              </div>
              {pizzas !== null &&
                pizzas
                  .filter((el) => el.Nom !== "Nom" && el.Base === choice)
                  .map((pizza) => (
                    <div className="pizza" key={pizza.Nom}>
                      <div>
                        <h3>{pizza.Nom}</h3>
                        <p>{pizza.Description}</p>
                      </div>

                      <div className="prix">
                        {pizza.p2 === "-" ? (
                          <ul>
                            <li>Prix </li>
                            <li>{pizza.p1} €</li>
                          </ul>
                        ) : (
                          <>
                            {" "}
                            <ul>
                              <li>Pâte italienne</li>
                              <li>26cm : {pizza.p1} €</li>
                              <li>33cm : {pizza.p2} €</li>
                            </ul>
                            {pizza.p3 === "-" ? null : (
                              <ul>
                                <li>Pâte fine</li>
                                <li>33cm : {pizza.p3} €</li>
                                <li>40cm : {pizza.p4} €</li>
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Services;
