import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoverScreen from "@/components/CoverScreen";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventsSection from "@/components/EventsSection";
import PhotoCarousel from "@/components/PhotoCarousel";
import GiftsSection from "@/components/GiftsSection";
import GuestsSection from "@/components/GuestsSection";
import SocialSection from "@/components/SocialSection";
import FooterSection from "@/components/FooterSection";
import { Music, VolumeX } from "lucide-react";

// Stagger container: los hijos aparecen uno tras otro
const pageEnterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

// Cada sección sube suavemente desde abajo con fade + leve escala
const sectionEnterVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = (withMusic: boolean) => {
    setEntered(true);
    setMusicOn(withMusic);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  useEffect(() => {
    if (!entered) return;
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        audioRef.current.pause();
      } else if (musicOn) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [entered, musicOn]);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {!entered && <CoverScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <>
          <audio ref={audioRef} src="/audio/background-music.mp3" loop preload="auto" />

          <motion.button
            onClick={() => setMusicOn(!musicOn)}
            className="fixed top-4 right-4 z-40 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
            aria-label="Toggle music"
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
          >
            {musicOn ? <Music className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </motion.button>

          <motion.div
            className="scroll-shadow max-w-5xl mx-auto"
            variants={pageEnterVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={sectionEnterVariants}>
              <HeroSection />
            </motion.div>
            <motion.div variants={sectionEnterVariants}>
              <CountdownSection />
            </motion.div>
            <motion.div variants={sectionEnterVariants}>
              <GuestsSection />
            </motion.div>

            <EventsSection />
            <PhotoCarousel />
            <GiftsSection />
            <SocialSection />
            <FooterSection />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Index;
