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
    <section ref={sectionRef} className="relative w-full shadow-lg">
      <div className="flex flex-col md:flex-row w-full">
        {/* Photo side - parallax */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[600px] relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${coupleHero})`,
              y: imageY,
              height: "130%",
              top: "-15%",
            }}
          />
        </div>

        {/* Info side */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center py-12 px-8 bg-card relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <OrnamentalCorners />
          <div className="text-center">
            <p className="font-heading text-lg text-gold italic mb-4">15.05.2021</p>

            <h2 className="font-display text-6xl md:text-7xl text-gold tracking-wider mb-2">
              R<span className="text-gold-dark">&</span>J
            </h2>
            <p className="font-body text-sm tracking-[0.3em] uppercase font-bold mb-8">
              Rafael & Juana
            </p>

            {/* Ornamental drop */}
            <svg className="w-4 h-6 mx-auto text-gold mb-4" viewBox="0 0 16 24" fill="currentColor">
              <path d="M8 0C8 0 2 8 2 14C2 18 4.5 22 8 22C11.5 22 14 18 14 14C14 8 8 0 8 0Z" opacity="0.6" />
            </svg>

            <p className="font-heading text-base text-muted-foreground italic leading-relaxed mb-6">
              Todos somos mortales,
              <br />
              hasta el primer beso y la segunda copa de vino
            </p>

            {/* Bottom flourish */}
            <svg className="w-16 h-8 mx-auto text-gold" viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
              <path d="M32 16C28 12 22 8 16 10C12 12 10 16 12 20C14 22 18 22 20 20" />
              <path d="M32 16C36 12 42 8 48 10C52 12 54 16 52 20C50 22 46 22 44 20" />
              <path d="M28 24Q32 28 36 24" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
