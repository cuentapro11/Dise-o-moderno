import SectionDivider from "./SectionDivider";

const CONFIRM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfihMMzM0r0wmtJ-7TTirHk179zc3e_VRC--UXJwN-v_59SOw/viewform?usp=publish-editor";
const WA_SONG = "https://wa.me/?text=" + encodeURIComponent("¡Hola! Me gustaría tener el honor de sugerir una canción para amenizar tan especial celebración:");

const footerLinks = [
  { label: "Confirmar asistencia a ceremonia", href: CONFIRM_URL },
  { label: "Confirmar asistencia a celebración", href: CONFIRM_URL },
  { label: "Sugerir canción", href: WA_SONG },
];

const FooterSection = () =>
<footer className="py-12 bg-background shadow-md">
    <SectionDivider />
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left">
        <div className="w-20 h-px bg-gold mx-auto md:mx-0 mb-2" />
        <h4 className="font-display text-4xl text-gold tracking-wider">
          R<span className="text-gold-dark">&</span>J
        </h4>
        <div className="w-20 h-px bg-gold mx-auto md:mx-0 mt-2" />
        <p className="font-body text-xs tracking-[0.2em] uppercase font-bold mt-2">
          Rafael & Juana
        </p>
      </div>

      <nav className="text-center md:text-right">
        <ul className="space-y-2">
          {footerLinks.map((link) =>
          <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-base text-gold hover:text-gold-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
    <SectionDivider />
  </footer>;


export default FooterSection;
