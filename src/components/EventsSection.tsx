import { motion } from "framer-motion";
import OrnamentalCorners from "./OrnamentalCorners";

const CONFIRM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfihMMzM0r0wmtJ-7TTirHk179zc3e_VRC--UXJwN-v_59SOw/viewform?usp=publish-editor";

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  day: string;
  time: string;
  place: string;
  address: string;
  delay?: number;
}

const EventCard = ({ icon, title, day, time, place, address, delay = 0 }: EventCardProps) => (
  <motion.div
    className="relative rounded-lg p-5 text-center flex-1 max-w-sm px-[36px] py-[36px]"
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <OrnamentalCorners />
    <div className="relative rounded-lg p-4 px-[36px] py-[36px]">
      <motion.div
        className="mb-4 flex justify-center text-gold"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3, ease: "backOut" }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="font-heading text-3xl text-gold italic mb-2"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.35 }}
      >
        {title}
      </motion.h3>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.45 }}
      >
        <h4 className="font-heading text-xl text-foreground italic mb-1">Día</h4>
        <p className="font-body text-sm text-muted-foreground mb-4">{day} - {time}</p>
        <a
          href={CONFIRM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-md hover:bg-gold-dark transition-colors mb-6 w-full max-w-[200px]"
        >
          Confirmar asistencia
        </a>
        <h4 className="font-heading text-xl text-foreground italic mb-1">Lugar</h4>
        <p className="font-body text-sm text-muted-foreground mb-4">{place}</p>
        <h4 className="font-heading text-xl text-foreground italic mb-1">Dirección</h4>
        <p className="font-body text-sm text-muted-foreground mb-4">{address}</p>
        <div className="flex justify-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-md hover:bg-gold-dark transition-colors"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const CeremonyIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/fshosubk.json"
    trigger="loop"
    stroke="light"
    colors="primary:#b8944f,secondary:#c4a96a"
    style={{ width: '64px', height: '64px' }}
  />
);

const CelebrationIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/yvgmrqny.json"
    trigger="loop"
    stroke="light"
    colors="primary:#b8944f,secondary:#c4a96a"
    style={{ width: '64px', height: '64px' }}
  />
);

const EventsSection = () => {
  return (
    <section className="py-8 px-[13px] shadow-md overflow-hidden bg-transparent">
      <motion.div
        className="flex-col gap-8 max-w-4xl mx-auto items-center justify-center flex md:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <EventCard
          icon={<CeremonyIcon />}
          title="Ceremonia"
          day="Sábado 15 de Mayo"
          time="17hs"
          place="Parroquia Nuestra Señora de Lujan"
          address="Av. Pergamino 203 - Santo Domingo"
          delay={0}
        />
        <EventCard
          icon={<CelebrationIcon />}
          title="Celebración"
          day="Sábado 15 de Mayo"
          time="20hs"
          place="Salon de fiestas Avril"
          address="Av. Los Reartes 12 - Santo Domingo"
          delay={0.2}
        />
      </motion.div>
    </section>
  );
};

export default EventsSection;
