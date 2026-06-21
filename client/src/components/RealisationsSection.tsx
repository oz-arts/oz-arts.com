/**
 * DESIGN: Dark Atelier — Réalisations / Portfolio
 * Galerie asymétrique avec images du client. Chaque réalisation est traitée
 * comme une œuvre dans une galerie. Numérotation éditoriale visible.
 * Effet spotlight au hover — le reste s'assombrit.
 * Inclut section avant/après pour le mur en enduit décoratif.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    src: "/images/mur-after-result.jpg",
    title: "Mur Enduit Décoratif Marbre Noir & Or",
    category: "Enduit décoratif",
    description: "Mur design sur mesure en enduit décoratif, façonné à la main pour un effet marbre noir saisissant aux veines blanches et dorées. Une finition haut de gamme qui transforme chaque surface en œuvre d'art unique.",
  },
  {
    src: "/images/sol-epoxy-1.jpg",
    title: "Sol Époxy Métallisé Or",
    category: "Revêtement de sol",
    description: "Sol en résine époxy métallisée or et noir, finition miroir haute brillance.",
  },
  {
    src: "/images/tableau-noir.jpg",
    title: "Échantillon Enduit Décoratif Marbre Noir",
    category: "Enduit décoratif",
    description: "Panneau d'échantillon réalisé à la main, illustrant la profondeur et l'intensité des effets obtenus en enduit décoratif. Jeu de matières entre le noir profond et les veines blanches nacrées — un aperçu du savoir-faire artisanal proposé pour vos projets muraux sur mesure.",
  },
  {
    src: "/images/mur-bois-resine.jpg",
    title: "Mur Carrelage Design Artistique",
    category: "Revêtement mural",
    description: "Une composition murale d'exception alliant carrelage grand format et finitions artistiques sur mesure. Chaque détail est conçu pour sublimer l'espace et créer une atmosphère unique, entre élégance contemporaine et savoir-faire artisanal.",
  },
  {
    src: "/images/tableau-turquoise.jpg",
    title: "Échantillon Enduit Décoratif Effet Marbre",
    category: "Enduit décoratif",
    description: "Panneau d'échantillon réalisé à la main, illustrant la richesse des effets obtenus en enduit décoratif. Jeu de matières entre le blanc nacré, le bleu-vert profond et les veines dorées — un aperçu du savoir-faire artisanal proposé pour vos projets muraux sur mesure.",
  },
  {
    src: "/images/sol-epoxy-3.jpg",
    title: "Sol Époxy Vue Intérieure",
    category: "Revêtement de sol",
    description: "Vue rapprochée du sol époxy métallisé, reflets lumineux spectaculaires.",
  },
  {
    src: "/images/tableau-beige.jpg",
    title: "Tableau Marbre Beige",
    category: "Art décoratif",
    description: "Œuvre en résine effet marbre beige et crème avec veines délicates.",
  },
  {
    src: "/images/sol-epoxy-2.jpg",
    title: "Sol Époxy Or — Grand Format",
    category: "Revêtement de sol",
    description: "Sol époxy métallisé or et noir, vue d'ensemble d'un garage transformé.",
  },
  {
    src: "/images/mur-marbre-vert-or.webp",
    title: "Mur Effet Marbre Vert Émeraude & Or",
    category: "Revêtement mural",
    description: "Un mur habillé d'un effet marbre vert émeraude aux veines dorées, d'une profondeur et d'un éclat saisissants. Un décor sur mesure qui transforme un salon en véritable galerie d'art.",
  },
];

const beforeAfter = {
  before: "/images/mur-before-1.jpg",
  after: "/images/mur-after-result.jpg",
  title: "Transformation Mur en Enduit Décoratif",
  description: "D'un simple mur blanc à une œuvre d'art en enduit décoratif effet marbre noir, blanc et or.",
};

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

  // Asymmetric sizing: first and fifth items are larger
  const isLarge = index === 0 || index === 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
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

function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 lg:mt-28"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[1px] w-12 bg-copper" />
        <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
          Avant / Après
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Before/After Slider */}
        <div
          ref={containerRef}
          className="relative aspect-[4/5] overflow-hidden cursor-col-resize select-none"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          {/* After image (full) */}
          <img
            src={beforeAfter.after}
            alt="Après"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={beforeAfter.before}
              alt="Avant"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
            />
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-copper z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-copper flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L3 10L7 16" stroke="oklch(0.08 0.005 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 4L17 10L13 16" stroke="oklch(0.08 0.005 250)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-[oklch(0.08_0.005_250)]/80 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-white font-medium">
            Avant
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-copper/90 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-[oklch(0.08_0.005_250)] font-medium">
            Après
          </div>
        </div>

        {/* Description */}
        <div className="lg:pl-8">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white tracking-tight mb-4">
            {beforeAfter.title}
          </h3>
          <p className="text-[oklch(0.55_0.005_250)] text-sm leading-relaxed mb-6">
            {beforeAfter.description}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-copper rotate-45" />
              <span className="text-sm text-[oklch(0.7_0.005_250)]">Mur design effet marbre</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-copper rotate-45" />
              <span className="text-sm text-[oklch(0.7_0.005_250)]">Veines dorées artisanales</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-copper rotate-45" />
              <span className="text-sm text-[oklch(0.7_0.005_250)]">Finition brillante haute résistance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-copper rotate-45" />
              <span className="text-sm text-[oklch(0.7_0.005_250)]">Réalisation en 3 à 5 jours</span>
            </div>
          </div>
        </div>
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

        {/* Before/After Section */}
        <BeforeAfterSection />
      </div>
    </section>
  );
}
