"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", icon: "/HomeIcon.png" },
    { name: "Maps", icon: "/MapIcon.png" },
    { name: "Presence", icon: "/AttIcon.png" },
    { name: "Gallery", icon: "/GalleryIcon.png" },
  ];

  return (
    <>
      {/* Top Header untuk layar medium ke atas */}
      <header
        className={`hidden md:flex fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 z-0 text-black
          ${
            isScrolled
              ? "px-6 py-4 top-8 w-full max-w-[800px] bg-[hsla(0,0%,60%,0.30)] backdrop-blur-md rounded-2xl shadow-lg"
              : "w-full max-w-[1440px] px-10 py-8 top-0 bg-transparent"
          }
          `}
      >
        <div className="flex justify-between items-center w-full">
          <Image src="/logoww.svg" alt="Logo" width={72} height={40} />
          <nav className="flex space-x-4 text-md font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="relative px-[1.5rem] py-[0.5rem] transition-all duration-300 rounded-xl 
                           hover:bg-[hsla(0,0%,100%,0.15)] hover:backdrop-blur-sm flex items-center space-x-2"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Bottom Bar untuk layar kecil (hanya icon) */}
      <nav className="md:hidden rounded-2xl z-1 fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-3rem)] bg-[hsla(0,0%,100%,0.30)] backdrop-blur-md shadow-inner py-2 flex justify-around items-center text-black">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="flex flex-col items-center justify-center space-y-1 px-4 py-1 text-[9px]"
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <span className="hidden">{item.name}</span> {/* teks disembunyikan */}
          </button>
        ))}
      </nav>
    </>
  );
}
