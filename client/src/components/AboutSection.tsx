/**
 * DESIGN: Dark Atelier — À propos
 * Layout asymétrique : image texture à gauche, texte à droite.
 * Mise en valeur du parcours d'Ozkan et de sa passion.
 * Lignes cuivrées et numérotation éditoriale.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Paintbrush, Wrench } from "lucide-react";

const stats = [
  { icon: Globe, label: "Zone", value: "Grand Est" },
  { icon: Wrench, label: "Spécialité", value: "Résine époxy" },
  { icon: Paintbrush, label: "Métier", value: "Artiste & Déco" },
  { icon: Award, label: "Formation", value: "Certifié résine" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="relative py-24 lg:py-32">
      {/* Copper separator */}
      <div className="copper-line mb-24 lg:mb-32" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="/images/about-texture.jpg"
                alt="Texture résine époxy noir marbre"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_250/0.5)] to-transparent" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-copper/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-copper/20" />

            {/* Section number */}
            <span className="absolute top-8 left-8 section-number">03</span>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
                À propos
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              L'artisan derrière
              <br />
              <span className="text-gradient-copper">chaque création</span>
            </h2>

            <div className="space-y-4 text-[oklch(0.6_0.005_250)] text-sm leading-relaxed mb-10">
              <p>
                Fondateur d'OzArt — Les Beaux Arts, Ozkan SARMASIK est un artisan
                passionné dont le parcours dans le bâtiment — peinture, carrelage,
                revêtements — l'a naturellement conduit vers l'univers de la résine
                décorative haut de gamme.
              </p>
              <p>
                Après des années d'expérience sur le terrain et des formations
                spécialisées en résine époxy, résine pailletée et tapis de pierre,
                il a développé un savoir-faire unique qui allie technique du bâtiment
                et sensibilité artistique. Chaque réalisation est pensée comme une
                œuvre d'art — du sol au mur, du tableau décoratif à la table sur
                mesure.
              </p>
              <p>
                Basé dans le Grand Est, OzArt intervient dans toute la région
                — Alsace, Lorraine et alentours — pour transformer vos
                espaces en créations uniques qui reflètent votre personnalité.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="p-4 bg-[oklch(0.1_0.005_250)] border border-[oklch(0.18_0.005_250)]"
                >
                  <stat.icon size={18} className="text-copper mb-2" strokeWidth={1.5} />
                  <p className="font-heading text-sm font-semibold text-white">{stat.value}</p>
                  <p className="text-[10px] tracking-wider uppercase text-[oklch(0.45_0.005_250)] mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
