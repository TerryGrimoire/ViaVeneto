import React from "react";
import background from "../../../assets/background.jpg";

function Image({ title, langue }) {
  /* Pour utiliser ce composant, suivre les étapes suivantes :

    1/ Remplacer background.png par l'image souhaitée dans Assets
    2/ Remplir landingData
    3/ Importer Image dans le composant souhaitée

    Depuis n'importe quelle page, on peut importer Image de la façon suivante :

    import Image from "../components/Home/LandingPage/Image"
    <Image title={helmet.title} />

  */

  return (
    <div className="landing_page container">
      <h1>{title}</h1>
      <h2>
        {langue === "fr"
          ? "Une cuisine traditionnelle qui a fait ses preuves."
          : "In kwisin tradisyonel la fini fé son prèv."}
      </h2>
      <img src={background} alt="" className="background_img" />
      <div className="veil" />
    </div>
  );
}

export default Image;
