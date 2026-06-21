/**
 * DESIGN: Dark Atelier — Services Section
 * Organisé en 3 catégories : Sol, Mur, Accessoires.
 * Chaque catégorie avec ses sous-services.
 * Lignes cuivrées comme séparateurs. Fond sombre.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Home, Gem, Sparkles, Palette, Paintbrush, Frame } from "lucide-react";

const categories = [
  {
    title: "Sol",
    icon: Layers,
    services: [
      {
        name: "Résine Epoxy",
        description:
          "Revêtements de sol haute performance avec finitions métallisées, marbrées ou personnalisées. Effet miroir garanti.",
      },
      {
        name: "Résine pailletée",
        description:
          "Finitions scintillantes avec paillettes intégrées dans la résine pour des surfaces uniques et lumineuses.",
      },
      {
        name: "Tapis de pierre",
        description:
          "Granulats de marbre liés à la résine, idéaux pour terrasses, allées et espaces extérieurs. Résistant et esthétique.",
      },
    ],
  },
  {
    title: "Mur",
    icon: Home,
    services: [
      {
        name: "Mur design sur mesure",
        description:
          "Effet marbre, mur craquelé, carrelage design artistique avec rétro-éclairage LED. Des murs qui deviennent des œuvres d'art.",
      },
      {
        name: "Pierre de parement",
        description:
          "Pose de pierres de parement pour un rendu naturel et élégant. Intérieur et extérieur.",
      },
    ],
  },
  {
    title: "Accessoires",
    icon: Frame,
    services: [
      {
        name: "Tableaux en résine",
        description:
          "Œuvres d'art uniques en résine époxy — effet marbre, océan, abstrait. Pièces réalisées sur mesure.",
      },
      {
        name: "Tables & mobilier",
        description:
          "Tables rivière, plans de travail et mobilier en résine époxy. Chaque pièce est unique et personnalisée.",
      },
      {
        name: "Objets décoratifs",
        description:
          "Créations sur mesure : plateaux, horloges, sous-verres et accessoires en résine pour sublimer votre intérieur.",
      },
    ],
  },
];

function CategoryCard({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center border border-copper/30 text-copper">
          <Icon size={22} strokeWidth={1.5} />
        </div>
        <div>
          <span className="section-number text-[10px]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Services list */}
      <div className="space-y-4 pl-4 border-l border-[oklch(0.2_0.005_250)]">
        {category.services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.15 + i * 0.1 }}
            className="p-5 bg-[oklch(0.1_0.005_250)] border border-[oklch(0.18_0.005_250)] hover:border-[oklch(0.3_0.05_55/0.4)] transition-all duration-500 group/card"
          >
            <h4 className="font-heading text-sm font-semibold text-white mb-2 tracking-tight group-hover/card:text-copper transition-colors duration-300">
              {service.name}
            </h4>
            <p className="text-xs text-[oklch(0.5_0.005_250)] leading-relaxed">
              {service.description}
            </p>
            {/* Bottom copper line on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-copper group-hover/card:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-copper" />
            <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
              Nos expertises
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Des services
            <br />
            <span className="text-gradient-copper">d'exception</span>
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {categories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
