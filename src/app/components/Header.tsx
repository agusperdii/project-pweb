"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "/HomeIcon.png", id: "landing" },
    { name: "Maps", icon: "/MapIcon.png", id: "event" },
    { name: "Presence", icon: "/AttIcon.png", id: "form" },
    { name: "Gallery", icon: "/GalleryIcon.png", id: "gallery" },
  ];

  // Handle scroll posisi header & scroll spy aktif
  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy: deteksi section yang sedang aktif
      let current = "Home";
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = menuItems[index].name;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll ke section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Header desktop */}
      <header
        className={`hidden md:flex fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 z-50
          ${
            isScrolled
              ? "px-6 py-4 top-6 w-full max-w-[800px] bg-[hsla(0,0%,60%,0.30)] backdrop-blur-md rounded-2xl shadow-lg"
              : "w-full max-w-[1440px] px-10 py-8 top-0 bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center w-full">
          <Image src="/logoww.svg" alt="Logo" width={72} height={40} />
          <nav className="flex space-x-4 text-md font-medium">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-[1.5rem] py-[0.5rem] transition-all duration-300 rounded-xl 
                  flex items-center space-x-2 ${
                    activeSection === item.name
                      ? "bg-[hsla(0,0%,100%,0.25)] backdrop-blur-sm font-semibold"
                      : "hover:bg-[hsla(0,0%,100%,0.15)] hover:backdrop-blur-sm"
                  }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Bottom navigation (mobile) */}
      <nav className="md:hidden rounded-2xl z-1 fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-3rem)] bg-[hsla(0,0%,100%,0.30)] backdrop-blur-md shadow-inner py-2 flex justify-around items-center text-black">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 px-4 py-1 text-[9px] transition-all duration-300
              ${
                activeSection === item.name
                  ? "scale-110 opacity-100"
                  : "opacity-70"
              }`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className={`transition-all ${
                activeSection === item.name ? "opacity-100" : "opacity-60"
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
