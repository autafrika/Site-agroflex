import React from "react";
import {
  LuBuilding2,
  LuGlobe,
  LuTruck,
  LuUsers,
  LuArrowRight,
} from "react-icons/lu";
import { PhoneFrame, Reveal, Eyebrow } from "../Showcase/Showcase";
import coopDashboard from "../../assets/images/Screenshot_20261104_221729_Chrome.jpg";

const features = [
  {
    icon: LuBuilding2,
    title: "Créez-la en quelques minutes",
    text: "Depuis votre profil : « Créer une coopérative », et vous en êtes l'administrateur.",
  },
  {
    icon: LuGlobe,
    title: "Une page publique",
    text: "Nom, localisation, activité : les acheteurs trouvent votre coopérative et la contactent.",
  },
  {
    icon: LuTruck,
    title: "Un tableau de bord",
    text: "Membres actifs, livraisons du mois et montant dû aux membres, au même endroit.",
  },
  {
    icon: LuUsers,
    title: "Vos membres, réunis",
    text: "Ajoutez les producteurs et vendez ensemble des volumes plus importants.",
  },
];

function Cooperative() {
  return (
    <section
      id="cooperative"
      className="relative w-full overflow-hidden bg-forest px-5 py-20 text-white md:px-12 lg:px-32 lg:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow dark>Coopératives</Eyebrow>
          <h2 className="text-3xl font-[800] leading-tight md:text-4xl">
            Créez votre coopérative et{" "}
            <span className="text-gold">vendez ensemble</span>
          </h2>
          <p className="text-sm text-gray-200 md:text-base">
            Regroupez les producteurs de votre zone sous une même organisation
            pour peser davantage face aux acheteurs.
          </p>

          <ul className="mt-2 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://web.agriwote.com"
              className="btn group gap-2 rounded-lg !bg-gold !px-5 py-3 font-semibold !text-forest-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Créer ma coopérative
              <LuArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            {/* <a
              // href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-lg !border !border-white/50 !bg-white/10 !px-5 py-3 font-semibold !text-white hover:!bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Voir le marché
            </a> */}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <PhoneFrame
            src={coopDashboard}
            alt="Tableau de bord d'une coopérative : membres actifs, livraisons du mois, montant dû"
            className="w-[62%] max-w-[280px] rotate-[3deg] !bg-black ring-gold/40"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Cooperative;
