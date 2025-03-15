import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center  pt-15 p-10">
      <div className="news w-[80%] gap-5 rounded-3xl h-full flex flex-col justify-center items-center bg-gradient-to-br from-green-700 to-green-900 text-white">
        <h3 className="font-bold text-3xl">Newsletter</h3>
        <p className="text-center text-lg text-gray-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          quam qui ea atque quia impedit.
        </p>
        <form className="flex justify-center items-center gap-5">
          <input
            className="h-12 p-4 bg-green-50/30 outline-none rounded-lg text-sm placeholder:text-gray-200"
            type="email"
            placeholder="Entrez votre email"
          />
          <button className="h-12 btn active">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
