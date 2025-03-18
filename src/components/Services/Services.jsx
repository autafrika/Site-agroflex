import React from "react";
import "./Services.css";
import home from "../../assets/home.png";
function Services() {
  return (
    <div className="px-4 lg:px-32 pt-20 flex flex-col justify-start items-center w-full h-[80vh]">
      <h2 className="font-semibold py-4 px-5 text-center text-slate-600 text-2xl lg:text-3xl">
        Optimisez votre processus agricole jusqu&apos;a la vente
      </h2>

      <div className="w-full h-full flex flex-col lg:flex-row ">
        <div className="serv-left relative h-full flex justify-center items-center p-36  w-full lg:w-1/2 ">
          <span className="absolute bulb1 w-[20rem] h-[20rem] lg:w-[32rem] lg:h-[32rem] bg-green-300/20 "></span>
          <div className="mockup-phone block border-none w-full  lg:scale-50 lg:w-auto h-auto ">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display w-full h-full">
              <img
                alt="wallpaper"
                className="h-full w-full object-cover shadow drop-shadow-2xl"
                src={home}
              />
            </div>
          </div>{" "}
        </div>

        <div className="serv-right h-full  w-full lg:w-1/2 flex flex-col justify-center items-center p-5 ">
          <div className="gap-5 flex flex-col ">
            <h3 className="font-semibold text-2xl">Diagnostiquez</h3>
            <p>
              Service 2 description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo quasi sed reiciendis! Animi a aliquid
              commodi, eos ad at enim.
            </p>
            <div className="btns">
              <button className="btn enable w-fit">
                Obtenir un diagnostique
              </button>
              <button className="btn disable w-fit">
                Obtenir un diagnostique
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
