import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";
import SectionDivider from "./SectionDivider";

const GiftsSection = () => (
  <section className="py-16 shadow-md overflow-hidden bg-transparent">
    <SectionDivider />
    <div className="text-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <GoldDivider className="mb-4" />
      </motion.div>

      <motion.h3
        className="font-heading text-3xl md:text-4xl text-foreground italic mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        Regalos
      </motion.h3>

      <motion.p
        className="font-body text-sm text-muted-foreground mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        Si deseas regalarnos algo más que tu hermosa presencia...
      </motion.p>

      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.4, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35, ease: "backOut" }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/kezeezyg.json"
          trigger="loop"
          stroke="light"
          colors="primary:#b8944f,secondary:#c4a96a"
          style={{ width: '56px', height: '56px' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="https://cuentapro11.github.io/dos-botones-regalo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors"
        >
          Ver más
        </a>
      </motion.div>
    </div>
    <SectionDivider />
  </section>
);

export default GiftsSection;
