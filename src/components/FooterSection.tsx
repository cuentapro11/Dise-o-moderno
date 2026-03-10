import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const CONFIRM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfihMMzM0r0wmtJ-7TTirHk179zc3e_VRC--UXJwN-v_59SOw/viewform?usp=publish-editor";
const WA_SONG = "https://wa.me/?text=" + encodeURIComponent("¡Hola! Me gustaría tener el honor de sugerir una canción para amenizar tan especial celebración:");

const footerLinks = [
  { label: "Confirmar asistencia a ceremonia", href: CONFIRM_URL },
  { label: "Confirmar asistencia a celebración", href: CONFIRM_URL },
  { label: "Sugerir canción", href: WA_SONG },
];

const FooterSection = () => (
  <footer className="py-12 shadow-md overflow-hidden bg-transparent">
    <SectionDivider />
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-20 h-px bg-gold mx-auto md:mx-0 mb-2" />
        <h4 className="font-display text-4xl text-gold tracking-wider">
          R<span className="text-gold-dark">&</span>J
        </h4>
        <div className="w-20 h-px bg-gold mx-auto md:mx-0 mt-2" />
        <p className="font-body text-xs tracking-[0.2em] uppercase font-bold mt-2">
          Rafael & Juana
        </p>
      </motion.div>

      <motion.nav
        className="text-center md:text-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className="space-y-2">
          {footerLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-base text-gold hover:text-gold-dark transition-colors"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
    <SectionDivider />
  </footer>
);

export default FooterSection;
