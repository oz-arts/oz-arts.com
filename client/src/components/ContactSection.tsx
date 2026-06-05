/**
 * DESIGN: Dark Atelier — Contact Section
 * Layout asymétrique : infos à gauche, formulaire à droite.
 * Coordonnées complètes SANS adresse physique (demande client).
 * Email: contact@oz-arts.com, Tel: 06 71 87 44 41
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Instagram, Send, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis - ${formData.service || "Projet résine"}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@oz-arts.com?subject=${subject}&body=${body}`;
    toast.success("Redirection vers votre messagerie...");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Copper separator */}
      <div className="copper-line mb-24 lg:mb-32" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Contact Info (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-copper" />
              <span className="text-xs tracking-[0.3em] uppercase text-copper font-medium">
                Contact
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Parlons de
              <br />
              <span className="text-gradient-copper">votre projet</span>
            </h2>

            <p className="text-[oklch(0.55_0.005_250)] text-sm leading-relaxed mb-10">
              Chaque projet commence par une conversation. Décrivez-nous votre
              vision et nous vous proposerons une solution sur mesure.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white font-medium">Téléphone</p>
                  <a
                    href="tel:+33671874441"
                    className="text-xs text-copper hover:text-copper-light transition-colors"
                  >
                    06 71 87 44 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white font-medium">Email</p>
                  <a
                    href="mailto:contact@oz-arts.com"
                    className="text-xs text-copper hover:text-copper-light transition-colors"
                  >
                    contact@oz-arts.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white font-medium">Horaires</p>
                  <p className="text-xs text-[oklch(0.5_0.005_250)] mt-0.5">
                    Lun — Sam : 8h00 — 20h00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram size={18} className="text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white font-medium">Réseaux sociaux</p>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a
                      href="https://www.instagram.com/ozart.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-copper hover:text-copper-light transition-colors"
                    >
                      Instagram : @ozart.pro
                    </a>
                    <a
                      href="https://www.tiktok.com/@ozart.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-copper hover:text-copper-light transition-colors"
                    >
                      TikTok : @ozart.pro
                    </a>
                    <a
                      href="https://www.facebook.com/Ozart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-copper hover:text-copper-light transition-colors"
                    >
                      Facebook : Ozart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="mt-8 p-4 bg-[oklch(0.1_0.005_250)] border border-[oklch(0.18_0.005_250)]">
              <p className="text-[10px] tracking-[0.2em] uppercase text-copper font-medium mb-1">
                Zone d'intervention
              </p>
              <p className="text-xs text-[oklch(0.5_0.005_250)]">
                Grand Est — Alsace, Lorraine & alentours
              </p>
            </div>
          </motion.div>

          {/* Right — Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)] mb-2 font-medium">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[oklch(0.1_0.005_250)] border border-[oklch(0.2_0.005_250)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.35_0.005_250)] focus:border-copper focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[oklch(0.1_0.005_250)] border border-[oklch(0.2_0.005_250)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.35_0.005_250)] focus:border-copper focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)] mb-2 font-medium">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[oklch(0.1_0.005_250)] border border-[oklch(0.2_0.005_250)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.35_0.005_250)] focus:border-copper focus:outline-none transition-colors"
                    placeholder="06 00 00 00 00"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)] mb-2 font-medium">
                    Service souhaité
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[oklch(0.1_0.005_250)] border border-[oklch(0.2_0.005_250)] px-4 py-3 text-sm text-white focus:border-copper focus:outline-none transition-colors appearance-none"
                  >
                    <option value="sol-epoxy">Sol — Résine Epoxy</option>
                    <option value="sol-paillete">Sol — Résine pailletée</option>
                    <option value="sol-tapis">Sol — Tapis de pierre</option>
                    <option value="mur-design">Mur — Design sur mesure</option>
                    <option value="mur-parement">Mur — Pierre de parement</option>
                    <option value="mur-resine">Mur — Résine décorative</option>
                    <option value="tableau">Accessoire — Tableau en résine</option>
                    <option value="table">Accessoire — Table / Mobilier</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[oklch(0.45_0.005_250)] mb-2 font-medium">
                  Votre message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[oklch(0.1_0.005_250)] border border-[oklch(0.2_0.005_250)] px-4 py-3 text-sm text-white placeholder:text-[oklch(0.35_0.005_250)] focus:border-copper focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet, les surfaces concernées, vos préférences de couleurs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-copper text-[oklch(0.08_0.005_250)] font-heading font-semibold text-sm tracking-wide uppercase hover:bg-copper-light transition-colors duration-300"
              >
                <Send size={16} />
                Envoyer la demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
