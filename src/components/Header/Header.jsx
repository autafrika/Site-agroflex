import React from "react";
import { useState } from "react";
import "./Header.css";
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
      <nav className=" hidden lg:flex flex-row justify-between items-center  h-auto gap-6 px-10 py-5  backdrop-blur-3xl absolute w-full">
        <div className="logo flex w-36  flexCenter rounded-full overflow-hidden p-1 bg-white">
          <img className="h-10 align-center" src={agroflex} alt="gim" />
        </div>

        <ul className="hidden lg:flex lg:justify-center lg:items-center h-links w-[80%]  h-12 lg:flexCenter gap-10 font-semibold rounded-full bg-white">
          <li className="link">
            <a href="#home">Accueil</a>
          </li>
          <li className="link">
            <a href="#fonctionnalites">Fonctionnalites</a>
          </li>
          <li className="link">
            <a href="#services">Services</a>
          </li>
          <li className="link">
            <a href="#newsletter">Newsletter</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="" className="hidden lg:flex">
          <button className=" lg:flex btn enable font-semibold mr-5 w-36 h-12 hover:text-white   rounded-full bg-white">
            Télécharger
          </button>
        </a>
      </nav>
      {!isOpen ? (
        <div className="fixed z-10 top-0 left-0 w-screen flex lg:hidden justify-between items-center  px-4  backdrop-blur-3xl">
          <div className="flex items-center rounded-s-md w-full lg:hidden text-white ">
            <a
              className="mr-auto py-2 text-3xl font-bold leading-none bg-"
              aria-label="accueil"
              href=""
            >
              <img
                src={agroflex}
                className="h-11 px-3 py-1 bg-white  border rounded-full w-auto lg:h-[4.5rem] drop-shadow-xl lg:w-auto "
                alt="logo autafrika"
              />
            </a>
          </div>

          <button
            className="navbar-burger flex items-center p-1 font-bold  rounded-md  "
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="h-10 w-10 p-2  border border-white/70 bg-gray-600 fill-white rounded-lg  cursor-pointer   hover:bg-gray-700 hover:transition-colors duration-100"
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
          <span className="absolute w-screen h-screen bg-black/10 backdrop-blur-[3px]"></span>

          <nav
            className=" fixed lg:hidden z-50 top-0 left-0 w-screen max-w-md h-fit py-6 px-5 pt-3 gap-4 flex flex-col m-auto  bg-white/70 shadow-xl backdrop-blur-md overflow-y-auto  "
            ref={menuRef}
          >
            <div className="flex justify-between items-center rounded-md shadow-md bg-green-400/40">
              <div className="flex items-center rounded-s-md w-full lg:hidden text-white ">
                <a
                  className="mr-auto py-2 text-3xl font-bold leading-none"
                  aria-label="accueil"
                  href=""
                >
                  <img
                    src={agroflex}
                    className="h-10 p-1 w-auto lg:h-[4.5rem] drop-shadow-xl lg:w-auto "
                    alt="logo autafrika"
                  />
                </a>
              </div>

              <button
                className="navbar-close p-3"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="h-8 w-8 p-1  cursor-pointer  hover:rounded-full hover:bg-gray-400/30 hover:transition-colors duration-100"
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

            <ul className="mt-5">
              <li className="mb-1">
                <a
                  href="#home"
                  aria-label="accueil"
                  className="block py-3 px-4 text-sm font-normal text-gray-500 hover:bg-gray-600/10 hover:text-black rounded"
                >
                  Accueil
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#fonctionnalites"
                  aria-label="à propos"
                  className="block py-3 px-4 text-sm font-normal text-gray-500 hover:bg-gray-600/10 hover:text-black rounded"
                >
                  Fonctionnalites
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#services"
                  aria-label="services"
                  className="block py-3 px-4 text-sm font-normal text-gray-500 hover:bg-gray-600/10 hover:text-black rounded"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#newsletter"
                  aria-label="newsletter"
                  className="block py-3 px-4 text-sm font-normal text-gray-500 hover:bg-gray-600/10 hover:text-black rounded-md"
                >
                  Newsletter
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#contact"
                  aria-label="contact"
                  className="block py-3 px-4 text-sm font-normal text-gray-500 hover:bg-gray-600/10 hover:text-black rounded"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-auto">
              <div className="pt-6">
                <a
                  href="#"
                  className="block px-4 py-4 mb-2 leading-loose text-sm text-center text-white font-semibold btn enable  rounded-lg"
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
