import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrnamentalCorners from "./OrnamentalCorners";
import coupleHero from "@/assets/couple-hero.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative w-full shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        {/* Foto con parallax */}
        <motion.div
          className="w-full md:w-1/2 h-[500px] md:h-[600px] relative overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${coupleHero})`,
              y: imageY,
              height: "130%",
              top: "-15%",
            }}
          />
        </motion.div>

        {/* Info side */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center py-12 px-8 relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrnamentalCorners />
          <div className="text-center">
            <motion.p
              className="font-heading text-lg text-gold italic mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              15.05.2026
            </motion.p>

            <motion.h2
              className="font-display text-6xl md:text-7xl text-gold tracking-wider mb-2"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.6, ease: "backOut" }}
            >
              R<span className="text-gold-dark">&</span>J
            </motion.h2>

            <motion.p
              className="font-body text-sm tracking-[0.3em] uppercase font-bold mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              Rafael & Juana
            </motion.p>

            <motion.svg
              className="w-4 h-6 mx-auto text-gold mb-4"
              viewBox="0 0 16 24"
              fill="currentColor"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <path d="M8 0C8 0 2 8 2 14C2 18 4.5 22 8 22C11.5 22 14 18 14 14C14 8 8 0 8 0Z" opacity="0.6" />
            </motion.svg>

            <motion.p
              className="font-heading text-base text-muted-foreground italic leading-relaxed mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Todos somos mortales,
              <br />
              hasta el primer beso y la segunda copa de vino
            </motion.p>

            <motion.svg
              className="w-16 h-8 mx-auto text-gold"
              viewBox="0 0 64 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 0.5, scaleX: 1 }}
              transition={{ duration: 1.0, delay: 1.1, ease: "easeOut" }}
            >
              <path d="M32 16C28 12 22 8 16 10C12 12 10 16 12 20C14 22 18 22 20 20" />
              <path d="M32 16C36 12 42 8 48 10C52 12 54 16 52 20C50 22 46 22 44 20" />
              <path d="M28 24Q32 28 36 24" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
