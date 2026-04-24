/**
 * DESIGN: Dark Atelier — Réalisations / Portfolio
 * Galerie asymétrique avec images du client. Chaque réalisation est traitée
 * comme une œuvre dans une galerie. Numérotation éditoriale visible.
 * Effet spotlight au hover — le reste s'assombrit.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    src: "/manus-storage/IMG-20260423-WA0003_40a8a19e.jpg",
    title: "Sol Époxy Métallisé Or",
    category: "Revêtement de sol",
    description: "Sol en résine époxy métallisée or et noir, finition miroir haute brillance.",
  },
  {
    src: "/manus-storage/IMG-20260424-WA0001_74f3448f.jpg",
    title: "Tableau Marbre Noir",
    category: "Art décoratif",
    description: "Œuvre en résine effet marbre noir avec veines blanches, pièce unique.",
  },
  {
    src: "/manus-storage/IMG-20260423-WA0007_d59952a9.jpg",
    title: "Mur Bois & Résine",
    category: "Revêtement mural",
    description: "Panneau mural bois et résine noire avec veines dorées et rétro-éclairage LED.",
  },
  {
    src: "/manus-storage/IMG-20260423-WA0004_7a4f51fb.jpg",
    title: "Tableau Océan Turquoise",
    category: "Art décoratif",
    description: "Tableau en résine turquoise et or, inspiré des fonds marins.",
  },
  {
    src: "/manus-storage/IMG-20260423-WA0001_60e0f159.jpg",
    title: "Sol Époxy Vue Intérieure",
    category: "Revêtement de sol",
    description: "Vue rapprochée du sol époxy métallisé, reflets lumineux spectaculaires.",
  },
  {
    src: "/manus-storage/IMG-20260424-WA0000_15b058d0.jpg",
    title: "Tableau Marbre Beige",
    category: "Art décoratif",
    description: "Œuvre en résine effet marbre beige et crème avec veines délicates.",
  },
];

function ProjectCard({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: (typeof projects)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  // Asymmetric sizing: first and fourth items are larger
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative overflow-hidden group ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{
        opacity: isOtherHovered ? 0.4 : 1,
        transition: "opacity 0.4s ease-out",
      }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}>
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover gallery-image"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_250)] via-transparent to-transparent transition-opacity duration-400 ${
            isHovered ? "opacity-90" : "opacity-60"
          }`}
        />

        {/* Project number */}
        <span className="absolute top-4 left-4 font-heading text-6xl lg:text-7xl font-bold text-white/[0.08]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
          <span className="text-[10px] tracking-[0.25em] uppercase text-copper font-medium">
            {project.category}
          </span>
          <h3 className="font-heading text-lg lg:text-xl font-semibold text-white mt-1 tracking-tight">
            {project.title}
          </h3>
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-[oklch(0.65_0.005_250)] mt-2 leading-relaxed overflow-hidden"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Copper border on hover */}
        <div
          className={`absolute inset-0 border transition-all duration-500 ${
            isHovered ? "border-copper/40" : "border-transparent"
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function RealisationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="realisations" className="relative py-24 lg:py-32">
      {/* Copper separator top */}
      <div className="copper-line mb-24 lg:mb-32" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Nos
              <br />
              <span className="text-gradient-copper">réalisations</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[oklch(0.55_0.005_250)] max-w-md text-sm leading-relaxed lg:text-right"
          >
            Chaque projet est une création unique, conçue sur mesure pour
            transformer vos espaces en véritables œuvres d'art.
          </motion.p>
        </div>

        {/* Gallery Grid — Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
