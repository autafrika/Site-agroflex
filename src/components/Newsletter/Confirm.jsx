// // Confirm.jsx
// import { motion } from "framer-motion";
// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { MdClear } from "react-icons/md";
// import { data, useSearchParams } from "react-router-dom";

// export default function Confirm() {
//   const [params] = useSearchParams();
//   const token = params.get("token");
//   const [message, setMessage] = useState("");
//   const [detail, setDetail] = useState("");

//   const called = useRef(false);

//   const handleClick = () => {
//     setMessage("");
//   };

//   useEffect(() => {
//     if (!token) return;
//     if (called.current) return;
//     called.current = true;

//     fetch(`http://localhost:8000/api/confirm/?token=${token}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMessage(data.message);
//         setDetail(data.detail);
//         // setTimeout(() => window.close(), 4000);
//         // Affiche le pop-up
//       })
//       .catch((err) => {
//         alert("Erreur lors de la confirmation", err);
//       });
//   }, [token]);

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <h2>{message || detail || "Confirmation en cours…"}</h2>
//       {/* {message  <p>{message}</p>} */}

//       {message && (
//         <motion.div
//           initial={{ opacity: 1, y: 50 }}
//           animate={{ opacity: 1, y: 0 }} // Arrive en haut avec opacité 1
//           transition={{ duration: 0.3 }} // Animation fluide
//           className={`p-4 flex gap-2 items-center rounded-md shadow-xl  ${detail == "Lien invalide" ? "bg-red-600" : "bg-green-700"}  text-white text-xs md:text-sm fixed bottom-3 left-3`}
//         >
//           <p>{message} message</p>
//           <br />
//           <p>{detail} detail</p>

//           <MdClear
//             className="text-xl font-extrabold   text-amber-400 hover:scale-112 hover:bg-green-300/20 transition-all duration-150 rounded-sm p-[1px] cursor-pointer m-2 "
//             onClick={handleClick}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }
