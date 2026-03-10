import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import SectionDivider from "./SectionDivider";

const WEDDING_DATE = new Date("2026-12-31T12:00:00");

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60) % 24),
      minutes: Math.floor(diff / (1000 * 60) % 60),
      seconds: Math.floor(diff / 1000 % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
  { value: timeLeft.days, label: "días" },
  { value: timeLeft.hours, label: "hs" },
  { value: timeLeft.minutes, label: "min" },
  { value: timeLeft.seconds, label: "seg" }];


  return (
    <section className="py-4 bg-card shadow-md">
      <SectionDivider />
      <motion.div
        className="text-center py-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>

        <h3 className="font-display text-2xl text-foreground mb-3 font-semibold">Falta</h3>
        <div className="flex items-center justify-center gap-3 md:gap-5">
          {units.map((unit, i) =>
          <div key={unit.label} className="flex items-center gap-3 md:gap-5">
              <div className="text-center min-w-[3rem] md:min-w-[3.5rem]">
                <span className="font-display text-3xl md:text-4xl text-gold font-bold tracking-tight leading-none block">{String(unit.value).padStart(2, '0')}</span>
                <p className="font-body text-xs text-muted-foreground mt-1">{unit.label}</p>
              </div>
              {i < units.length - 1 &&
            <div className="w-px h-8 bg-gold-light flex-shrink-0" />
            }
            </div>
          )}
        </div>
        <Heart className="text-gold mx-auto mt-3 fill-gold animate-heartbeat w-[20px] h-[20px]" />
      </motion.div>
      <SectionDivider />
    </section>);

};

export default CountdownSection;