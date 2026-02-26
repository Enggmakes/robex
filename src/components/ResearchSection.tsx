import { motion } from "framer-motion";
import { Target, BarChart3, TrendingUp, Zap } from "lucide-react";

const metrics = [
  { icon: Target, label: "Face Recognition Accuracy", value: "96.8%", color: "text-primary" },
  { icon: BarChart3, label: "Voice Command Accuracy", value: "94.2%", color: "text-accent" },
  { icon: TrendingUp, label: "Response Latency", value: "<1.2s", color: "text-primary" },
  { icon: Zap, label: "System Uptime", value: "99.1%", color: "text-accent" },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Performance</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Research <span className="gradient-text">Metrics</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <m.icon className={`w-8 h-8 ${m.color} mx-auto mb-3`} />
              <p className="text-3xl font-bold mb-1">{m.value}</p>
              <p className="text-muted-foreground text-sm">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Confusion Matrix Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 gradient-border"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Confusion Matrix & Model Analysis</h3>
          <div className="flex items-center justify-center min-h-[200px]">
            <p className="text-muted-foreground/50 text-sm">Upload confusion matrix and performance charts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
