import React from "react";
import "./Scan.css";
import astuce from "../../assets/astuce.png";
function Scan() {
  return (
    <div className="px-32 pt-40 flex flex-col justify-start items-center w-full h-[85vh]">
      <h2 className="flex-none pb-16 text-3xl text-slate-600 font-semibold text-center">
        Optimisez votre processus agricole jusqu&apos;a la vente
      </h2>

      <div className="w-full h-full  flex flex-row-reverse ">
        <div className="serv-left  h-full flex justify-center items-center  w-1/2 ">
          <span className="absolute bulb2 w-[32rem] h-[32rem] bg-blue-500/10 "></span>
          <div className="mockup-phone border-none scale-50 h-[54rem] overflow-hidden ">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display">
              <img
                alt="wallpaper"
                className="h-full object-cover"
                src={astuce}
              />
            </div>
          </div>
        </div>

        <div className="serv-right h-full  w-1/2 flex flex-col justify-center items-center p-5 ">
          <div className="gap-5 flex flex-col ">
            <h3 className="font-semibold text-2xl">Diagnostiquez</h3>
            <p>
              Service 2 description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo quasi sed reiciendis! Animi a aliquid
              commodi, eos ad at enim.
            </p>
            <div className="btns">
              <button className="btn active w-fit">
                Obtenir un diagnostique
              </button>
              <button className="btn inactive w-fit">
                Obtenir un diagnostique
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
