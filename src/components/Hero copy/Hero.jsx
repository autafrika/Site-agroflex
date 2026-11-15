import React from "react";
import { motion, useReducedMotion } from "framer-motion";
// import Header from "../Header/Header";
import BlurImage from "../BlurImage/BlurImage";
import champ from "../../assets/images/champ1.webp";
import plantHand from "../../assets/images/plante-hand.jpg";
import solmonitor from "../../assets/images/solmonitor.jpg";
import market from "../../assets/images/hero_market.png";
import croissant from "../../assets/images/croissant.jpg";
import RainEffect from "../Rain/Rain";
import Header from "../Header/Header";
// import googleplaylogo from "../../assets/images/googleplaylogo.png";

/* Données d'exemple pour le panneau "marché" : à remplacer par vos vrais produits/prix */
const listings = [
  {
    name: "Maïs blanc",
    qty: "2 tonnes",
    price: "310 FCFA/kg",
    status: "3 offres",
    tone: "bg-[#F2B632] text-[#14301F]",
  },
  {
    name: "Tomates",
    qty: "400 kg",
    price: "450 FCFA/kg",
    status: "Vendu",
    tone: "bg-white/20 text-white",
  },
  {
    name: "Manioc",
    qty: "1,5 tonne",
    price: "180 FCFA/kg",
    status: "1 offre",
    tone: "bg-[#F2B632] text-[#14301F]",
  },
];

const perks = [
  "Publiez votre récolte en 2 minutes",
  "Parlez directement aux acheteurs",
  "Fixez votre prix, sans intermédiaire",
];

const supports = [
  {
    img: solmonitor,
    title: "Suivez vos cultures",
    text: "Des plants en bonne santé, c'est une récolte qui se vend mieux.",
  },
  {
    img: plantHand,
    title: "Diagnostic en 1 clic",
    text: "Détectez les maladies avant qu'elles n'atteignent votre récolte.",
  },
  {
    img: croissant,
    title: "Conseils de l'expert IA",
    text: "Sachez quand récolter et quand mettre en vente.",
  },
];

const Check = () => (
  <svg
    viewBox="0 0 20 20"
    className="w-5 h-5 shrink-0 text-[#F2B632]"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 10.5l4 4 8-9"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Hero() {
  const reduce = useReducedMotion();
  // Un seul moment orchestré : les offres arrivent l'une après l'autre
  const rise = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 + i * 0.35, duration: 0.5, ease: "easeOut" },
        };

  return (
    <section className="w-full">
      <div className="relative lg:px-20 flex flex-col min-h-screen w-full overflow-hidden text-white">
        {/* Fond */}
        <RainEffect />
        <div className="absolute inset-0 -z-10">
          <BlurImage
            className="w-full h-full object-cover object-bottom"
            src={champ}
            alt="champ d'agriculture"
            ratio=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A1B]/95 via-[#0F2A1B]/70 to-[#0F2A1B]/30" />
        </div>

        {/* Contenu principal */}
        <div className="flex-1  grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center px-6 md:px-12 lg:px-25 py-12 pt-20">
          <div className="flex  flex-col gap-6 max-w-[54rem]">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-[800] leading-[1.1]">
              Optimisez <span className="text-[#F2B632]">&</span> <br />
              Vendez vos récoltes{" "}
              <span className="text-[#F2B632]">directement aux acheteurs</span>
            </h1>
            <p className="text-sm  lg:text-base text-gray-100">
              Publiez votre production, recevez des offres et concluez la vente
              depuis votre téléphone.
            </p>

            <ul className="flex flex-col gap-2">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex text-xs md:text-sm items-center gap-2 text-gray-100"
                >
                  <Check />
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex  items-center gap-3 md:gap-4 mt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
                target="_blank"
                rel="noopener noreferrer"
                className=" btn rounded-lg bg-[#F2B632] !px-4 py-3 font-semibold text-[#14301F] transition hover:brightness-95  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Vendre mes produits
              </a>
              <a
                href="https://agroflex.autafrika.com"
                className="btn disable !bg-white/10 !text-white rounded-lg border  !border-white/60 !px-4 py-3 font-semibold transition hover:!bg-white/20  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Acheter sur le marché
              </a>
            </div>

            {/* <a
            href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden  w-fit items-center gap-2 rounded-lg border border-gray-500 bg-black px-3 py-1.5"
          >
            <img className="w-6" src={googleplaylogo} alt="" />
            <span className="flex flex-col leading-tight">
              <span className="text-[9px]">TÉLÉCHARGER SUR</span>
              <span className="text-[15px] font-semibold">Google Play</span>
            </span>
          </a> */}
          </div>

          {/* Panneau marché */}
          <div className="w-full lg:w-[40rem] aspect-video justify-self-center lg:justify-self-end rounded-xl border border-[#F2B632]/40 bg-[#0F2A1B]/60 p-1 lg:p-2 backdrop-blur-md shadow-2xl">
            <BlurImage
              className="w-full h-full rounded-lg object-cover"
              src={market}
              alt=""
            />
          </div>
        </div>

        {/* Les atouts de suivi, reliés à la vente */}
        <div className="hidden  grid-cols-3 gap-6 px-24 pb-8">
          {supports.map((s) => (
            <div
              key={s.title}
              className="flex gap-3 rounded-lg border border-white/30 bg-black/25 p-3 backdrop-blur-sm"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-md">
                <BlurImage
                  className="h-full w-full object-cover"
                  src={s.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="text-xs text-gray-200">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
