import React from "react";
import screen1 from "../../assets/envente/1.png";
import screen2 from "../../assets/envente/2.png";
import screen3 from "../../assets/envente/3.png";
import screen4 from "../../assets/envente/4.png";
import screen5 from "../../assets/envente/5.png";

function Vente() {
  return (
    <section className="vente relative w-full  h-auto lg:px-32 pb-14 pt-14 px-4 ">
      <div className="absolute -z-1 -top-[20%] -left-[10%] blur-2xl bg-yellow-500/5 h-250 w-250 rounded-[50%]"></div>
      <div className="absolute -z-1 -bottom-[20%] -right-[10%] blur-2xl bg-green-500/5 h-250 w-250 rounded-[50%"></div>

      <h2 className="flex-none text-2xl text-center text-slate-600 font-semibold lg:text-3xl pb-6">
        De la Production à la Commercialisation
      </h2>
      <p className="text-center text-sm lg:px-10 lg:text-base pb-16">
        L&apos;application accompagne chaque étape, de la culture à la vente des
        produits, en facilitant la gestion, l&apos;optimisation des rendements
        et la mise en relation avec les acheteurs.
      </p>
      <div className="flex justify-center w-full overflow-x-auto h-auto">
        <div className="snap-x w-auto flex p-3 gap-8 lg:gap-16 items-center  overflow-y-hidden pb-5">
          <div className="snap-start h-auto w-auto">
            <div className="h-auto w-auto bg-none p-2 pb-3">
              <img
                className="h-80 min-w-40 lg:h-100 lg:min-w-48 "
                src={screen1}
                alt=""
              />
            </div>
            <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
          </div>

          <div className=" h-auto w-auto">
            <div className="h-auto bg-none p-2 pb-3">
              <img
                className="h-80 min-w-40 lg:h-100 lg:min-w-48"
                src={screen2}
                alt=""
              />
            </div>
            <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
          </div>

          <div className=" h-auto w-auto">
            <div className="h-auto bg-none p-2 pb-3">
              <img
                className="h-80 min-w-40 lg:h-100 lg:min-w-48"
                src={screen3}
                alt=""
              />
            </div>
            <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
          </div>

          <div className=" h-auto w-auto">
            <div className="h-auto bg-none p-2 pb-3">
              <img
                className="h-80 min-w-40 lg:h-100 lg:min-w-48"
                src={screen4}
                alt=""
              />
            </div>
            <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
          </div>

          <div className=" snap-end h-auto w-auto">
            <div className="h-auto bg-none p-2 ">
              <img
                className="h-80 min-w-40 lg:h-100 lg:min-w-48"
                src={screen5}
                alt=""
              />
            </div>
            <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vente;
