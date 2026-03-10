import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";
import SectionDivider from "./SectionDivider";

const GiftsSection = () => (
  <section className="py-16 bg-background shadow-md">
    <SectionDivider />
    <motion.div
      className="text-center px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GoldDivider className="mb-4" />
      <h3 className="font-heading text-3xl md:text-4xl text-foreground italic mb-2">Regalos</h3>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Si deseas regalarnos algo más que tu hermosa presencia...
      </p>
      <div className="flex justify-center mb-6">
        <lord-icon
          src="https://cdn.lordicon.com/kezeezyg.json"
          trigger="loop"
          stroke="light"
          colors="primary:#b8944f,secondary:#c4a96a"
          style={{ width: '56px', height: '56px' }}
        />
      </div>
      <a
        href="https://cuentapro11.github.io/dos-botones-regalo/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors"
      >
        Ver más
      </a>
    </motion.div>
    <SectionDivider />
  </section>
);

export default GiftsSection;
