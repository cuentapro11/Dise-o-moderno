import { motion } from "framer-motion";
import GoldDivider from "./GoldDivider";

const PhotosIcon = () => (
  <svg className="w-12 h-12 animate-spin [animation-duration:8s]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 C38 50 30 41 30 29 C30 17 38 8 50 8Z" fill="#e8c97a"/>
    <path d="M50 50 C50 38 59 30 71 30 C83 30 92 38 92 50Z" fill="#c49a4a"/>
    <path d="M50 50 C62 50 70 59 70 71 C70 83 62 92 50 92Z" fill="#b8832a"/>
    <path d="M50 50 C50 62 41 70 29 70 C17 70 8 62 8 50Z" fill="#f2d898"/>
    <circle cx="50" cy="50" r="11" fill="#fdf6e8"/>
  </svg>
);;


const SocialSection = () =>
<section className="py-16 bg-card shadow-md">
    <motion.div
    className="text-center px-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}>

      <GoldDivider className="mb-4" />
      <h3 className="font-heading text-3xl md:text-4xl text-gold italic mb-2">
        Compartimos este día junto a ti
      </h3>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Comparte tus fotos y videos de este hermoso día
      </p>
      <div className="flex justify-center text-gold mb-6">
        <PhotosIcon />
      </div>

      <div className="inline-block bg-muted rounded-lg px-8 py-3 mb-6">
        <span className="font-heading text-2xl text-foreground">#rafaelyjuana</span>
      </div>

      <div>
        <a

        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider rounded-md hover:bg-gold-dark transition-colors" href="https://photos.app.goo.gl/oUanUmwPDCBF5yjw7">

          Sube tu foto
        </a>
      </div>
    </motion.div>
  </section>;


export default SocialSection;
