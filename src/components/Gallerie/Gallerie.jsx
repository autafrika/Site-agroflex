import React from "react";
import detection1 from "../../assets/detectionReponse/detection.png";
import detection2 from "../../assets/detectionReponse/detectionMalade.png";
import detection3 from "../../assets/detectionReponse/detectionPlanteMalade.png";
import detection4 from "../../assets/detectionReponse/detectionPasMalade.png";
import reponse1 from "../../assets/detectionReponse/reponsePasMalade1.png";
import reponse2 from "../../assets/detectionReponse/reponseMalade1.png";
import reponse3 from "../../assets/detectionReponse/reponseMalade2.png";
import reponse4 from "../../assets/detectionReponse/reponseMalade3.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "framer-motion/client";

const images = [
  detection1,
  detection4,
  reponse1,
  detection2,
  detection3,
  reponse2,
  reponse3,
  reponse4,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 h-fit w-full overflow-hidden">
      <div className=" w-full relative ">
        <div>
          <h2 className="font-semibold pt-4  pb-10 px-5 text-center text-slate-600 text-2xl lg:text-3xl">
            Détection des maladies avec l&apos;IA
          </h2>
        </div>
        <span className="absolute  -left-[5%] top-[14%] h-[25rem] lg:h-[45rem] w-[25rem] lg:w-[45rem] rounded-full blur-3xl bg-red-500/10"></span>
        <span className="absolute -right-[5%] bottom-[15%] h-[25rem] lg:h-[45rem] w-[25rem] lg:w-[45rem] rounded-full blur-3xl bg-green-500/10"></span>

        <div className="flex flex-col  items-center w-full py-14 h-auto  gap-4">
          <div className="detection  w-full h-full  ">
            <div className="w-full flex justify-between lg:grid lg:grid-cols-4 grid-rows-1 h-full ">
              <div className="lg:col-span-1 h-full flex flex-col gap-y-4 lg:gap-5 py-3 lg:py-6   rounded-2xl items-center justify-center text-wrap lg:items-end">
                <div className="relative w-17  lg:w-32 flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(detection3)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={detection3}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 left-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Maladie détectée
                  </p>
                </div>
                <div className="relative  w-17  lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(reponse2)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={reponse2}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 left-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Descrit la maladie
                  </p>
                </div>
                <div className="relative  w-17 lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(reponse4)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={reponse4}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 left-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Causes probables
                  </p>
                </div>
                <div className="relative  w-17  lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(reponse3)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={reponse3}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 left-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Astuces et prescriptions
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 relative  h-full flex justify-center items-center">
                <span className="absolute text-center -top-12  font-semibold font-mono underline underline-offset-[10px] ">
                  Scan de la plante
                </span>
                <motion.img
                  onClick={() => setSelectedImage(detection2)}
                  className=" h-auto w-[10rem] cursor-pointer sm:w-[14rem] md:w-[16rem] sm:h-auto z-10"
                  src={detection2}
                  alt=""
                />
              </div>

              <div className="lg:col-span-1 h-full  rounded-2xl flex flex-col gap-4 lg:gap-5 py-3 lg:py-6 justify-center items-center">
                <div className="relative  w-17 lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(detection1)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={detection1}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 right-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Analyse de la plante
                  </p>
                </div>
                <div className="relative  w-17 lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(reponse1)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={reponse1}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 right-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Plante en bonne santée
                  </p>
                </div>
                <div className="relative  w-17 lg:w-32  flex flex-col gap-1  justify-center items-center">
                  <motion.img
                    onClick={() => setSelectedImage(detection1)}
                    className="z-10  h-12 lg:h-20 w-12 lg:w-20 p-1  cursor-pointer object-cover rounded-full bg-white"
                    src={detection1}
                    alt="plante"
                  />
                  <hr className="absolute -z-10 top-6 md:top-10 right-1/2 border-dashed text-gray-400 w-[30vw]" />
                  <p className="text-[10px] text-wrap md:text-xs/5 text-gray-500 text-center ">
                    Quelques astuces pour garder la bonne santée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns flex flex-wrap lg:flex-nowrap justify-center   mt-14  ">
          <button className="btn enable w-fit text-xs lg:text-sm ">
            Tester l&apos;application
          </button>
        </div>
      </div>

      {/* Affichage en grand format */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <span className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-gray-400 bg-gray-200 absolute top-[5%] right-[6%] md:top-[4%] md:right-[30%]">
              <svg
                className="h-8 w-8 p-1  cursor-pointer  hover:rounded-full hover:bg-gray-400/30 hover:transition-colors duration-100"
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
              className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
