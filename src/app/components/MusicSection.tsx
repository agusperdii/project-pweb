"use client";

import { useState, useRef } from "react";

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section
        id="music"
      >
        <audio ref={audioRef} src="/videoplayback.mp4" loop />
      </section>
  
      {/* Tombol Play/Pause fixed */}
      <button
        onClick={toggleAudio}
        className="
          fixed bottom-3 right-0
          w-14 h-12 flex items-center justify-center
          rounded-l-full
          bg-[hsla(0,0%,80%,0.5)] text-white
          backdrop-blur-md
          border border-white/20
          shadow-lg
          hover:bg-black/60
          transition-all duration-300
        "
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </>
  );
}