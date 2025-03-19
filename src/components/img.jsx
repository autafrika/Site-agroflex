import React from "react";
import home from "../assets/agroflex.png";

// ce petit fichier a ete cree juste pour produire des capture d'ecran sur le mobile
function Img() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img className="w-2/3 " src={home} alt="" />
    </div>
  );
}

export default Img;
