import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                A Little
              </h2>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
                About <span className="text-gradient">US</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  We're a two-person creative studio passionate about helping creators and brands grow.
                </p>
                <p>
                  At FirstRule.FX, we focus on crafting eye-catching reels, short videos, thumbnails, and posters that connect with audiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Team member */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              
              <div className="relative bg-secondary/50 backdrop-blur-sm p-8 border border-border">
                <span className="font-display text-sm text-primary tracking-widest uppercase mb-4 block">
                  Creative Director
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Sanjay
                </h3>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  Purusothaman
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
