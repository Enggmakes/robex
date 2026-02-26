import { motion } from "framer-motion";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="section-padding border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">ROBEX</h2>
          <p className="text-muted-foreground mb-1">Smart Campus Assistant Robot</p>
          <p className="text-muted-foreground/60 text-sm mb-8">
            Final Year Project · Department of AI & ML
          </p>

          <div className="glass-subtle rounded-2xl p-8 max-w-lg mx-auto mb-10">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Samarth College of Engineering and Management,Belhe</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-muted-foreground/60">Project Guide:</span>
                <span>Prof.Bramhane Mam</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>robex@SCOEM.edu</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-10">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground/40 text-xs">
            © 2025 ROBEX Project. Built with passion by undergraduate engineers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
