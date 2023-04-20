import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Mentions from "./pages/Mentions";
import Error from "./pages/Error";

import "./App.css";
import Defilant from "./components/Defilant";

function App() {
  const helmet = {
    title: "Via Veneto",
    href: "https://viaveneto.grimoire",
    description: "Une cuisine traditionnelle qui a fait ses preuves",
  };
  const [langue, setLangue] = useState("fr");

  const handleClick = () => {
    if (langue === "fr") {
      setLangue("re");
    } else setLangue("fr");
  };
  return (
    <div className="appcontainer">
      <BrowserRouter>
        <HelmetProvider>
          <Header helmet={helmet} langue={langue} />
          <Defilant />
          <Routes>
            <Route
              path="/"
              element={<Home helmet={helmet} langue={langue} />}
            />
            <Route
              path="/Menu"
              element={<Services helmet={helmet} langue={langue} />}
            />
            <Route path="/Mentions" element={<Mentions />} langue={langue} />
            <Route path="*" element={<Error />} langue={langue} />
          </Routes>
          <Footer langue={langue} />
          <button
            type="button"
            className={langue === "fr" ? "iconeLangue kr" : " iconeLangue fr"}
            onClick={handleClick}
          > 
            {langue === "fr" ? "KREOL" : "FR"}
          </button>
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
