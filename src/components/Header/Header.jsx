import React from "react";
import "./Header.css";
import agroflex from "../../assets/agroflex.png";

function Header() {
  return (
    <header className=" flex flex-row justify-between items-center h-auto gap-6 px-10 py-5  backdrop-blur-3xl absolute w-full">
      <div className="logo flex w-36 h-12 flexCenter rounded-full overflow-hidden border bg-white">
        <img className="h-full align-center" src={agroflex} alt="gim" />
      </div>

      <ul className="h-links w-[80%]  h-12 flexCenter gap-10 font-semibold rounded-full bg-white">
        <li className="link">Home</li>
        <li className="link">About</li>
        <li className="link">Services</li>
        <li className="link">Testimonials</li>
      </ul>
      <button className=" font-semibold link py-5 mr-5 w-36 h-12 flexCenter rounded-full bg-white">
        Contact us
      </button>
    </header>
  );
}

export default Header;
