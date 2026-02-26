import { motion } from "framer-motion";
import { ArrowDown, Play, ExternalLink } from "lucide-react";
import robexImage from "@/assets/robex.jpeg";

const HeroSection = () => {
  const handleControllerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const password = window.prompt("Enter authorization password to access the ROBEX Controller view:");

    // Simple frontend protection as requested
    if (password === "Robex@78910") {
      window.open("https://petrological-equatorially-kam.ngrok-free.dev", "_blank", "noopener,noreferrer");
    } else if (password !== null) {
      alert("Unauthorized: Incorrect password.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/6 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Robotics
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="gradient-text">ROBEX</span>
              <br />
              <span className="text-foreground">Smart Campus</span>
              <br />
              <span className="text-foreground">Assistant Robot</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              An AI-powered semi-autonomous robotic system designed for intelligent campus interaction, attendance, and assistance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleControllerClick}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity border border-primary/50 shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-primary/20"
              >
                <ExternalLink className="w-4 h-4" />
                Open ROBEX Controller
              </button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                Explore Features
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 glass rounded-xl px-6 py-3 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                <Play className="w-4 h-4" />
                View Demo
              </a>
            </div>
          </motion.div>

          {/* Right - Robot image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-90" />
              <div className="glass rounded-3xl p-4 glow relative animate-float">
                <img
                  src={robexImage}
                  alt="ROBEX - AI Campus Assistant Robot"
                  className="w-full max-w-sm rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
