import React from "react";
import Header from "../Header/Header";
import champ from "../../assets/champ1.webp";
import plantHand from "../../assets/plante-hand.jpg";
import solmonitor from "../../assets/solmonitor.jpg";
import croissant from "../../assets/croissant.jpg";
import googleplaylogo from "../../assets/googleplaylogo.png";

import RainEffect from "../Rain/Rain";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="flexColumn h-hero h-screen w-full overflow-hidden relative z-10"
    >
      <div className="flex h-screen w-full -z-5 absolute left-0 object-cover top-0">
        <img
          className="w-full  object-bottom object-cover"
          src={champ}
          alt=""
        />
        <RainEffect />
      </div>
      <Header />
      <div className="flex flex-col bg-black/50 h-full w-full h-left justify-center p-10 text-white gap-5 items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }} // Départ en bas avec une opacité 0
          whileInView="visible"
          animate={{ opacity: 1, y: 0 }} // Arrive en haut avec opacité 1
          exit={{ opacity: 0, y: 50 }} // Redescend en disparaissant
          transition={{ duration: 0.5, ease: "easeOut" }} // Animation fluide
          className="p-4 text-4xl/11 text-center 2xl:text-6xl/17 font-extrabold md:text-5xl/12"
        >
          Optimisez Votre Production Agricole
        </motion.h1>

        <p className="text-center text-gray-100 text-lg lg:text-xl">
          Utilisez la technologie pour améliorer vos rendements et réduire les
          coûts.
        </p>
        <div className="flex justify-center gap-6 items-center mt-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
            className="!py-1 !px-3 btn enable !border !border-gray-500 bg-white flex items-center justify-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-7" src={googleplaylogo} alt="google play logo" />
            <div className="flex flex-col  justify-center  ">
              <p className="font-normal text-[9px]/3 ">GET IT ON</p>
              <p className="font-semibold text-[15px/5 text-gray-100 logo-googleplay ">
                <span>G</span>oogle Play
              </p>
            </div>
          </a>
          <button className="btn disable ">Savoir plus</button>
        </div>
      </div>

      <div className=" hidden lg:flex lg:justify-around">
        <div className="flex flex-row bg-gradient-to-br border border-gray-400 p-1 rounded-lg absolute backdrop-blur-sm bottom-8 from-gray-700/30 left-24 lg:h-[100px] lg:w-[310px] to-green-800/10 xl:h-[130px] xl:p-3 xl:w-[410px]">
          <div className="flex h-full rounded-md w-2/3 items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={solmonitor}
              alt=""
            />
          </div>

          <div className="flex flex-col h-full justify-between p-1 w-full px-1 xl:px-2">
            <h2 className="lg:text-sm">Chat avec l&apos;expert IA agricole</h2>
            <p className="text-gray-100 text-[11px]">
              Ecrivez lui vos problèmes et récevez des conseils précis
            </p>
          </div>
        </div>
        <div className="flex border border-gray-400 p-1 rounded-lg -translate-x-[50%] absolute backdrop-blur-sm bottom-8 from-gray-700/30 left-1/2 lg:h-[100px] lg:w-[310px] to-green-800/10 xl:h-[130px] xl:p-3 xl:w-[410px]">
          <div className="flex h-full rounded-md w-1/2 items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={plantHand}
              alt=""
            />
          </div>

          <div className="flex flex-col h-full justify-between p-1 w-full px-2 xl:p-2">
            <h2 className="lg:text-sm">
              Détecter les maladies de vos plantes en 1 clic
            </h2>
            <p className="text-gray-100 text-[11px]">
              Prenez une photo de votre plante, notre IA détermine l&apos;état
              des plantes
            </p>
          </div>
        </div>
        <div className="flex bg-green-500/20 border border-gray-400 p-1 rounded-lg absolute backdrop-blur-md bottom-8 lg:h-[100px] lg:w-[310px] right-24 xl:h-[130px] xl:p-3 xl:w-[410px]">
          <div className="flex h-full rounded-md w-1/2 items-end overflow-hidden">
            <img
              className="h-[120%] w-full object-cover"
              src={croissant}
              alt=""
            />
          </div>
          <div className="flex flex-col h-full justify-between p-1 w-full xl:p-2">
            <h2 className="lg:text-sm">Surveillez vos champs en direct</h2>
            <p className="text-gray-100 text-[11px]">
              Grâce à la video, notre IA analyse vos cultures et vous alerte en
              cas de soucis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
