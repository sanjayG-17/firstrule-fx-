import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox, { LightboxItem } from "@/components/Lightbox";

const videos: LightboxItem[] = [
    {
        type: "video",
        src: "/videos/1000200172.mp4",
        poster: "/videos/christoff.jpg",
    },
    {
        type: "video",
        src: "/videos/lv_0_20260111233342.mp4",
        poster: "/videos/thumb2.jpg",
    },
    {
        type: "video",
        src: "/videos/lv_0_20250331094146 (1).mp4",
        poster: "/videos/flickr_photo.jpg",
    },
];

const VideoSection = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentVideoIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    const previousVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section id="videos" className="py-20 bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                        VIDEO <span className="text-gradient">GALLERY</span>
                    </h2>
                    <p className="font-body text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A showcase of my motion graphics and video editing work.
                    </p>
                </motion.div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group cursor-pointer rounded-xl overflow-hidden aspect-video shadow-lg bg-card"
                            onClick={() => openLightbox(index)}
                        >
                            {/* Thumbnail Image (Poster) */}
                            <img
                                src={video.poster}
                                alt={`Video thumbnail ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-glow">
                                        <svg
                                            className="w-6 h-6 text-primary-foreground ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium">Watch Video</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Lightbox
                    items={videos}
                    currentIndex={currentVideoIndex}
                    isOpen={lightboxOpen}
                    onClose={closeLightbox}
                    onNext={nextVideo}
                    onPrevious={previousVideo}
                />
            </div>
        </section>
    );
};

export default VideoSection;
