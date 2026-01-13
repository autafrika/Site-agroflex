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
            <p className="text-base/6 ">
              AgroFlex une solution numérique spécialement conçue pour les
              agriculteurs et les fermiers. <br />
              Le produit sera fourni dès ce 2025
            </p>
          </div>
          <div className="flex sociaux  ">
            <a
              href="https://play.google.com/apps/testing/com.autafrika.agroflex"
              className="!py-2 !px-2 btn enable !border !border-gray-400 bg-white flex items-center justify-center gap-1"
            >
              <img
                className="w-8"
                src={googleplaylogo}
                alt="google play logo"
              />
              <div className="flex flex-col  justify-center  ">
                <p className="font-normal text-[10px]/3 ">GET IT ON</p>
                <p className="font-semibold text-lg/5 text-gray-100 logo-googleplay ">
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
        Designed & provided by{" "}
        <a
          href="https://www.autafrika.com"
          className="font-semibold hover:text-[#f016fe]"
        >
          Autafrika
        </a>
      </footer>
    </div>
  );
}

export default Footer;
