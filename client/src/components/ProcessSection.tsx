/**
 * DESIGN: Dark Atelier — Processus de travail
 * Timeline verticale avec étapes numérotées, lignes cuivrées connectrices.
 * Fond avec texture subtile turquoise/or.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Ruler, Paintbrush, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Échange sur votre projet, vos envies et vos contraintes. Visite sur site pour évaluer les surfaces et proposer les meilleures solutions.",
  },
  {
    icon: Ruler,
    title: "Conception",
    description:
      "Élaboration d'un projet sur mesure : choix des couleurs, des effets et des finitions. Devis détaillé et transparent.",
  },
  {
    icon: Paintbrush,
    title: "Réalisation",
    description:
      "Préparation minutieuse des surfaces, application de la résine avec précision. Chaque couche est travaillée avec soin pour un rendu parfait.",
  },
  {
    icon: Sparkles,
    title: "Finition",
    description:
      "Contrôle qualité rigoureux, finition haute brillance et conseils d'entretien pour préserver la beauté de votre investissement.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028181851/NGaeCdrPK5aDRXggMw4TPY/services-bg-ZiBSynfFHh3P7jrFMvxLPS.webp"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-[oklch(0.08_0.005_250/0.92)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-copper" />
            <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
              Notre approche
            </span>
            <div className="h-[1px] w-12 bg-copper" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Du projet à la
            <br />
            <span className="text-gradient-copper">réalisation</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                className="relative"
              >
                {/* Connector line (not on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-[1px] bg-gradient-to-r from-copper/40 to-transparent" />
                )}

                <div className="text-center">
                  {/* Number + Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6">
                    <span className="absolute font-heading text-5xl font-bold text-[oklch(0.14_0.005_250)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={24} className="relative z-10 text-copper" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.5_0.005_250)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
