"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EventMap() {
  // Membuat file .ics (invite calendar)
  const handleAddToCalendar = () => {
    const event = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://www.google.com/maps/place/The+Ritz-Carlton,+Toronto
DTSTART:20250614T160000Z
DTEND:20250614T200000Z
SUMMARY:George & Carmen's Wedding Day
DESCRIPTION:With hearts full of love, George and Carmen joyfully invite you to witness the beginning of their forever.
LOCATION:The Ritz-Carlton, Toronto
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "George-Carmen-Wedding.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 px-8 md:px-20 py-16 gap-12">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          The Wedding Day
        </p>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Saturday, June 14<sup>th</sup>, 2025
        </h2>
        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 italic">
          at The Ritz-Carlton, Toronto
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
          With hearts full of love, <span className="font-semibold">George</span> and{" "}
          <span className="font-semibold">Carmen</span> joyfully invite you to
          witness the beginning of their forever.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCalendar}
          className="px-8 py-3 bg-gray-900 text-white rounded-full shadow-md transition font-medium tracking-wide"
        >
          Add to your calendar
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.8269679502027!2d-79.38318432453316!3d43.64344647110256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d8e5a37e97%3A0x730c05e7f89f1ef3!2sThe%20Ritz-Carlton%2C%20Toronto!5e0!3m2!1sen!2sca!4v1730476789412!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center md:text-left mt-5">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=The+Ritz-Carlton+Toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-blue-700 transition font-medium tracking-wide"
            >
              Go to Directions
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
