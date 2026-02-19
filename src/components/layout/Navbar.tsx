"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


const [theme, setTheme] = useState("dark");

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
}, []);

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
};

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b-0">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
  <Link href="/" className="flex items-center gap-2">
  <Image
  src="/Logo.png"
  alt="Ethos Logo"
  width={100}
  height={100}
  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
/>

  <span className="text-xl font-semibold tracking-wider">
  The Ethos Collective
  </span>
</Link>


  {/* Desktop Menu */}
 <div className="hidden md:flex gap-8 text-sm text-foreground/80 items-center">
    <Link href="/about" className="hover:text-primary transition">
      About
    </Link>
    <Link href="#" className="hover:text-primary transition">
      Projects
    </Link>
    <Link href="/team" className="hover:text-primary transition">
      Team
    </Link>
    <Link href="#" className="hover:text-primary transition">
      Contact
    </Link>

    {/* Theme Toggle */}
    <button
  onClick={toggleTheme}
  className="p-2 rounded-xl hover:bg-primary/20 transition text-foreground hover:text-primary"
>
  {theme === "dark" ? (
    <Sun size={20} />
  ) : (
    <Moon size={20} />
  )}
</button>

  </div>

  {/* Mobile Right Side */}
  <div className="flex items-center gap-3 md:hidden">
    <button
  onClick={toggleTheme}
  className="p-2 rounded-xl hover:bg-primary/20 transition text-foreground hover:text-primary"
>
  {theme === "dark" ? (
    <Moon size={20} />
  ) : (
    <Sun size={20} />
  )}
</button>


    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-2xl"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  </div>
</div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
<div className="flex flex-col gap-4 px-6 py-4 bg-background border-y border-foreground/15 text-foreground/80">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/team" onClick={() => setIsOpen(false)}>
            Team
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      
      </div>
    </nav>
  );
}
