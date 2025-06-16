import React from "react";
export default function RainEffect() {
  return (
    <div className="absolute w-screen h-screen overflow-hidden bg-transparent">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-50 "
          style={{
            width: "2px",
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animation: `fall ${Math.random() * 1 + 0.5}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style>{`
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}</style>
    </div>
  );
}
