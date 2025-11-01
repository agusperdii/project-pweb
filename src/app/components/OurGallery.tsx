"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurGallery() {
  const images = [
    "/gal1.png",
    "/gal2.png",
    "/gal3.png",
    "/gal2.png",
    "/gal3.png",
    "/gal1.png",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="py-16 bg-white dark:bg-gray-900"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Our Wedding Gallery
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          A collection of our favorite moments — the smiles, the laughter, and the love we’ll cherish forever.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-md"
              custom={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-full aspect-[4/5]">
                {/* Wrap Image with <a> agar bisa download */}
                <a href={src} download={`wedding-moment-${index + 1}`}>
                  <Image
                    src={src}
                    alt={`Wedding photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-sm md:text-lg font-medium">
                  {`Moment ${index + 1}`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
