import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import champ from "../../assets/champ1.webp";
import plantHand from "../../assets/plante-hand.jpg";
import solmonitor from "../../assets/solmonitor.jpg";
import croissant from "../../assets/croissant.jpg";
// import Weather from "../Weather/Weather";
import RainEffect from "../Rain/Rain";

function Hero() {
  return (
    <div
      id="home"
      className="h-hero h-screen overflow-hidden relative z-10  flexColumn w-full "
    >
      <div className="flex h-screen -z-10 absolute object-cover top-0 left-0 w-full">
        <img
          className=" object-cover object-bottom w-full "
          src={champ}
          alt=""
        />
        <RainEffect />
      </div>
      <Header />
      <div className="h-left h-full  flex flex-col justify-center items-center  text-white p-10 gap-5 bg-black/50">
        <h1 className="font-extrabold  transform text-center text-4xl/11 lg:text-5xl/12 2xl:text-6xl/17 p-4 ">
          Optimisez Votre Production Agricole
        </h1>

        <p className="text-lg lg:text-xl text-center text-gray-100">
          Utilisez la technologie pour améliorer vos rendements et réduire les
          coûts.
        </p>
        <div className="flex justify-center items-center gap-6 mt-5">
          <button className="btn enable ">Commencer </button>
          <button className="btn disable">Savoir plus</button>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="lg:w-[310px] lg:h-[99px] xl:w-[410px] xl:h-[130px]  flex flex-row p-1 xl:p-3 backdrop-blur-sm bg-gradient-to-br from-gray-700/30 to-green-800/10 border border-gray-400  absolute bottom-8 left-8 rounded-lg">
          <div className="h-full w-2/3 rounded-md flex items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={solmonitor}
              alt=""
            />
          </div>
          <div className="w-full h-full px-2 xl:px-2 flex flex-col justify-between ">
            <h2 className="lg:text-sm">
              Controllez la qualite et l&apos;etat du sol
            </h2>
            <p className="text-gray-100 text-xs">
              Un sol bien entretenu favorise la croissance en bonne qualite des
              cultures
            </p>
          </div>
        </div>
        <div className="lg:w-[310px] lg:h-[99px]  xl:w-[410px] xl:h-[130px] p-1 xl:p-3 flex  backdrop-blur-sm from-gray-700/30 to-green-800/10 border border-gray-400  absolute bottom-8 left-1/2 rounded-lg -translate-x-1/2 ">
          <div className="h-full w-1/2 rounded-md flex items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={plantHand}
              alt=""
            />
          </div>

          <div className="w-full h-full px-2  p-1 xl:p-2 flex flex-col justify-between ">
            <h2 className="lg:text-sm">
              Donnez a vos les reels besoins qu&apos;ils ont
            </h2>
            <p className="text-gray-100 text-xs">
              Soyez au courant des besoins de vos plantes
            </p>
          </div>
        </div>
        <div className="lg:w-[310px] lg:h-[99px] xl:w-[410px] xl:h-[130px]  flex p-1 xl:p-3  bg-green-500/20 border border-gray-400 backdrop-blur-md absolute bottom-8 right-8 rounded-lg">
          <div className="h-full w-1/2 rounded-md flex items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={croissant}
              alt=""
            />
          </div>
          <div className="w-full h-full p-1 xl:p-2 flex flex-col justify-between ">
            <h2 className="lg:text-sm">
              Multipliez vos rendement et vos chiffre d&apos;affaires
            </h2>
            <p className="text-gray-100 text-xs">
              Le rendement est consequent avec les informations cruciales
            </p>
          </div>
        </div>
      </div>
      <div className="h-right"></div>
    </div>
  );
}

export default Hero;
