import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-2.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-3.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-4.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-5.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-6.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-7.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-8.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-9.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-10.jpeg",
  "https://adarshjcollege.com/wp-content/uploads/2022/11/Vgg1-1.jpeg",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="w-full flex flex-col min-h-screen pt-[104px] bg-background">
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Campus Gallery</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Glimpses of campus life, infrastructure, and events at Adarsh Junior College.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-muted"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Campus View ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Enlarged campus view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}