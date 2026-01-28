import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-card overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4">
              Work with <span className="text-gradient">US</span>
            </h2>
            
            <p className="font-body text-xl text-muted-foreground mb-12">
              Let's create something amazing together
            </p>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/firstrule.fx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-gradient-primary px-10 py-5 text-primary-foreground font-body font-semibold text-lg tracking-wide transition-all duration-300 shadow-glow hover:shadow-[0_0_80px_hsl(350_85%_60%_/_0.4)]"
          >
            <Instagram className="w-6 h-6" />
            FIRSTRULE.FX
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-lg text-muted-foreground mt-12 italic"
          >
            By firstrule.fx
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
