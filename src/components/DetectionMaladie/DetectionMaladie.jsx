import React from "react";
import scan from "../../assets/images/detectionResponse/scan_0.png";
import detection1 from "../../assets/images/detectionResponse/sick_1.png";
import detection2 from "../../assets/images/detectionResponse/sick_2.png";
import detection3 from "../../assets/images/detectionResponse/sick_3.png";
// import detection4 from "../../assets/images/detectionResponse/sick_3.png";
import healthy_1 from "../../assets/images/detectionResponse/healthy_1.png";
import healthy_2 from "../../assets/images/detectionResponse/healthy_2.png";
import healthy_3 from "../../assets/images/detectionResponse/healthy_3.png";
// import reponse4 from "../../assets/images/detectionResponse/scan_0.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { img } from "framer-motion/client";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="detection h-fit p-6 lg:py-7 w-full overflow-hidden">
      <div className="w-full relative">
        <div>
          <h2 className="text-2xl text-center text-slate-600 font-semibold lg:text-3xl pb-10 pt-4 px-5">
            Détection des maladies avec l&apos;IA
          </h2>
        </div>
        <span className="bg-red-500/10 h-[25rem] rounded-full w-[25rem] -left-[5%] absolute blur-3xl lg:h-[45rem] lg:w-[45rem] top-[14%]"></span>
        <span className="bg-green-500/10 h-[25rem] rounded-full w-[25rem] -right-[5%] absolute blur-3xl bottom-[15%] lg:h-[45rem] lg:w-[45rem]"></span>

        <div className="flex flex-col h-auto w-full gap-4 items-center py-14">
          <div className="h-full w-full detection">
            <div className="flex grid-rows-1 h-full justify-between w-full lg:grid lg:grid-cols-4">
              <div className=" left flex flex-col h-full justify-center rounded-2xl text-wrap gap-y-4 items-center lg:col-span-1 lg:gap-5 lg:items-end lg:py-6 py-3">
                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(detection1)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={detection1}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute left-1/2 md:top-10 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Maladie détectée
                  </p>
                </div>
                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(detection2)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={detection2}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute left-1/2 md:top-10 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Décrit la maladie
                  </p>
                </div>

                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(detection3)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={detection3}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute left-1/2 md:top-10 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Symptomes et causes
                  </p>
                </div>
                {/* <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(detection4)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={detection4}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute left-1/2 md:top-10 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Traitements et astuces
                  </p>
                </div> */}
              </div>

              <div className="flex h-full justify-center items-center lg:col-span-2 relative">
                <span className="text-center -top-12 absolute font-mono font-semibold underline underline-offset-[10px]">
                  Scanner la plante
                </span>
                <motion.img
                  title="Ouvrir l'image"
                  initial={{ y: 100, opacity: 0 }} // Position initiale (plus bas)
                  whileInView={{ y: 0, opacity: 1 }} // Position finale
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    mass: 0.4,
                    bounce: 2,
                  }}
                  onClick={() => setSelectedImage(scan)}
                  className="h-auto w-[10rem] cursor-pointer md:w-[16rem] sm:h-auto sm:w-[14rem] z-0"
                  src={scan}
                  alt=""
                />
              </div>

              <div className="right flex flex-col h-full justify-center rounded-2xl gap-4 items-center lg:col-span-1 lg:gap-5 lg:items-start lg:py-6 py-3">
                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(healthy_1)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={healthy_1}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute md:top-10 right-1/2 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Analyse de la plante
                  </p>
                </div>
                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(healthy_2)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={healthy_2}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute md:top-10 right-1/2 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Plante en bonne santé
                  </p>
                </div>
                <div className="flex flex-col justify-center w-17 gap-1 items-center lg:w-32 relative">
                  <motion.img
                    title="Ouvrir l'image"
                    onClick={() => setSelectedImage(healthy_3)}
                    className="bg-white h-12 p-[2px] rounded-full w-12 cursor-pointer lg:h-20 lg:p-1 lg:w-20 object-cover z-0"
                    src={healthy_3}
                    alt="plante"
                  />
                  <hr className="border-dashed text-gray-400 w-[30vw] -z-10 absolute md:top-10 right-1/2 top-6" />
                  <p className="text-[10px] text-center text-gray-500 text-wrap md:text-xs/5">
                    Quelques astuces pour garder sa bonne santé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap btns justify-center lg:flex-nowrap mt-14">
          <a href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex">
            <button className="btn text-xs w-fit enable lg:text-sm">
              Tester l&apos;application
            </button>
          </a>
        </div>
      </div>

      {/* Affichage en grand format */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="flex bg-black/70 bg-opacity-80 justify-center backdrop-blur-sm fixed inset-0 items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <span className="flex bg-gray-200 h-10 justify-center rounded-full w-10 absolute hover:bg-gray-400 items-center md:right-[30%] md:top-[4%] right-[6%] top-[5%]">
              <svg
                className="h-8 p-1 w-8 cursor-pointer duration-100 hover:bg-gray-400/30 hover:rounded-full hover:transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="rounded-lg shadow-lg max-h-[80%] max-w-[90%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
