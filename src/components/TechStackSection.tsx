import { motion } from "framer-motion";

const techs = [
  "Python", "Flask", "FaceNet", "OpenCV", "ESP32",
  "Edge-TTS", "Google Gemini", "Google Sheets API",
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Built With</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technology <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass rounded-xl px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:glow-sm transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
