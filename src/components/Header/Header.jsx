import React from "react";
import { useState } from "react";
import agroflex from "../../assets/agroflex.png";
import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Référence pour détecter les clics externes
  // Fermer le menu si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className=" navbar bg-gradient-to-r h-auto justify-between shadow-2xl shadow-green-950/15 w-full backdrop-blur-2xl fixed from-white/85 gap-6 header hidden items-center lg:flex lg:flex-row px-10 py-2 to-white/70 top-0 via-blue-200/30 z-50">
        <a
          href="#home"
          className="flex flexCenter p-1 rounded-full w-36 cursor-pointer logo overflow-hidden"
        >
          <img className="align-center h-10" src={agroflex} alt="gim" />
        </a>

        <ul className="h-13 h-links rounded-full text-black w-[80%] font-semibold gap-10 hidden lg:flex lg:flexCenter lg:items-center lg:justify-center">
          <li className="link">
            <a href="#home">Accueil</a>
            <span className=""></span>
          </li>
          <li className="link">
            <a href="#fonctionnalites">Fonctionnalités</a>
            <span className=""></span>
          </li>
          <li className="link">
            <a href="#services">Services</a>
            <span className=""></span>
          </li>
          <li className="link">
            <a href="#newsletter">Newsletter</a>
            <span className=""></span>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
            <span className=""></span>
          </li>
        </ul>
        <a href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex" className="hidden lg:flex">
          <button className="btn bg-white h-12 rounded-full w-36 enable font-semibold hover:text-white lg:flex mr-5">
            Télécharger
          </button>
        </a>
      </nav>
      {!isOpen ? (
        <div className="flex bg-gradient-to-r justify-between w-screen backdrop-blur-3xl fixed from-white/90 items-center left-0 lg:hidden px-4 to-white/20 top-0 z-50">
          <div className="flex rounded-s-md text-white w-full items-center lg:hidden">
            <a
              className="bg- text-3xl font-bold leading-none mr-auto py-2"
              aria-label="accueil"
              href="#home"
            >
              <img
                src={agroflex}
                className="h-11 rounded-full w-auto cursor-pointer drop-shadow-xl lg:h-[4.5rem] lg:w-auto px-3 py-1"
                alt="logo autafrika"
              />
            </a>
          </div>

          <button
            className="flex navbar-burger p-1 rounded-md font-bold items-center"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="bg-gray-600 border border-white/70 h-10 p-2 rounded-lg w-10 cursor-pointer duration-100 fill-white hover:bg-gray-700 hover:transition-colors"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu du mobile</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      ) : (
        <>
          <span className="h-screen w-screen backdrop-blur-[4px] fixed z-40"></span>

          <nav
            className="flex flex-col bg-white/80 h-fit m-auto shadow-xl w-screen backdrop-blur-md fixed gap-4 left-0 lg:hidden max-w-md overflow-y-auto pt-2 px-5 py-6 top-0 z-50"
            ref={menuRef}
          >
            <div className="flex bg-green-400/40 justify-between rounded-md shadow-md items-center">
              <div className="flex rounded-s-md text-white w-full items-center lg:hidden">
                <a
                  className="text-3xl font-bold leading-none mr-auto"
                  aria-label="accueil"
                  href=""
                >
                  <img
                    src={agroflex}
                    className="h-11 p-1 w-auto drop-shadow-xl lg:h-[4.5rem] lg:w-auto px-2"
                    alt="logo autafrika"
                  />
                </a>
              </div>

              <button
                className="navbar-close p-3"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-8 p-1 w-8 cursor-pointer duration-100 hover:bg-gray-400/30 hover:rounded-full hover:transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <ul onClick={() => setIsOpen(false)} className="mt-5">
              <li className="mb-1">
                <a
                  href="#home"
                  aria-label="accueil"
                  className="rounded text-gray-500 text-sm block font-normal hover:bg-gray-600/10 hover:text-black px-4 py-3"
                >
                  Accueil
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#fonctionnalites"
                  aria-label="à propos"
                  className="rounded text-gray-500 text-sm block font-normal hover:bg-gray-600/10 hover:text-black px-4 py-3"
                >
                  Fonctionnalités
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#services"
                  aria-label="services"
                  className="rounded text-gray-500 text-sm block font-normal hover:bg-gray-600/10 hover:text-black px-4 py-3"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#newsletter"
                  aria-label="newsletter"
                  className="rounded-md text-gray-500 text-sm block font-normal hover:bg-gray-600/10 hover:text-black px-4 py-3"
                >
                  Newsletter
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#contact"
                  aria-label="contact"
                  className="rounded text-gray-500 text-sm block font-normal hover:bg-gray-600/10 hover:text-black px-4 py-3"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-auto w-full">
              <div className="pt-6 w-full">
                <a
                  href="https://play.google.com/store/apps/details?id=com.autafrika.agroflex"
                  className="btn rounded-lg text-center text-sm text-white block enable font-semibold leading-loose mb-2 px-4 py-4"
                  aria-label="prendre inscription"
                >
                  Télécharger l&apos;app
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default Header;
