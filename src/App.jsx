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
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header helmet={helmet} />
        <Defilant />
        <Routes>
          <Route path="/" element={<Home helmet={helmet} />} />
          <Route path="/Menu" element={<Services helmet={helmet} />} />
          <Route path="/Mentions" element={<Mentions />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
