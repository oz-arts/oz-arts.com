/**
 * DESIGN: Dark Atelier — Footer
 * Minimaliste, lignes cuivrées, liens essentiels.
 */
import { Instagram, ArrowUp, Phone, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 lg:py-16">
      <div className="copper-line mb-12" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center lg:text-left">
            <span className="font-heading text-2xl font-bold tracking-[0.15em] text-white">
              OZ<span className="text-gradient-copper">ART</span>
            </span>
            <p className="text-[8px] text-[oklch(0.4_0.005_250)] mt-0.5 tracking-[0.35em] uppercase">
              — Les Beaux Arts —
            </p>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6 text-xs tracking-wider uppercase text-[oklch(0.45_0.005_250)]">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-copper transition-colors"
            >
              Services
            </a>
            <span className="w-1 h-1 rounded-full bg-[oklch(0.25_0.005_250)]" />
            <a
              href="#realisations"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#realisations")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-copper transition-colors"
            >
              Réalisations
            </a>
            <span className="w-1 h-1 rounded-full bg-[oklch(0.25_0.005_250)]" />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-copper transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right — Social + back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ozart.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[oklch(0.22_0.005_250)] text-[oklch(0.45_0.005_250)] hover:border-copper hover:text-copper transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@ozart.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[oklch(0.22_0.005_250)] text-[oklch(0.45_0.005_250)] hover:border-copper hover:text-copper transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.1v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.6 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 3.76.92V6.87a4.83 4.83 0 0 1-.01-.18z"/></svg>
            </a>
            <a
              href="https://www.facebook.com/Ozart"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[oklch(0.22_0.005_250)] text-[oklch(0.45_0.005_250)] hover:border-copper hover:text-copper transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="tel:+33671874441"
              className="w-9 h-9 flex items-center justify-center border border-[oklch(0.22_0.005_250)] text-[oklch(0.45_0.005_250)] hover:border-copper hover:text-copper transition-all duration-300"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center border border-[oklch(0.22_0.005_250)] text-[oklch(0.45_0.005_250)] hover:border-copper hover:text-copper transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[oklch(0.15_0.005_250)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[oklch(0.35_0.005_250)] tracking-wider">
            &copy; {new Date().getFullYear()} OzArt — Tous droits réservés
          </p>
          <p className="text-[10px] text-[oklch(0.3_0.005_250)] tracking-wider">
            Artiste & Décorateur — Grand Est, France
          </p>
        </div>
      </div>
    </footer>
  );
}
