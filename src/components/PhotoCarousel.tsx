import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GoldDivider from "./GoldDivider";
import SectionDivider from "./SectionDivider";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";
import coupleHero from "@/assets/couple-hero.jpg";
import prueba from "@/assets/prueba.jpg";

const images = [
  { src: couple1, alt: "Pareja en la ciudad" },
  { src: couple2, alt: "Pareja abrazándose" },
  { src: couple3, alt: "Pareja romántica" },
  { src: coupleHero, alt: "Boda" },
  { src: prueba, alt: "Prueba" },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
};

const PhotoCarousel = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prev = () => {
    setCurrent((p) => (p - 1 + total) % total);
  };

  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const desktopImages = [
    images[(current - 1 + total) % total],
    images[current],
    images[(current + 1) % total],
  ];

  return (
    <section className="py-16 bg-card shadow-md">
      <SectionDivider />
      <motion.div
        className="text-center px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GoldDivider className="mb-4" />
        <h3 className="font-heading text-3xl md:text-4xl text-gold italic mb-2">
          Retratos de Nuestro Amor
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Un minuto, un segundo, un instante que queda en la eternidad
        </p>
        <div className="flex justify-center mb-8">
          <lord-icon
            src="https://cdn.lordicon.com/wsaaegar.json"
            trigger="loop"
            stroke="light"
            colors="primary:#b8944f,secondary:#c4a96a"
            style={{ width: '56px', height: '56px' }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="block md:hidden px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="relative bg-card rounded-lg overflow-hidden shadow-md w-full h-80"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gold/30" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex gap-4 justify-center items-center px-8">
            <AnimatePresence mode="wait">
              {desktopImages.map((img, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  className={`relative bg-card rounded-lg overflow-hidden shadow-md ${i === 1 ? "w-72 h-80" : "w-60 h-64"}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  {i === 1 && <div className="absolute bottom-0 left-0 right-0 h-16 bg-gold/30" />}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gold hover:text-gold-dark transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gold hover:text-gold-dark transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-gold-light/50"}`}
            />
          ))}
        </div>
      </motion.div>
      <SectionDivider />
    </section>
  );
};

export default PhotoCarousel;
