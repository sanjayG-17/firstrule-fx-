import { motion } from "framer-motion";

const skills = {
  graphicDesign: [
    "Logo Design",
    "Brand Identity",
    "Poster Design",
    "Environmental Design"
  ],
  videoEditing: [
    "Trending reels edits",
    "Long video edits"
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Graphic Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Graphic Design
            </h3>
            <ul className="space-y-4">
              {skills.graphicDesign.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-muted-foreground font-body text-lg"
                >
                  <span className="w-8 h-[1px] bg-primary" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Video Editing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Video Editing
            </h3>
            <ul className="space-y-4">
              {skills.videoEditing.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 text-muted-foreground font-body text-lg"
                >
                  <span className="w-8 h-[1px] bg-primary" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
