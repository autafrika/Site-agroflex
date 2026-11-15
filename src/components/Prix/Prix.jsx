import React from "react";
import { LuMapPin, LuTag, LuTrendingUp } from "react-icons/lu";
import { PhoneFrame, Reveal, Eyebrow } from "../Showcase/Showcase";
import pricesMobile from "../../assets/images/Screenshot_20261104_221640_Chrome.jpg";
import priceResultMobile from "../../assets/images/Screenshot_20261104_221858_Chrome.jpg";

/* Relevés visibles dans les captures de l'app */
const samples = [
  { name: "Haricots", price: "1 500 FC", zone: "Demba" },
  { name: "Manioc", price: "2 450 FC", zone: "N'sele" },
  { name: "Poivron", price: "3,00 $", zone: "N'sele" },
];

const points = [
  {
    icon: LuTag,
    title: "Le prix au kilo, par produit et par marché",
    text: "Manioc, haricots, arachide, huile de palme… choisissez un produit et une zone.",
  },
  {
    icon: LuMapPin,
    title: "Toujours une référence",
    text: "Pas encore de relevé dans votre zone ? L'app affiche le plus proche et indique sa distance.",
  },
  {
    icon: LuTrendingUp,
    title: "Comparez avant de fixer votre prix",
    text: "Suivez l'évolution du prix et consultez les produits similaires.",
  },
];

function Prix() {
  return (
    <section
      id="prix"
      className="relative w-full overflow-hidden bg-white px-5 py-20 md:px-12 lg:px-32 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal className="relative order-2 flex justify-center gap-4 md:gap-6 lg:order-1">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl lg:left-1/4"
          />
          <PhoneFrame
            src={pricesMobile}
            alt="Écran Prix du marché : recherche par produit et par zone"
            className="relative w-[44%] max-w-[230px] -translate-y-6"
          />
          <PhoneFrame
            src={priceResultMobile}
            alt="Résultat de recherche : prix des haricots relevé dans une autre zone, avec la distance"
            className="relative w-[44%] max-w-[230px] translate-y-6"
          />
        </Reveal>

        <Reveal delay={0.1} className="order-1 flex flex-col gap-6 lg:order-2">
          <Eyebrow>Prix du marché</Eyebrow>
          <h2 className="text-3xl font-[800] leading-tight text-forest md:text-4xl">
            Connaissez le juste prix{" "}
            <span className="underline decoration-gold decoration-4 underline-offset-6">
              avant de vendre
            </span>
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Des prix relevés sur les marchés locaux, pour vendre au bon prix et
            acheter sans mauvaise surprise.
          </p>

          <ul className="flex flex-col gap-5">
            {points.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-forest ring-1 ring-forest/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-forest">{title}</h3>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            {samples.map((s) => (
              <div
                key={s.name}
                className="flex items-baseline gap-2 rounded-full border border-forest/10 bg-cream px-4 py-2 text-sm"
              >
                <span className="font-semibold text-forest">{s.name}</span>
                <span className="text-forest-soft">{s.price}/kg</span>
                <span className="text-xs text-gray-500">· {s.zone}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Prix;
