import { motion } from "framer-motion";
import { Brain, Cpu, Wifi } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      desc: "Powered by Google Gemini for natural language understanding and contextual responses.",
    },
    {
      icon: Cpu,
      title: "Semi-Autonomous Navigation",
      desc: "ESP32-driven motor control with real-time decision making and obstacle awareness.",
    },
    {
      icon: Wifi,
      title: "Campus Integration",
      desc: "Seamlessly connects with campus systems for attendance, announcements, and information relay.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">About the Project</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-text">ROBEX</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            ROBEX is a semi-autonomous campus assistant robot developed by a team of undergraduate engineers.
            Combining AI, computer vision, and embedded systems, ROBEX redefines how students and faculty
            interact with campus infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 hover:glow-sm transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
