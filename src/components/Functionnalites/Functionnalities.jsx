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
    <div
      id="fonctionnalites"
      className="w-full relative z-0 h-auto px-4 py-10 lg:py-16 flex flex-col justify-center items-center "
    >
      <div className="w-full px-4 lg:w-[70%] h-fit text-center">
        <h2 className="font-semibold py-4 px-10 text-slate-600 text-2xl lg:text-3xl">
          Nos Fonctionnalites
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
            <h3 className=" func">Creation & gestion des projets</h3>
            <p>
              Notre systeme doté de L&apos;IA se base sur vos attentes, analyse
              vos besoins et propose un plan détaillé avec des échéances
              réalistes.
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul2 flex justify-center bg-blue-400/15">
            <img className="h-full drop-shadow-lg" src={prescriptions} alt="" />
          </div>
          <div>
            <h3 className=" func">Prescription de Traitements</h3>
            <p>
              Des traitements adaptés sont proposés pour les plantes malades, en
              se basant sur l&apos;analyse des symptômes et des conditions
              environnementales.
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
            <h3 className=" func">Prévisions Météorologiques</h3>
            <p>
              Fournir des prévisions météorologiques précises en temps réel,
              basées sur l&apos;analyse des données climatiques
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul1 flex justify-center bg-red-500/15">
            <img className="h-full drop-shadow-lg" src={scanPlant} alt="" />
          </div>{" "}
          <div>
            <h3 className=" func">Analyse des Plantes</h3>
            <p>
              L&apos;IA permet d&apos;analyser les plantes pour détecter et
              reconnaître leurs maladies à partir de leurs symptômes et
              caractéristiques visuelles.
            </p>
          </div>
        </div>
        <div className="funct flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul4 flex justify-center bg-slate-600/40">
            <img className="h-full drop-shadow-lg" src={suivieChamps} alt="" />
          </div>
          <div>
            <h3 className=" func">Analyse de l&apos;État du Sol</h3>
            <p>
              L&apos;état du sol est analysé à l&apos;aide de capteurs IoT,
              fournissant des données précises sur son humidité, sa température
              et sa composition.
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
            <h3 className=" func">Monitoring du Champ</h3>
            <p>
              Automatisez l&apos;irrigation de vos cultures pour économiser de
              l&apos;eau et améliorer les rendements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functionnalities;
