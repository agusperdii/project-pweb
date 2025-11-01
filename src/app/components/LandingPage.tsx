"use client";

import Image from "next/image";
import { Great_Vibes, Poppins } from "next/font/google";

// Font
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function LandingPage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/anime-style-boy-girl-couple.jpg 2.png"
        alt="Background"
        fill
        priority
        className="object-cover z-2"
      />
       {/* Overlay Hitam Transparan */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Konten di atas gambar */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center text-white px-4 pt-48 md:pt-56 space-y-6 md:space-y-10">
        {/* Judul */}
        <h1
          className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light animate-fadeIn tracking-wider text-shadow`}
        >
          The Wedding of
        </h1>

        {/* Nama Pasangan */}
        <h2
          className={`${greatVibes.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-fadeIn delay-200 tracking-widest text-shadow`}
        >
          George&nbsp;<span className="block sm:inline">&</span>&nbsp;Charmen
        </h2>

        {/* Subtitle */}
        <p
          className={`${poppins.className} text-base sm:text-lg md:text-xl lg:text-2xl animate-fadeIn delay-400 tracking-normal text-shadow`}
        >
          Join us in celebrating our special day!
        </p>
      </div>

      {/* Animasi Fade In + Text Shadow */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }

        /* Text shadow untuk semua teks */
        .text-shadow {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
}
