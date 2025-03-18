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
    <div className="w-full h-auto px-4 py-10 lg:py-16 flex flex-col justify-center items-center ">
      <div className="w-full px-4 lg:w-[70%] h-fit text-center">
        <h2 className="font-semibold py-4 px-10 text-slate-600 text-2xl lg:text-3xl">
          A propos & Fonctionnalites
        </h2>
        <p className="text-center  text-sm/6 lg:text-medium text-gray-500">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error
          deserunt explicabo iusto, neque reprehenderit totam necessitatibus
          reiciendis delectus accusamus amet deleniti nihil culpa, in sequi
          fuga, hic nemo non earum ducimus distinctio voluptatibus facilis quo!
          Inventore, aut quo? Aspernatur quidem sunt praesentium illo
          cupiditate. Quo molestiae tenetur minima id!
        </p>
      </div>
      <div className=" w-[85%] h-full text-center text-sm text-gray-600 flex flex-wrap justify-center items-center pt-14 gap-y-10 gap-x-9">
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul3 bg-green-400/20">
            <img
              className="h-full drop-shadow-lg "
              src={creationProjet}
              alt=""
            />
          </div>
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul2 flex justify-center bg-blue-400/15">
            <img className="h-full drop-shadow-lg" src={prescriptions} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul6 flex justify-center bg-amber-100">
            <img
              className="h-full drop-shadow-lg"
              src={previsionsMeteo}
              alt=""
            />
          </div>
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul1 flex justify-center bg-red-500/15">
            <img className="h-full drop-shadow-lg" src={scanPlant} alt="" />
          </div>{" "}
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul4 flex justify-center bg-slate-600/40">
            <img className="h-full drop-shadow-lg" src={suivieChamps} alt="" />
          </div>
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bul5 flex justify-center bg-blue-500/20">
            <img
              className="h-full drop-shadow-lg"
              src={monitoringField}
              alt=""
            />
          </div>
          <p>
            Lorem, ipsum dolor. <br />
            sdf Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Functionnalities;
