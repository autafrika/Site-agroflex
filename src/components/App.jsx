import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
// import ChatAi from "./ChatAi/ChatAi";
import Notifications from "./Notifications/Notifications";
import Diagnostic from "./Diagnostic/Diagnostic";
import Newsletter from "./Newsletter/Newsletter";
import Meteo from "./Meteo/Meteo";
import Vente from "./Vente/Vente";
import Footer from "./Footer/Footer";
import Functionnalities from "./Functionnalites/Functionnalities";
import DetectionMaladie from "./DetectionMaladie/DetectionMaladie";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

const MainPage = () => (
  <div className="w-[100vm] overflow-hidden">
    <Hero />
    <Functionnalities />
    <Services />
    <Notifications />
    {/* <ChatAi /> */}
    <Meteo />
    <DetectionMaladie />
    <Diagnostic />
    <Vente />
    <Newsletter />
    <Footer />
    <Analytics />
  </div>
);

export default App;
