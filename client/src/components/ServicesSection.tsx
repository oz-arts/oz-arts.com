/**
 * DESIGN: Dark Atelier — Services Section
 * Grille asymétrique de cartes de services avec numérotation éditoriale.
 * Lignes cuivrées comme séparateurs. Fond sombre avec texture subtile.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Paintbrush, Gem, Palette, Sparkles, Home } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Sol en résine époxy",
    description:
      "Revêtements de sol haute performance avec des finitions métallisées, marbrées ou personnalisées. Effet miroir garanti.",
  },
  {
    icon: Home,
    title: "Revêtement mural",
    description:
      "Murs décoratifs en résine avec intégration bois, rétro-éclairage LED et veines métalliques pour un rendu spectaculaire.",
  },
  {
    icon: Gem,
    title: "Tapis de pierre",
    description:
      "Revêtements en granulats de marbre liés à la résine, idéaux pour terrasses, allées et espaces extérieurs.",
  },
  {
    icon: Sparkles,
    title: "Résine pailletée",
    description:
      "Finitions scintillantes avec paillettes intégrées dans la résine pour des surfaces uniques et lumineuses.",
  },
  {
    icon: Palette,
    title: "Époxy métallisé",
    description:
      "Pigments métalliques créant des effets de mouvement, de profondeur et de reflets changeants selon la lumière.",
  },
  {
    icon: Paintbrush,
    title: "Art décoratif",
    description:
      "Tableaux et œuvres d'art en résine époxy — effet marbre, océan, abstrait — pièces uniques réalisées sur mesure.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-6 lg:p-8 bg-[oklch(0.1_0.005_250)] border border-[oklch(0.18_0.005_250)] hover:border-[oklch(0.3_0.05_55/0.4)] transition-all duration-500"
    >
      {/* Number */}
      <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-[oklch(0.14_0.005_250)] group-hover:text-[oklch(0.18_0.005_250)] transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center mb-5 text-copper">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg font-semibold text-white mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-[oklch(0.55_0.005_250)] leading-relaxed">
        {service.description}
      </p>

      {/* Bottom copper line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-copper group-hover:w-full transition-all duration-500" />
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
