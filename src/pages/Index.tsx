import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Solo registrar el listener de visibilidad después de haber entrado
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
      {!entered && <CoverScreen onEnter={handleEnter} />}
      {entered && (
        <>
          <audio ref={audioRef} src="/audio/background-music.mp3" loop preload="auto" />
          <button
            onClick={() => setMusicOn(!musicOn)}
            className="fixed top-4 right-4 z-40 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
            aria-label="Toggle music"
          >
            {musicOn ? <Music className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="scroll-shadow max-w-5xl mx-auto"
          >
            <HeroSection />
            <CountdownSection />
            <GuestsSection />
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
