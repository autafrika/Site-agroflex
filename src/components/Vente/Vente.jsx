import React from "react";
import screen1 from "../../assets/images/envente/1.png";
import screen2 from "../../assets/images/envente/2.png";
import screen4 from "../../assets/images/envente/4.png";
import screen3 from "../../assets/images/envente/3.png";
import screen5 from "../../assets/images/envente/5.png";
import BlurImage from "../BlurImage/BlurImage";

const screens = [screen1, screen2, screen3, screen4, screen5];

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
      <div
        className="w-full overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory"
        role="region"
        aria-label="Captures de l’application, défilement horizontal"
        tabIndex={0}
      >
        <div className="mx-auto flex w-max min-w-full flex-nowrap items-center justify-center gap-8 p-3 pb-5 lg:gap-16">
          {screens.map((screen, index) => (
            <div key={screen} className="h-auto w-auto shrink-0 snap-start">
              <div className="h-auto bg-none p-2 pb-3">
                <BlurImage
                  className="h-80 min-w-40 lg:h-100 lg:min-w-48"
                  src={screen}
                  alt={`Capture d’écran ${index + 1} de l’application Agroflex`}
                />
              </div>
              <div className="bg-black/25 w-full h-4 rounded-[50%] blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vente;
