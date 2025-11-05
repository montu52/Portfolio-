import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Agustín Monteros
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desarrollador Frontend con pasión por el diseño elegante y funcional.
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="btn"
      >
        Contactame
      </motion.a>
    </section>
  );
}
