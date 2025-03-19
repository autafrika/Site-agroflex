import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div
      id="newsletter"
      className="w-full h-[46vh] lg:h-[60vh] flex justify-center items-center  py-14 px-2 lg:p-10"
    >
      <div className="news  w-full lg:w-[80%] gap-2 px-4 lg:gap-5 rounded-xl lg:rounded-3xl h-full flex flex-col justify-center items-start md:items-center bg-gradient-to-tr from-green-950 to-green-800 text-white">
        <h3 className="font-bold text-2xl lg:text-3xl">Newsletter</h3>
        <p className="lg:text-center text-sm md:text-center lg:text-lg lg:px-20 text-gray-100">
          Recevez des notifications dans boite mail sur des nouveautés de
          l&apos;application et des astuces pour optimiser vos cultures.
        </p>
        <form className="flex justify-normal lg:justify-center items-start gap-2 lg:gap-5">
          <input
            className="h-10 lg:h-12 p-2 w-[60%] lg:w-[80%] lg:p-4 bg-green-50/30 outline-none rounded-lg text-sm placeholder:text-gray-200"
            type="email"
            placeholder="Entrez votre email"
          />
          <button className="h-10 lg:h-12 btn enable">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
