import React from "react";
import "../styles/App.css";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Scan from "./Scan/Scan";
import Diagnostic from "./Diagnostic/Diagnostic";
import Newsletter from "./Newsletter/Newsletter";
import Vente from "./Vente/Vente";
import Footer from "./Footer/Footer";
import Functionnalities from "./Functionnalites/Functionnalities";

function App() {
  return (
    <div>
      <Hero />
      <Functionnalities />
      <Services />
      <Scan />
      <Diagnostic />
      <Vente />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
