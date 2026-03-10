import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrnamentalCorners from "./OrnamentalCorners";

interface CoverScreenProps {
  onEnter: (withMusic: boolean) => void;
}

const CoverScreen = ({ onEnter }: CoverScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = (withMusic: boolean) => {
    setIsExiting(true);
    setTimeout(() => onEnter(withMusic), 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-full max-w-xl mx-4 px-8 py-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <OrnamentalCorners />

            <p className="font-heading text-lg text-muted-foreground italic mb-6">
              Bienvenidos a la invitación de
            </p>

            <div className="mb-2">
              <div className="w-32 h-px bg-gold mx-auto mb-4" />
              <h1 className="font-display text-7xl md:text-8xl text-gold tracking-wider">
                R<span className="text-gold-dark">&</span>J
              </h1>
              <div className="w-32 h-px bg-gold mx-auto mt-4" />
            </div>

            <h2 className="font-body text-sm tracking-[0.3em] uppercase text-foreground font-bold mt-4 mb-8">
              Rafael & Juana
            </h2>

            {/* Ornamental flourish */}
            <svg className="w-12 h-8 mx-auto text-gold mb-6" viewBox="0 0 48 32" fill="currentColor" opacity="0.6">
              <path d="M24 8C20 4 14 2 8 4C4 6 2 10 4 14C6 18 12 20 16 18C18 17 19 15 18 13C17 11 14 10 12 12" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M24 8C28 4 34 2 40 4C44 6 46 10 44 14C42 18 36 20 32 18C30 17 29 15 30 13C31 11 34 10 36 12" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="24" cy="6" r="2" />
            </svg>

            <p className="font-heading text-base text-muted-foreground italic mb-8">
              La música de fondo es parte de la experiencia
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleEnter(true)}
                className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors duration-300 min-w-[200px]"
              >
                Ingresar con música
              </button>
              <button
                onClick={() => handleEnter(false)}
                className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors duration-300 min-w-[200px]"
              >
                Ingresar sin música
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoverScreen;
