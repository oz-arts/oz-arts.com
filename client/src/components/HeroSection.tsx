/**
 * DESIGN: Dark Atelier — Hero Section
 * Pleine largeur avec image de fond résine époxy or/noir.
 * Titre dramatique, sous-titre élégant, CTA cuivré.
 * Animations d'entrée fluides.
 */
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.jpg"
          alt="Texture résine époxy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_250/0.6)] via-[oklch(0.08_0.005_250/0.4)] to-[oklch(0.08_0.005_250/0.85)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Copper line top accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="h-[1px] bg-copper mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base tracking-[0.3em] uppercase text-copper font-medium mb-6"
        >
          Art & décoration sur mesure en résine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-6"
        >
          Quand le luxe
          <br />
          <span className="text-gradient-copper">rencontre l'art</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg sm:text-xl text-[oklch(0.7_0.005_250)] max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Spécialiste en résine époxy, revêtements décoratifs et créations
          artistiques sur mesure. Sols, murs et accessoires d'exception.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#realisations"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#realisations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-copper text-[oklch(0.08_0.005_250)] font-heading font-semibold text-sm tracking-wide uppercase hover:bg-copper-light transition-colors duration-300"
          >
            Voir nos réalisations
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 border border-[oklch(0.3_0.005_250)] text-white font-heading font-semibold text-sm tracking-wide uppercase hover:border-copper hover:text-copper transition-all duration-300"
          >
            Demander un devis
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)]">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[oklch(0.35_0.005_250)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
