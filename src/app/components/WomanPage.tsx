"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WomanPage() {
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
              src="/WomanIcon.png"
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
                Carmen Olivia Rodriguez
                </h1>
                <p className="text-base md:text-xl leading-relaxed">
                The cherished daughter of Mr. Alejandro Rodriguez and Mrs. Isabella Rodriguez.
                Carmen is graceful, thoughtful, and full of laughter that brightens every room
                she enters.
                <span className="hidden md:inline">
                    {" "}
                    Her love story with George began as a simple connection, and soon blossomed
                    into a promise — one they now choose to celebrate in front of those they
                    love most.
                </span>
                </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
