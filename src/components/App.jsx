import React from "react";
import "../styles/App.css";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Scan from "./Scan/Scan";
import Diagnostic from "./Diagnostic/Diagnostic";
import Newsletter from "./Newsletter/Newsletter";
import Meteo from "./Meteo/Meteo";
import Vente from "./Vente/Vente";
import Footer from "./Footer/Footer";
import Functionnalities from "./Functionnalites/Functionnalities";
import DetectionMaladie from "./DetectionMaladie/DetectionMaladie";
// import Img from "./img";

function App() {
  return (
    <div className="w-[100vm] overflow-hidden">
      <Hero />
      <Functionnalities />
      <Services />
      <Scan />
      <Meteo />
      <DetectionMaladie />
      <Diagnostic />
      <Vente />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
