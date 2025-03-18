import React from "react";
import "./Vente.css";
import carotte from "../../assets/envente/carotte.jpeg";
import courge from "../../assets/envente/courge.jpeg";
import aubergine from "../../assets/envente/aubergine.jpeg";
import onions from "../../assets/envente/onions.jpeg";

function Vente() {
  return (
    <div className="pt-32 pb-20 px-32 h-auto">
      <h2 className="flex-none pb-6 text-3xl text-slate-600 font-semibold text-center">
        votre processus agricole jusqu&apos;a la vente
      </h2>
      <p className="text-center pb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloribus
        odio, non sequi eius quidem corporis quibusdam quos magnam nam dolor
        impedit qui alias, aperiam recusandae autem tempora, molestias optio.
      </p>
      <div className="flex  p-3 gap-7 justify-start items-center overflow-x-auto overflow-y-hidden">
        <div>
          <div className="card bg-base-100  w-68 p-2 ">
            <figure className="overflow-hidden h-42">
              <img src={carotte} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body px-2">
              <h2 className="card-title">Carottes</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn active">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100  w-68 p-2 ">
            <figure className="overflow-hidden h-42">
              <img src={onions} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body px-2">
              <h2 className="card-title">Onions</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn active">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100  w-68 p-2 ">
            <figure className="overflow-hidden h-42">
              <img src={courge} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body px-2">
              <h2 className="card-title">Courges</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn active">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100  w-68 p-2 shadow-sm">
            <figure className="overflow-hidden h-42 object-cover">
              <img
                src={aubergine}
                className="w-full object-center"
                alt="plant"
              />
            </figure>
            <div className="card-body px-2 ">
              <h2 className="card-title">Aubergines</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn active">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vente;
