import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function BlurImage({ src, alt, ratio, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden  ${ratio} ${className}`}>
      {/* Placeholder */}
      <div
        className={`absolute inset-0 bg-zinc-700/20 transition-opacity duration-500
        ${loaded ? "opacity-0" : "opacity-100 animate-pulse"} `}
      />

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-all duration-900 ease-out
          ${loaded ? "blur-0 scale-100 opacity-100" : "blur-xl scale-105 opacity-0"}
        `}
      />
    </div>
  );
}

/* Validation */
BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  ratio: PropTypes.string,
  className: PropTypes.string,
};

/* Valeurs par défaut */
BlurImage.defaultProps = {
  alt: "",
  ratio: "aspect-[4/3]",
  className: "",
};
