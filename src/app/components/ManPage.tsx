"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManPage() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/backgroundImg.png')" }} // ganti dengan background asli
    >
      {/* Overlay transparan */}
      <div className="bg-[rgba(255,255,255,0.6)] w-full h-full flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center justify-between p-8 md:p-16 gap-14 md:gap-24">
          
          {/* Bagian Kiri: Gambar Bulat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Image
              src="/ManAvatar.png"
              alt="George Michael Anderson"
              width={320}
              height={320}
              className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
            />
          </motion.div>

          {/* Bagian Kanan: Nama dan Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-xl text-center md:text-left text-gray-900"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              George Michael Anderson
            </h1>
            <p className="text-base md:text-xl leading-relaxed">
              The beloved son of Mr. Jonathan Anderson and Mrs. Rebecca Anderson.{" "}
              George is known for his kind heart, warm smile, and his deep love
              for life’s simple joys.
              <span className="hidden md:inline">
                {" "}
                His journey led him to many beautiful places, but none as
                meaningful as the moment he met Carmen — the one who turned every
                ordinary day into something extraordinary.
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
