import { motion } from "framer-motion";
import heroArt from "@/assets/hero-rise-above.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Floating hero art */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              src={heroArt}
              alt="Creative artwork"
              className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-glow"
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Glitch overlay effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-10 mix-blend-overlay" />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-4">
            Firstrule<span className="text-gradient">.fx</span>
          </h1>
        </motion.div>

        {/* Large PORTFOLIO text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="font-display text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-foreground leading-none">
            PORTFOLIO
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground mt-8 tracking-widest uppercase"
        >
          Video Editor and Graphic Designer
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
