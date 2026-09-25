"use client"

import { useState } from "react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
<nav className="relative flex items-center justify-between bg-white px-12 py-8 text-black">
<p className="text-3xl font-semibold text-[#4a3b2a]">Alma Verde</p>
    <div className="hidden md:flex items-center gap-6">
<a
  href="#"
  className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Interior</a>
 <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Suculentas</a>
  <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Plantas con flores</a>
  <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Aromáticas</a>
  <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Exterior</a>
  <span>ES / EN</span>
</div>

{menuOpen && (
<div className="absolute top-full left-0 z-50 flex w-full flex-col gap-4 bg-white p-6 shadow-md">                
    <a href="/alojamientos" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Interior</a>
    <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Suculentas</a>
    <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Plantas con flores</a>
    <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Aromáticas</a>
    <a href="#" className="text-lg font-semibold text-[#5a4a3a] transition-colors my-hover:text-[#58734a]">Exterior</a>
    <span>ES / EN</span>
  </div>
  )}
<button
className="text-2xl text-black md:hidden"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? "✕" : "☰"}

    </button>
</nav>
  );
}