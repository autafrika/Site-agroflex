import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Hero_copy from "./Hero copy/Hero";
// import Hero from "./Hero/Hero";
// import Services from "./Services/Services";
// import ChatAi from "./ChatAi/ChatAi";
// import Notifications from "./Notifications/Notifications";
// import Diagnostic from "./Diagnostic/Diagnostic";
import Newsletter from "./Newsletter/Newsletter";
// import Meteo from "./Meteo/Meteo";
// import Vente from "./Vente/Vente";
import Footer from "./Footer/Footer";
// import Functionnalities from "./Functionnalites/Functionnalities";
// import DetectionMaladie from "./DetectionMaladie/DetectionMaladie";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Marche from "./Marche/Marche";
import Prix from "./Prix/Prix";
import Cooperative from "./Cooperative/Cooperative";
import Header from "./Header/Header";
// import Confirm from "./Newsletter/Confirm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      {/* <Route path="/confirm" element={<Confirm />} /> */}
    </Routes>
  );
}

const MainPage = () => (
  <div className="w-[100vm] overflow-hidden">
    <Header />
    <Hero_copy />
    {/* <Hero /> */}
    <Marche />
    <Prix />
    <Cooperative />
    {/* <Functionnalities /> */}
    {/* <Services /> */}
    {/* <Notifications /> */}
    {/* <ChatAi /> */}
    {/* <Meteo /> */}
    {/* <DetectionMaladie /> */}
    {/* <Diagnostic /> */}
    {/* <Vente /> */}
    <Newsletter />
    <Footer />
    <Analytics />
  </div>
);

export default App;
