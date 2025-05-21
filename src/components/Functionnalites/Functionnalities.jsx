import React from "react";

import creationProjet from "../../assets/svg/creation_projet_assiste.svg";
import monitoringField from "../../assets/svg/monitoring.svg";
import prescriptions from "../../assets/svg/prescriptions.svg";
import previsionsMeteo from "../../assets/svg/prevision_meteo.svg";
import scanPlant from "../../assets/svg/scan_deseases.svg";
import suivieChamps from "../../assets/svg/suivie_du_champs.svg";
import "./Functionnalities.css";

function Functionnalities() {
  return (
    <section
      id="fonctionnalites"
      className=" functionnalities w-full relative z-0 h-auto px-4 py-10 lg:py-16 flex flex-col justify-center items-center "
    >
      <div className="w-full px-4 lg:w-[70%] h-fit text-center">
        <h2 className="font-semibold py-4 px-10 text-slate-600 text-2xl lg:text-3xl">
          Nos Fonctionnalités
        </h2>
        <p className="text-center  text-sm/6 lg:text-medium text-gray-500">
          {" "}
          Voici une présentation des principales fonctionnalités de notre
          système, conçu pour optimiser la gestion agricole grâce à des
          technologies avancées.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:gap-10 w-full px-10 relative z-0 h-full  text-sm text-gray-600  flex-wrap justify-center items-center pt-14 gap-y-10 gap-x-9">
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul3 bg-green-400/20">
            <img
              className="h-full drop-shadow-lg "
              src={creationProjet}
              alt=""
            />
          </div>
          <div>
            <h3 className=" func">
              Chat intelligent avec l&apos;expert IA agricole
            </h3>
            <p>
              Posez toutes vos questions liées à l&apos;agriculture (Semences,
              engrais, rendements, etc) et recevez des réponses et des
              orientations précises
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul2 flex justify-center bg-blue-400/15">
            <img className="h-full drop-shadow-lg" src={prescriptions} alt="" />
          </div>
          <div>
            <h3 className=" func">
              Détection des maladies et prescriptions des traiments
            </h3>
            <p>
              Faites le scan video ou capturez des images des vos plantes pour
              être informé de leur état de santé et recevez des prescriptions de
              traitements adaptés
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul6 flex justify-center bg-amber-100">
            <img
              className="h-full drop-shadow-lg"
              src={previsionsMeteo}
              alt=""
            />
          </div>
          <div>
            <h3 className=" func">
              Astuces personnalisées pour l&apos;agriculture durable
            </h3>
            <p>
              Des astuces basées sur les objectifs des agriculteurs et les
              conditions spécifiques de chaque culture
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul1 flex justify-center bg-red-500/15">
            <img className="h-full drop-shadow-lg" src={scanPlant} alt="" />
          </div>{" "}
          <dblieriv>
            <h3 className=" func">Marché virtuel agricole (e-commerce)</h3>
            <p>
              Les producteurs pourront publier leurs produits agricoles. Les
              acheteurs pourront consulter et contacter les producteurs
              directement pour acheter.
            </p>
          </dblieriv>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul4 flex justify-center bg-slate-600/40">
            <img className="h-full drop-shadow-lg" src={suivieChamps} alt="" />
          </div>
          <div>
            <h3 className="func">Création & Gestion des projets</h3>
            <p>
              Créez des projet pour chaque culture, la plateforme vous fournit
              un plan détaillé et des recommandations pour atteindre vos
              objectifs
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul5 flex justify-center bg-blue-500/20">
            <img
              className="h-full drop-shadow-lg"
              src={monitoringField}
              alt=""
            />
          </div>
          <div>
            <h3 className=" func">Système d&apos;irrigation intelligent</h3>
            <p>
              Automatisez l&apos;irrigation de vos cultures pour économiser de
              l&apos;eau et améliorer les rendements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Functionnalities;
