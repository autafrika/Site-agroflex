import React from "react";
import flesh from "../../assets/svg/flesh_excalidraw.svg";
import { LuSend } from "react-icons/lu";
function Newsletter() {
  return (
    <div
      id="newsletter"
      className="flex h-[46vh] justify-center w-full items-center lg:h-[60vh] lg:p-10 px-2 py-14"
    >
      <div className="flex flex-col overflow-hidden relative z-2 bg-gradient-to-tr h-full justify-center rounded-xl text-white w-full from-green-950  to-green-800 gap-2 items-center lg:gap-5 lg:rounded-3xl lg:w-[80%] md:items-center news px-5">
        <svg
          className=" h-26 md:h-48 absolute z-1 left-[2%] md:left-[10%] -translate-y-1/2 top-3/10 lg:top-2/5"
          viewBox="0 0 900 900"
        >
          <defs>
            <pattern
              id="bg_pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="30"
                cy="30"
                r="5"
                fill="#ffffff44"
                stroke="none"
                opacity="1"
              ></circle>
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#f9f9ffff"
            opacity="0"
          ></rect>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#bg_pattern)"
            opacity="1"
          ></rect>
        </svg>
        <img
          className="absolute w-15 md:w-22 lg:w-25 top-[18%] right-[20%] lg:right-50"
          src={flesh}
          alt="flesh manuelle"
        />
        <svg
          viewBox="0 -4 32 32"
          className="stroke-none  w-8 h-8 lg:w-13 lg:h-13 -rotate-20 absolute z-1 right-[8%] md:right-[15%] lg:right-32 lg: top-[10%]"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          stroke="#757575"
        >
          <path
            d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z"
            transform="translate(-412 -259)"
            fill="#d1d1d1"
          />
        </svg>
        <div className="absolute z-10 top-[90%] md:top-[85%] w-300 md:w-500 h-3500 md:h-3600 rounded-[50%] py-2  bg-yellow-500/80  ">
          <div className="w-full h-full rounded-[50%] bg-green-900"></div>
        </div>

        <h3 className="text-2xl font-bold lg:text-4xl z-3">Newsletter</h3>
        <p className="z-3 text-gray-100 text-sm lg:px-20 text-center lg:text-lg md:text-center">
          Recevez des notifications dans votre boîte mail sur des nouveautés de
          l&apos;application et des astuces pour l&apos;optimisation de vos
          cultures.
        </p>
        <form className="flex justify-center flex-wrap md:flex-nowrap z-10 gap-2  lg:gap-5 lg:justify-center w-full md:w-[70%] lg:w-[60%]">
          <input
            className="bg-green-50/30 border border-white/50 h-10 p-2 rounded-lg text-sm w-[62%] md:w-[85%] lg:h-12 lg:p-4 lg:w-[86%] xl:w-[70%] outline-none placeholder:text-gray-200 placeholder:text-xs  md:placeholder:text-sm focus:ring-1  focus:ring-green-300 transition-all duration-300"
            type="email"
            placeholder="Entrez votre email"
          />

          <button className="btn h-10 enable flex lg:h-12 !hover:shadow-sm !shadow-green-800">
            <LuSend className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
