import React from "react";
function Newsletter() {
  return (
    <div
      id="newsletter"
      className="flex h-[46vh] justify-center w-full items-center lg:h-[60vh] lg:p-10 px-2 py-14"
    >
      <div className="flex flex-col bg-gradient-to-tr h-full justify-center rounded-xl text-white w-full from-green-950 gap-2 items-start lg:gap-5 lg:rounded-3xl lg:w-[80%] md:items-center news px-4 to-green-800">
        <h3 className="text-2xl font-bold lg:text-3xl">Newsletter</h3>
        <p className="text-gray-100 text-sm lg:px-20 lg:text-center lg:text-lg md:text-center">
          Recevez des notifications dans boîte mail sur des nouveautés de
          l&apos;application et des astuces pour optimiser vos cultures.
        </p>
        <form className="flex justify-normal gap-2 items-start lg:gap-5 lg:justify-center lg:w-[50%]">
          <input
            className="bg-green-50/30 border border-white/50 h-10 p-2 rounded-lg text-sm w-[60%] lg:h-12 lg:p-4 lg:w-[80%] outline-none placeholder:text-gray-200"
            type="email"
            placeholder="Entrez votre email"
          />
          <button className="btn h-10 enable lg:h-12">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
