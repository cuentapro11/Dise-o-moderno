import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";

const PhotosIcon = () => (
  <svg className="w-12 h-12 animate-spin [animation-duration:8s]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 C38 50 30 41 30 29 C30 17 38 8 50 8Z" fill="#e8c97a"/>
    <path d="M50 50 C50 38 59 30 71 30 C83 30 92 38 92 50Z" fill="#c49a4a"/>
    <path d="M50 50 C62 50 70 59 70 71 C70 83 62 92 50 92Z" fill="#b8832a"/>
    <path d="M50 50 C50 62 41 70 29 70 C17 70 8 62 8 50Z" fill="#f2d898"/>
    <circle cx="50" cy="50" r="11" fill="#fdf6e8"/>
  </svg>
);

const SocialSection = () => (
  <section className="py-16 shadow-md overflow-hidden bg-transparent">
    <div className="text-center px-4">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <GoldDivider className="mb-4" />
      </motion.div>

      <motion.h3
        className="font-heading text-3xl md:text-4xl text-gold italic mb-2"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Compartimos este día junto a ti
      </motion.h3>

      <motion.p
        className="font-body text-sm text-muted-foreground mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        Comparte tus fotos y videos de este hermoso día
      </motion.p>

      <motion.div
        className="flex justify-center text-gold mb-6"
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.3, ease: "backOut" }}
      >
        <PhotosIcon />
      </motion.div>

      <motion.div
        className="inline-block bg-muted rounded-lg px-8 py-3 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4, ease: "backOut" }}
      >
        <span className="font-heading text-2xl text-foreground">#rafaelyjuana</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors"
          href="https://photos.app.goo.gl/oUanUmwPDCBF5yjw7"
        >
          Sube tu foto
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
