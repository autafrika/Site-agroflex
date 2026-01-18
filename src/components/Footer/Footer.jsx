import React from "react";
import agroflex from "../../assets/agroflex.png";
import googleplaylogo from "../../assets/googleplaylogo.png";

function Footer() {
  return (
    <div className="bg-gray-100">
      <footer
        id="contact"
        className="flex h-auto flex-col md:flex-row gap-10 px-10 py-10 lg:py-20 lg:px-24 flex-wrap md:flex-nowrap text-base-content footer justify-between "
      >
        <aside className="flex flex-col gap-12 w-auto md:w-[60%] leading-loose ">
          <div className="">
            <img
              src={agroflex}
              className="rounded-xl w-24 -left-3 pb-2 relative"
              alt="agroflex"
            />
            <p className="text-[15px]/7  lg:w-8/10 ">
              Agroflex connecte les agriculteurs et les acteurs agricoles aux
              outils et aux données nécessaires pour produire mieux, réduire les
              pertes et acccéder aux marchés. Grâce à la technologie et à
              l&apos;innovation, il optimise les pratiques agricoles , renforce
              la résilience des exploitations et contribue à une agriculture
              plus durable, éfficace et équitable:
            </p>
          </div>
          <div className="flex sociaux  ">
            <a
              href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
              className="!py-1 !px-3 btn enable !border !border-gray-500 bg-white flex items-center justify-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-7"
                src={googleplaylogo}
                alt="google play logo"
              />
              <div className="flex flex-col  justify-center  ">
                <p className="font-normal text-[9px]/3 ">GET IT ON</p>
                <p className="font-semibold text-[15px/5 text-gray-100 logo-googleplay ">
                  <span>G</span>oogle Play
                </p>
              </div>
            </a>
          </div>
        </aside>
        <nav className="flex flex-col gap-4">
          <h6 className="text-black footer-title">Liens</h6>
          <a className="link link-hover" href="#home">
            Accueil
          </a>
          <a className="link link-hover" href="#fonctionnalites">
            Fonctionnalités
          </a>
          <a className="link link-hover" href="#services">
            Services
          </a>
          <a className="link link-hover" href="#newsletter">
            Newsletter
          </a>
          <a className="link link-hover" href="#contact">
            Contact
          </a>
          <a className="link link-hover" href="/privacy">
            Politique de confidentialité
          </a>
        </nav>
        <nav className="flex flex-col gap-4">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover" href="mailto:contact@autafrika.com">
            contact@autafrika.com
          </a>
          <h6 className="footer-title">Site officiel</h6>
          <a className="link link-hover" href="https://www.autafrika.com">
            https://autafrika.com
          </a>
        </nav>
      </footer>
      <footer className="text-center text-xs w-full py-5 text-gray-500">
        &copy; 2026. Designed & provided by{" "}
        <a
          href="https://www.autafrika.com"
          className="font-semibold hover:text-[#f016fe]"
        >
          Autafrika
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
