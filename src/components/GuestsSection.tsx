import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { Users } from "lucide-react";

const GuestsSection = () => {
  const params = new URLSearchParams(window.location.search);
  const nombresParam = params.get("nombres");
  const acompanantes = params.get("acompanantes");

  if (!nombresParam) return null;

  const nombres = nombresParam.split(",").map((n) => n.trim().replace(/\+/g, " "));
  const total = nombres.length + (acompanantes ? parseInt(acompanantes) : 0);

  return (
    <section className="py-12 shadow-md bg-transparent">
      <motion.div
        className="text-center px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-3">
          <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
            <span className="text-white font-display text-2xl font-bold">{total}</span>
          </div>
        </div>

        <h3 className="font-body text-sm tracking-[0.3em] uppercase font-bold text-foreground mb-1">
          Invitados
        </h3>

        {acompanantes && parseInt(acompanantes) > 0 && (
          <p className="font-heading text-base text-muted-foreground italic mb-6">
            ({acompanantes} acompañante{parseInt(acompanantes) > 1 ? "s" : ""})
          </p>
        )}

        <div className="flex flex-col items-center gap-2 mt-4">
          {nombres.map((nombre, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="px-8 py-2 bg-muted rounded-md font-body text-sm text-foreground min-w-[200px]"
            >
              {nombre}
            </motion.div>
          ))}
        </div>

        <p className="font-heading text-base text-muted-foreground italic mt-8">
          Tu presencia es lo más importante. ¡No faltes!
        </p>
      </motion.div>
      <SectionDivider />
    </section>
  );
};

export default GuestsSection;
