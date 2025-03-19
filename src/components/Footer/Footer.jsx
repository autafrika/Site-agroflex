import React from "react";
import "./Footer.css";
import agroflex from "../../assets/agroflex.png";

function Footer() {
  return (
    <div>
      <footer
        id="contact"
        className="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
      >
        <aside className="w-[70%]">
          <img
            src={agroflex}
            className="w-24 -ml-2 bg-white rounded-xl"
            alt="agroflex"
          />
          <p className="text-base/6">
            Agro flex une solution numerique specialement conçue pour les
            agriculteurs et les fermiers
            <br />
            Fourni de puis 2025
          </p>
        </aside>
        <nav className="flex flex-col gap-4">
          <h6 className="footer-title text-black">Liens</h6>
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
      <footer className="w-full text-center py-4 text-sm">
        Designed & provided by{" "}
        <a
          href="https://www.autafrika.com"
          className="hover:text-[#f016fe] font-semibold "
        >
          Autafrika
        </a>
      </footer>
    </div>
  );
}

export default Footer;
