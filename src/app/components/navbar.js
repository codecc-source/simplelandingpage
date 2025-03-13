"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { Home, User, Mail, ListChecks, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/", icon: <Home size={15} /> },
    { name: "Earth", href: "/earth", icon: <User size={15} /> },
    { name: "Mars", href: "/mars", icon: <ListChecks size={15} /> },
    { name: "Mercury", href: "/mercury", icon: <Mail size={15} /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#1E2761]/30 backdrop-blur-md p-4 flex items-center justify-between z-50 md:hidden transition-all ${
          isScrolled ? "shadow-lg border-b border-[#64FFDA]/40" : ""
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)} className="text-white ml-4">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`fixed text-[1rem] top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#1E2761]/70 border border-[#64FFDA]/40 rounded-full backdrop-blur-md px-1 py-1 shadow-lg hidden md:flex ${
          isScrolled ? "top-2 shadow-xl" : "top-6"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              pathname === link.href
                ? "bg-[#64FFDA]/20 text-white shadow-[0_0_12px_#64FFDA]"
                : "text-gray-300 hover:text-white hover:bg-[#64FFDA]/10"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[4rem] left-4 right-4 w-[90%] bg-[#0A192F]/90 border border-[#64FFDA]/40 rounded-xl shadow-xl p-4 flex flex-col space-y-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                pathname === link.href
                  ? "bg-[#64FFDA]/20 text-white shadow-[0_0_12px_#64FFDA]"
                  : "text-gray-300 hover:text-white hover:bg-[#64FFDA]/10"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
