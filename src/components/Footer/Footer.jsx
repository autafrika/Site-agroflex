import React from "react";
import "./Footer.css";
import agroflex from "../../assets/agroflex.png";

function Footer() {
  return (
    <div>
      <footer
        id="contact"
        className="bg-base-200 p-10 text-base-content footer sm:footer-horizontal"
      >
        <aside className="w-auto sm:w-[70%]">
          <img
            src={agroflex}
            className="rounded-xl w-24 -left-3 pb-2 relative"
            alt="agroflex"
          />
          <p className="text-base/6">
            AgroFlex une solution numérique spécialement conçue pour les
            agriculteurs et les fermiers. <br />
            Le produit sera fourni dès ce 2025
          </p>
          {/* <div className="flex sociaux"></div> */}
        </aside>
        <nav className="flex flex-col gap-4">
          <h6 className="text-black footer-title">Liens</h6>
          <a className="link link-hover" href="#home">
            Accueil
          </a>
          <a className="link link-hover" href="#fonctionnalites">
            Fonctionnalites
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
      <footer className="text-center text-sm w-full py-4">
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
