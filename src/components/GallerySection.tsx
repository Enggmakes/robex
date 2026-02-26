import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, X } from "lucide-react";

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // To show your photos or videos, place them in the 'public/gallery/' folder
  // and add their filenames to this list.
  const galleryItems = [
    { id: 1, url: "/gallery/1.jpeg" },
    { id: 2, url: "/gallery/2.jpeg" },
    { id: 3, url: "/gallery/video.mp4" },  // Replaced #3 with the video file
    { id: 4, url: "/gallery/3.jpeg" },
    { id: 5, url: "/gallery/4.jpeg" },
    { id: 6, url: "/gallery/5.jpeg" } // Added Picture1 back
  ];

  const isVideo = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i) !== null;
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Media</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Visual documentation of ROBEX development, testing, and demonstrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "row-span-2 md:row-span-2" : ""
                }`}
              onClick={() => setSelectedMedia(item.url)}
            >
              <div className={`flex items-center justify-center bg-secondary/30 relative overflow-hidden ${i === 0 ? "h-full min-h-[300px]" : "aspect-square"
                } group-hover:bg-secondary/50 transition-colors duration-500`}>

                {isVideo(item.url) ? (
                  <video
                    src={item.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={`Gallery asset ${item.id}`}
                    onError={(e) => {
                      // Fallback to placeholder if the image file isn't found in the public folder
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      e.currentTarget.nextElementSibling?.classList.add('flex');
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Fallback Placeholder (Hidden by default, shown if image fails to load) */}
                <div className="hidden absolute inset-0 z-10 flex-col items-center justify-center p-4">
                  <ImageIcon className="w-10 h-10 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground/60 text-center">Missing Media</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 p-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors z-50 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking the media from closing it
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center bg-transparent"
            >
              {isVideo(selectedMedia) ? (
                <video
                  src={selectedMedia}
                  autoPlay
                  controls
                  className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                />
              ) : (
                <img
                  src={selectedMedia}
                  alt="Expanded gallery media"
                  className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
