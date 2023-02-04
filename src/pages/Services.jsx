import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

function Services({ helmet }) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prepareData = (data) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data.map((line, index) => {
      if (index > 1) {
        data[9].forEach((key, j) => {
          if (line[j] !== "" && line[j] !== "PIZZAS") {
            obj = { ...obj, [key]: line[j] };
          }
        });
      }
      return obj;
    });

    json.shift();
    setPizzas([...new Set(json)]);
  };

  useEffect(() => {
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
        <h1>Nos pizzas</h1>
        <div>
          {pizzas &&
            pizzas
              .filter((el) => el.Nom !== "Nom" && el.Base === "nouveautes")
              .map((pizza) => (
                <div className="pizza">
                  <h3>{pizza.Nom}</h3>
                  <p>{pizza.Description}</p>
                  <div>
                    <ul>
                      <li>Pâte italienne</li>
                      <li>26cm : {pizza.p1} €</li>
                      <li>33cm : {pizza.p2} €</li>
                    </ul>
                    <ul>
                      <li>Pâte fine</li>
                      <li>33cm : {pizza.p3} €</li>
                      <li>40cm : {pizza.p4} €</li>
                    </ul>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
