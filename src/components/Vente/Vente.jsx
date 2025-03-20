import React from "react";
import "./Vente.css";
import carotte from "../../assets/envente/carotte.jpeg";
import courge from "../../assets/envente/courge.jpeg";
import aubergine from "../../assets/envente/aubergine.jpeg";
import onions from "../../assets/envente/onions.jpeg";

function Vente() {
  return (
    <div className="bg-slate-400/10 h-auto lg:px-32 pb-14 pt-14 px-4">
      <h2 className="flex-none text-2xl text-center text-slate-600 font-semibold lg:text-3xl pb-6">
        De la Production à la Commercialisation
      </h2>
      <p className="text-center text-sm lg:px-10 lg:text-base pb-16">
        L&apos;application accompagne chaque étape, de la culture à la vente des
        produits, en facilitant la gestion, l&apos;optimisation des rendements
        et la mise en relation avec les acheteurs.
      </p>
      <div className="flex justify-start p-3 gap-16 items-center overflow-x-auto overflow-y-hidden pb-5">
        <div className="h-auto w-auto">
          <div className="card bg-base-100 p-2">
            <figure className="h-36 lg:h-42 overflow-hidden">
              <img src={carotte} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body lg:px-2">
              <h2 className="card-title">Carottes</h2>
              <p>
                <span className="font-semibold">Quantité :</span> 13239 <br />
                <span className="font-semibold">Prix : </span> 10$
                <br />
                <span className="font-semibold"> Description : </span> produit
                en bonne sante <br />
              </p>
              <div className="card-actions justify-end">
                <button className="btn enable">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 p-2">
            <figure className="h-36 lg:h-42 overflow-hidden">
              <img src={onions} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body lg:px-2">
              <h2 className="card-title">Onions</h2>
              <p>
                <span className="font-semibold">Quantité :</span> 13239 <br />
                <span className="font-semibold">Prix : </span> 10$
                <br />
                <span className="font-semibold"> Description : </span> produit
                en bonne sante <br />
              </p>
              <div className="card-actions justify-end">
                <button className="btn enable">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 p-2">
            <figure className="h-36 lg:h-42 overflow-hidden">
              <img src={courge} className="w-full object-center" alt="plant" />
            </figure>
            <div className="card-body lg:px-2">
              <h2 className="card-title">Courges</h2>
              <p>
                <span className="font-semibold">Quantité :</span> 13239 <br />
                <span className="font-semibold">Prix : </span> 10$
                <br />
                <span className="font-semibold"> Description : </span> produit
                en bonne sante <br />
              </p>
              <div className="card-actions justify-end">
                <button className="btn enable">Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 p-2">
            <figure className="h-36 lg:h-42 object-cover overflow-hidden">
              <img
                src={aubergine}
                className="w-full object-center"
                alt="plant"
              />
            </figure>
            <div className="card-body lg:px-2">
              <h2 className="card-title">Aubergines</h2>
              <p>
                <span className="font-semibold">Quantité :</span> 13239 <br />
                <span className="font-semibold">Prix : </span> 10$
                <br />
                <span className="font-semibold"> Description : </span> produit
                en bonne sante <br />
              </p>
              <div className="card-actions justify-end">
                <button className="btn enable">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vente;
