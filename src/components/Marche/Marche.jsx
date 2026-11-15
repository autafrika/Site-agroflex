import React from "react";
import { LuCamera, LuMessageCircle, LuPhone } from "react-icons/lu";
import {
  BrowserFrame,
  PhoneFrame,
  Reveal,
  Eyebrow,
} from "../Showcase/Showcase";
import feedDesktop from "../../assets/images/Screenshot from 2026-11-04 21-53-23.png";
import chatMobile from "../../assets/images/Screenshot_20261104_221841_Chrome.jpg";

const steps = [
  {
    icon: LuCamera,
    title: "Publiez une offre ou une demande",
    text: "Une photo, la quantité, le prix : votre produit apparaît chez les acheteurs de votre zone.",
  },
  {
    icon: LuMessageCircle,
    title: "Les acheteurs vous contactent",
    text: "Par message dans l'app, par appel ou sur WhatsApp, directement depuis votre annonce.",
  },
  {
    icon: LuPhone,
    title: "Vous concluez la vente",
    text: "Quantité, livraison, prix : vous négociez en direct, sans intermédiaire.",
  },
];

function Marche() {
  return (
    <section
      id="marche"
      className="relative w-full overflow-hidden bg-cream px-5 py-20 md:px-12 lg:px-48 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Le marché AgroFlex</Eyebrow>
          <h2 className="text-3xl font-[800] leading-tight text-forest md:text-4xl">
            Vos produits locaux, visibles par les acheteurs{" "}
            <span className="underline decoration-gold decoration-4 underline-offset-6">
              près de chez vous
            </span>
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Producteurs, transformateurs et acheteurs se retrouvent sur un même
            fil d&apos;annonces, filtré par ville ou par zone.
          </p>

          <ol className="mt-2 flex flex-col gap-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-forest-ink">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="font-semibold text-forest">{title}</h3>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15} className="relative w-full  pb-24 md:pb-32">
          <BrowserFrame
            src={feedDesktop}
            alt="Fil d'annonces AgroFlex : une offre de champignons avec boutons Contacter, Appeler et WhatsApp, et les prix près de chez vous"
            url="agroflex.autafrika.com"
            className="ml-auto w-[86%]"
          />
          <PhoneFrame
            src={chatMobile}
            alt="Conversation entre un acheteur et un producteur au sujet du stock disponible"
            className="absolute bottom-0 right-10 w-[30%] max-w-[180px] rotate-[5deg]"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Marche;
