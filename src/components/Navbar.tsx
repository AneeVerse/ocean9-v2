"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/" || pathname === "") {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `/?preview=true#${targetId}`);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/?preview=true");
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-none ${
        isScrolled
          ? "py-2 sm:py-2.5 bg-[#00173e]/30 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "py-4 sm:py-5 bg-gradient-to-b from-[#020917]/80 via-[#020917]/30 to-transparent shadow-none"
      }`}
    >
      <div
        className={`relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        }`}
      >
        {/* Ocean 9 Logo */}
        <Link
          href="/?preview=true"
          onClick={handleHomeClick}
          className="flex items-center gap-1 sm:gap-1.5 group"
        >
          <div
            className={`relative transition-all duration-500 ease-in-out shrink-0 ${
              isScrolled
                ? "w-8 sm:w-10 h-8 sm:h-10"
                : "w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14"
            }`}
          >
            <Image
              src="/assets/ocean9-logo.png"
              alt="Ocean 9 Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <span
            className={`font-bold tracking-tight leading-none transition-all duration-500 ease-in-out select-none flex items-center ${
              isScrolled
                ? "text-2xl sm:text-3xl"
                : "text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            <span className="text-white drop-shadow-md">Ocean</span>
            <span className="text-[#ba1319] drop-shadow-md">9</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[34px]">
          <Link
            href="/?preview=true"
            onClick={handleHomeClick}
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            Home
          </Link>
          <Link
            href="/?preview=true#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            About Us
          </Link>
          <Link
            href="/?preview=true#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            Service
          </Link>
          <Link
            href="/?preview=true#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            Projects
          </Link>
          <Link
            href="/gallery?preview=true"
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            Gallery
          </Link>
          <Link
            href="/?preview=true#hse"
            onClick={(e) => handleNavClick(e, "hse")}
            className="font-semibold text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
          >
            HSE
          </Link>
          <Link
            href="/equipment?preview=true"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-300 drop-shadow-md ${
              pathname === "/equipment" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
            }`}
          >
            Equipment
          </Link>
        </nav>

        {/* Contact Us Navbar Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/?preview=true#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center h-[44px] px-6 bg-[#003D82] hover:bg-[#0055ff] text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02]"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-cyan-300 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 my-2 p-6 space-y-4 rounded-[20px] bg-[#00173e]/40 backdrop-blur-xl border border-white/15 shadow-2xl text-white">
          <Link
            href="/?preview=true"
            onClick={handleHomeClick}
            className="block font-semibold text-[16px] py-1.5 text-cyan-300"
          >
            Home
          </Link>
          <Link
            href="/?preview=true#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="block text-[16px] py-1.5 text-white/90 hover:text-cyan-300"
          >
            About Us
          </Link>
          <Link
            href="/?preview=true#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="block text-[16px] py-1.5 text-white/90 hover:text-cyan-300"
          >
            Service
          </Link>
          <Link
            href="/?preview=true#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="block text-[16px] py-1.5 text-white/90 hover:text-cyan-300"
          >
            Projects
          </Link>
          <Link
            href="/gallery?preview=true"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 text-white/90 hover:text-cyan-300"
          >
            Gallery
          </Link>
          <Link
            href="/?preview=true#hse"
            onClick={(e) => handleNavClick(e, "hse")}
            className="block text-[16px] py-1.5 text-white/90 hover:text-cyan-300"
          >
            HSE
          </Link>
          <Link
            href="/equipment?preview=true"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-[16px] py-1.5 transition-colors ${
              pathname === "/equipment" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
            }`}
          >
            Equipment
          </Link>
          <div className="pt-2">
            <Link
              href="/?preview=true#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center justify-center w-full h-[44px] bg-[#003D82] hover:bg-[#0055ff] text-white font-bold text-xs tracking-wider uppercase px-6 rounded-full shadow-md transition-all duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
