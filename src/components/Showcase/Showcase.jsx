import React from "react";
import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Briques partagées par les sections "marché" :
 * cadres d'écran (téléphone / navigateur) et apparition au scroll.
 */

/* Les captures mobiles font 1080x2400 ; les ~235px du haut sont la barre
   Android + la barre Chrome. On ne garde que l'app (cadrage par le bas). */
export function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div
      className={`rounded-[2rem] bg-forest p-[6px] shadow-2xl shadow-black/30 ring-1 ring-white/10 ${className}`}
    >
      <div className="aspect-[1080/2165] overflow-hidden rounded-[1.6rem] bg-white">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}

PhoneFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export function BrowserFrame({ src, alt, url, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-2xl shadow-forest/20 ring-1 ring-black/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-black/5 bg-gray-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-[10px] text-gray-500 ring-1 ring-black/5 md:text-xs">
          {url}
        </span>
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full"
      />
    </div>
  );
}

BrowserFrame.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
};

export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? "text-gold" : "text-forest-soft"
      }`}
    >
      <span className="h-[3px] w-6 rounded-full bg-gold" />
      {children}
    </p>
  );
}

Eyebrow.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
};
