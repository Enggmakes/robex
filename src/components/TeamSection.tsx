import { motion } from "framer-motion";
import { Github, Linkedin, User } from "lucide-react";

const team = [
  { name: "Sayyad Hujefa", role: "Team Lead", image: "/gallery/sayyad.jpeg", linkedin: "https://www.linkedin.com/in/hujefa-sayyad-5890a52b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Wagh Aryan", role: "AI & Hardware Engineer", image: "/gallery/aryan.jpeg", linkedin: "https://www.linkedin.com/in/aryan-wagh-7i9a10?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Shinde Pranav", role: "Designer", image: "/gallery/pranav.jpeg", linkedin: "https://www.linkedin.com/in/pranav-shinde-2a49542b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">The Builders</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-24 h-24 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors overflow-hidden border-2 border-transparent group-hover:border-primary/30">
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        e.currentTarget.nextElementSibling?.classList.add('flex');
                      }}
                      className="w-full h-full object-cover"
                    />
                    <User className="hidden w-10 h-10 text-muted-foreground/60" />
                  </>
                ) : (
                  <User className="w-10 h-10 text-muted-foreground/60" />
                )}
              </div>
              <h3 className="font-semibold mb-1 text-lg">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-muted-foreground/50 hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href={member.linkedin} className="text-muted-foreground/50 hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
