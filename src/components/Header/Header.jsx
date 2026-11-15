import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import agrowote from "../../../public/agro_transparent.png";

const AGRIWOTE = "https://web.agriwote.com";

/* Uniquement des sections réellement présentes sur la page */
const links = [
  { id: "marche", label: "Marché" },
  { id: "prix", label: "Prix" },
  { id: "cooperative", label: "Coopérative" },
  // { id: "services", label: "Services" },
  { id: "newsletter", label: "Newsletter" },
  { id: "contact", label: "Contact" },
];
const LINK_IDS = links.map((l) => l.id);

/* Section visible à l'écran -> lien actif */
function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      /* bande au tiers haut de l'écran : une seule section à la fois */
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((t) => observer.observe(t));

    const onTop = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [ids]);

  return active;
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const reduce = useReducedMotion();
  const active = useActiveSection(LINK_IDS);

  /* Transparente sur le hero, opaque dès qu'on défile */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menu mobile : clic extérieur, Échap, blocage du scroll */
  useEffect(() => {
    if (!isOpen) return undefined;

    const onPointer = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !burgerRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        burgerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Repasse en mode desktop -> on ferme le menu mobile */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setIsOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const scrollTop = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", window.location.pathname);
  };

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "bg-white/90 shadow-lg shadow-forest/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8 lg:h-[4.5rem]"
      >
        <a
          href="/"
          onClick={scrollTop}
          aria-label="AgroWote, retour en haut de page"
          className={`flex shrink-0 items-center rounded-full px-3  lg:px-5 py-1 transition-colors ${
            solid ? "bg-transparent" : "bg-white/90 shadow-md"
          }`}
        >
          <img className="h-9 w-auto lg:h-12" src={agrowote} alt="AgroWote" />
        </a>

        {/* Liens desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    solid
                      ? isActive
                        ? "text-forest"
                        : "text-gray-600 hover:text-forest"
                      : isActive
                        ? "text-gold"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-gold transition-transform duration-300 xl:inset-x-4 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {/* .btn force display:flex : on masque via un conteneur */}
          <div className="hidden sm:block">
            <a
              href={AGRIWOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-lg !bg-gold !px-5 font-semibold !text-forest-ink"
            >
              Créer un compte
            </a>
          </div>

          <button
            ref={burgerRef}
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              solid
                ? "bg-forest text-white hover:bg-forest-soft"
                : "bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-sm hover:bg-white/25"
            }`}
          >
            {isOpen ? (
              <LuX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <LuMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              aria-hidden="true"
              className="fixed inset-0 top-16 -z-10 bg-forest/40 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="menu-mobile"
              ref={menuRef}
              className="border-t border-forest/10 bg-white px-4 pb-6 pt-2 shadow-xl lg:hidden"
              initial={reduce ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ul className="flex flex-col">
                {links.map(({ id, label }) => {
                  const isActive = active === id;
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-base transition-colors ${
                          isActive
                            ? "bg-cream font-semibold text-forest"
                            : "text-gray-700 hover:bg-cream"
                        }`}
                      >
                        {label}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-gold"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={AGRIWOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-4 w-full rounded-lg !bg-forest py-3 font-semibold !text-white"
              >
                Créer un compte
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
