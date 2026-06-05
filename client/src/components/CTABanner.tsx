/**
 * DESIGN: Dark Atelier — CTA Banner
 * Bandeau avec fond texture beige/crème. Texte sombre sur fond clair.
 * Contraste inversé pour attirer l'attention.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-texture.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.92_0.01_85/0.85)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.15_0.02_55)] tracking-tight mb-4"
        >
          Prêt à transformer
          <br />
          votre espace ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[oklch(0.35_0.02_55)] text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed"
        >
          Devis gratuit et personnalisé. Nous intervenons dans tout le Grand Est
          pour donner vie à vos projets.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[oklch(0.12_0.005_250)] text-white font-heading font-semibold text-sm tracking-wide uppercase hover:bg-[oklch(0.2_0.005_250)] transition-colors duration-300 group"
        >
          Demander un devis gratuit
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </div>
    </section>
  );
}
