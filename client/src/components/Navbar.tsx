/**
 * DESIGN: Dark Atelier — Galerie d'Art Industrielle
 * Navigation ultra-minimaliste, horizontale, fond transparent avec blur au scroll.
 * Logo OZART "Les Beaux Arts" à gauche, liens de navigation à droite.
 * Accent cuivré/bronze (#B87333) pour les éléments interactifs.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.08_0.005_250/0.9)] backdrop-blur-xl border-b border-[oklch(0.22_0.005_250/0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#accueil");
              }}
              className="flex items-center group"
            >
              <img
                src="/images/ozart-logo.png"
                alt="OzArt — Les Beaux Arts"
                className="h-12 lg:h-16 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="relative text-sm font-medium tracking-wide uppercase text-[oklch(0.7_0.005_250)] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://www.instagram.com/ozart.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.5_0.005_250)] hover:text-copper transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+33671874441"
                className="text-[oklch(0.5_0.005_250)] hover:text-copper transition-colors duration-300"
              >
                <Phone size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[oklch(0.06_0.005_250/0.98)] backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="text-2xl font-heading font-semibold tracking-wide uppercase text-white hover:text-gradient-copper transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-8 text-[oklch(0.5_0.005_250)]"
            >
              <a
                href="https://www.instagram.com/ozart.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a href="tel:+33671874441" className="hover:text-copper transition-colors">
                <Phone size={22} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
