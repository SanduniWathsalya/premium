"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Search } from 'lucide-react'; 

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 0);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const showText = scrollDirection === "up" || !scrolled;

  return (
    <section
      className="relative w-full h-[110vh] flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-700"
      style={{
        backgroundImage: scrolled
          ? "url('/images/hero4.jpeg')"
          : "url('/images/hero.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

      {/* Text Content */}
      <div
        className={clsx(
          "relative z-10 text-center text-white px-4 transition-all duration-700 ease-in-out",
          showText
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <h2 className="text-xl md:text-2xl font-light mb-2">Welcome to</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Premium Gallery
        </h1>
        <p className="text-lg md:text-xl mb-6 mx-auto whitespace-nowrap">
  Discover exclusive fashion collections that redefine luxury and style.
</p>


     <div className="relative inline-block group">
      {/* Animated rainbow border */}
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 
                      animate-spin-slow opacity-80 blur-sm"></div>

      {/* Inner button with icon */}
      <button
  onClick={() => {
    const target = document.getElementById("featured");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold 
             flex items-center gap-2 transform transition-transform duration-300 group-hover:scale-120"
>
  <Search className="w-5 h-5" />
  Explore Now
</button>

    </div>


      </div>
    </section>
  );
}
