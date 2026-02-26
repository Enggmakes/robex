import { motion } from "framer-motion";
import {
  Mic, ScanFace, Building2, Languages, CloudSun, Move3d, Gamepad2,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Voice Interaction",
    desc: "Natural conversations powered by Google Gemini for intelligent campus assistance.",
  },
  {
    icon: ScanFace,
    title: "Face Recognition Attendance",
    desc: "Automated attendance using FaceNet and OpenCV with real-time face detection.",
  },
  {
    icon: Building2,
    title: "Smart Campus Integration",
    desc: "Connected to campus systems for schedules, announcements, and navigation.",
  },
  {
    icon: Languages,
    title: "Multilingual TTS",
    desc: "Edge-TTS powered speech synthesis supporting multiple languages and voices.",
  },
  {
    icon: CloudSun,
    title: "Weather & Time Awareness",
    desc: "Context-aware responses incorporating real-time weather and schedule data.",
  },
  {
    icon: Move3d,
    title: "Servo-Based Head Movement",
    desc: "Expressive head tracking for natural human-robot interaction experiences.",
  },
  {
    icon: Gamepad2,
    title: "Real-Time Robot Control",
    desc: "ESP32-powered motor control enabling precise navigation and movement.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Core <span className="gradient-text">Features</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 group hover:border-primary/30 transition-all duration-500 gradient-border"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
