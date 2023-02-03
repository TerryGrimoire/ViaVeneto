import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "../components/Home/LandingPage/Image";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Image title={helmet.title} />
      <section className="section2">
        <article>
          <h2>Découvez notre entreprise familiale</h2>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
            consequuntur eius! Suscipit, incidunt. Ab eius consequatur nostrum
            recusandae? Ipsa iusto, officia id asperiores vitae sapiente
            expedita a tempora culpa, rem alias? Fuga obcaecati nesciunt vitae
            quaerat facere, eligendi quis illo magnam aspernatur doloribus animi
            quibusdam at facilis. Ut, rerum quasi.
          </p>
        </article>
        <article>
          <h2>Des pizzas Hallal de qualité</h2>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
            consequuntur eius! Suscipit, incidunt. Ab eius consequatur nostrum
            recusandae? Ipsa iusto, officia id asperiores vitae sapiente
            expedita a tempora culpa, rem alias? Fuga obcaecati nesciunt vitae
            quaerat facere, eligendi quis illo magnam aspernatur doloribus animi
            quibusdam at facilis. Ut, rerum quasi.
          </p>
        </article>
      </section>
      <section>
        <div>
          <h2>Les horaires</h2>
          <ul>
            <li>Lundi : Fermé</li>
            <li>Mardi : 11h-14h | 18h-22h</li>
            <li>Mercredi : 11h-14h | 18h-22h</li>
            <li>Jeudi : 11h-14h | 18h-22h</li>
            <li>Vendredi : 11h-14h | 18h-22h</li>
            <li>Samedi : 18h-22h</li>
            <li>Dimanche :18h-22h</li>
          </ul>
        </div>
        <div>
          <h2>Moyens de paiement acceptés</h2>
        </div>
      </section>
    </main>
  );
}
