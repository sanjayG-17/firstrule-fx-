import { motion } from "framer-motion";
import { useState } from "react";
import poster5 from "@/assets/poster5.png";
import poster6 from "@/assets/poster6.png";
import poster7 from "@/assets/poster7.png";
import poster8 from "@/assets/poster8.png";
import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";
import color1 from "@/assets/color1.jpg";
import color2 from "@/assets/color2.jpg";
import color3 from "@/assets/color3.jpg";
import color4 from "@/assets/color4.jpg";
import color5 from "@/assets/color5.jpg";
import color6 from "@/assets/color6.jpg";
import color7 from "@/assets/color7.jpg";
import color8 from "@/assets/color8.jpg";
import Lightbox from "./Lightbox";

// New posters (uploaded Carzio designs)
const posters = [poster5, poster6, poster7, poster8];

// Color grading now includes the old posters + original color grading images
const colorGrading = [poster1, poster2, poster3, poster4, color1, color2, color3, color4, color5, color6, color7, color8];

// All images combined for lightbox navigation
const allImages = [...posters, ...colorGrading];

const PortfolioSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            OUR <span className="text-gradient">WORKS</span>
          </h2>
        </motion.div>

        {/* Posters Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
          >
            POSTERS
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {posters.map((poster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={poster}
                  alt={`Poster design ${index + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-foreground text-sm font-medium">Click to view</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Color Grading Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12"
          >
            COLOUR GRADING
          </motion.h3>

          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4">
            {colorGrading.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid mb-4"
                onClick={() => openLightbox(posters.length + index)}
              >
                <img
                  src={image}
                  alt={`Color grading example ${index + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-foreground text-sm font-medium">Click to view</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={allImages.map(src => ({ type: 'image', src }))}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};

export default PortfolioSection;
