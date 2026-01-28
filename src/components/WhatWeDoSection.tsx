import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  return (
    <section id="work" className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              WHAT WE <span className="text-gradient">DO</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center"
          >
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Before launching FirstRule.FX, we built our editing skills by creating and posting reels on our own — experimenting with different styles, transitions, and trends.
            </p>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              We've also collaborated with friends and creators, editing reels and designing visuals that helped them boost engagement. These early projects gave us practical experience in storytelling, pacing, and design consistency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
