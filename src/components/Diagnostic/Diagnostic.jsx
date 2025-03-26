import React from "react";
import "./Diagnostic.css";
import allplant from "../../assets/all-plants.png";
import { motion } from "framer-motion";

function Diagnostic() {
  return (
    <div className="px-4 lg:px-32 py-14 flex flex-col justify-start items-center w-full h-auto ">
      <h2 className="font-semibold pt-4  pb-10 px-5 text-center text-slate-600 text-2xl lg:text-3xl">
        Gestion Optimale des Cultures
      </h2>

      <div className="w-full h-fit gap-5 flex flex-col items-center justify-center lg:flex-row-reverse ">
        <div className="serv-left relative h-full flex justify-center items-center  w-full lg:w-1/2 ">
          <span className="absolute bulb2 w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[32rem] bg-red-500/15 "></span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className=" flex justify-center items-center border-none w-full   lg:w-auto h-auto "
          >
            <img
              alt="wallpaper"
              className=" object-cover bg-transparent rounded-2xl w-[8rem] lg:w-[14rem]  shadow drop-shadow-2xl"
              src={allplant}
            />
          </motion.div>
        </div>

        <div className="serv-right h-full  w-full lg:w-1/2 flex flex-col justify-center items-center p-5 ">
          <div className="gap-5 flex flex-col text-center lg:text-start ">
            <h3 className="font-semibold text-lg sm:text-lg lg:text-xl xl:text-2xl">
              Détails Essentiels pour Chaque Type de Culture
            </h3>
            <p className="text-sm lg:text-base">
              L&apos;application fournit des informations détaillées sur les
              besoins en nutriments, les saisons idéales, et d&apos;autres
              facteurs clés pour chaque culture, ce qui permet d&apos;optimiser
              les conditions de croissance et d&apos;assurer une récolte
              réussie.
            </p>
            <div className="btns flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal ">
              <button className="btn enable w-fit text-xs lg:text-sm ">
                Obtenir l&apos;application
              </button>
              {/* <button className="btn disable w-fit text-xs lg:text-sm">
                Tester l&apos;application
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnostic;
