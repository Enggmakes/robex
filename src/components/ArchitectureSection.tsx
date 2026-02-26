import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            System <span className="gradient-text">Overview</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-4 md:p-8 gradient-border relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]"
        >
          {/* Architecture Diagram Image */}
          <img
            src="/architecture/diagram.png"
            alt="System Architecture Diagram"
            onError={(e) => {
              // Hide the broken image icon and show the placeholder block if the file doesn't exist yet
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
              e.currentTarget.nextElementSibling?.classList.add('flex');
            }}
            className="w-full h-auto object-contain max-h-[600px] rounded-xl z-10"
          />

          {/* Fallback Placeholder (Hidden by default, shown if image fails to load) */}
          <div className="hidden flex-col items-center justify-center absolute inset-0 z-0">
            <ImageIcon className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm">System architecture diagram</p>
            <p className="text-muted-foreground/50 text-xs mt-1">Place your image at <code className="bg-secondary/50 px-1 py-0.5 rounded">public/architecture/diagram.png</code> to display it here</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
