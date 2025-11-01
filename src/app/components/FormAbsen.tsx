"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FormAbsen() {
  const [kehadiran, setKehadiran] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen flex justify-center items-center py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="w-full md:max-w-3xl md:bg-white dark:md:bg-gray-800 md:rounded-3xl md:shadow md:p-10 md:border md:border-gray-200 dark:md:border-gray-700 p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Isi Kehadiran Anda
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 focus:outline-none focus:ring focus:ring-gray-300 dark:bg-gray-700 dark:text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 focus:outline-none focus:ring focus:ring-gray-300 dark:bg-gray-700 dark:text-white"
          />

          <textarea
            placeholder="Ucapan untuk pengantin..."
            rows="4"
            className="w-full rounded-2xl border border-gray-300 dark:border-gray-600 px-6 py-3 focus:outline-none focus:ring focus:ring-gray-300 dark:bg-gray-700 dark:text-white"
          ></textarea>

          <div className="text-center text-gray-700 dark:text-gray-300 font-medium">
            Apakah Anda akan hadir di acara pernikahan kami?
          </div>

          <div className="flex justify-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setKehadiran("ya")}
              className={`px-8 py-2 rounded-full border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 
              hover:bg-gray-200 dark:hover:bg-gray-600 ${
                kehadiran === "ya"
                  ? "bg-green-500 text-white dark:bg-green-600"
                  : ""
              }`}
            >
              Ya
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setKehadiran("tidak")}
              className={`px-8 py-2 rounded-full border border-gray-400 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 
              hover:bg-gray-200 dark:hover:bg-gray-600 ${
                kehadiran === "tidak"
                  ? "bg-red-500 text-white dark:bg-red-600"
                  : ""
              }`}
            >
              Tidak
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 rounded-full font-semibold"
          >
            Kirim
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
