"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/" || pathname === "") {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", `/#${targetId}`);
        }, 60);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }, 60);
    }
  };

  const navLinks = [
    { label: "Home", href: "/", isAnchor: false, targetId: "" },
    { label: "About Us", href: "/#about", isAnchor: true, targetId: "about" },
    { label: "Service", href: "/#services", isAnchor: true, targetId: "services" },
    { label: "Projects", href: "/#projects", isAnchor: true, targetId: "projects" },
    { label: "Gallery", href: "/gallery", isAnchor: false, targetId: "" },
    { label: "HSE", href: "/hse", isAnchor: false, targetId: "" },
    { label: "ISO Certificate", href: "/iso", isAnchor: false, targetId: "" },
    { label: "MSME", href: "/msme", isAnchor: false, targetId: "" },
    { label: "Equipment", href: "/equipment", isAnchor: false, targetId: "" },
  ];

  return (
    <>
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
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-1.5 sm:gap-2 group"
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
            <div className="flex flex-col justify-center">
              <span
                className={`font-bold tracking-tight leading-none transition-all duration-500 ease-in-out select-none flex items-center ${
                  isScrolled
                    ? "text-2xl sm:text-3xl"
                    : "text-3xl sm:text-4xl lg:text-[40px]"
                }`}
              >
                <span className="text-white drop-shadow-md">Ocean</span>
                <span className="text-[#ba1319] drop-shadow-md">9</span>
              </span>
              <span
                className={`font-medium tracking-[0.03em] sm:tracking-[0.05em] text-white/90 drop-shadow-md transition-all duration-500 ease-in-out select-none whitespace-nowrap ${
                  isScrolled
                    ? "text-[7px] sm:text-[8.5px] lg:text-[9.5px] mt-0.5"
                    : "text-[8px] sm:text-[10px] lg:text-[11.5px] mt-0.5 sm:mt-1"
                }`}
              >
                Offshore Services Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-[10px] lg:gap-[16px] xl:gap-[22px]">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal text-white hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
            >
              About Us
            </Link>
            <Link
              href="/#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
            >
              Service
            </Link>
            <Link
              href="/#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className="font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal text-white/90 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md"
            >
              Gallery
            </Link>
            <Link
              href="/hse"
              className={`font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal transition-colors duration-300 drop-shadow-md ${
                pathname === "/hse" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
              }`}
            >
              HSE
            </Link>
            <Link
              href="/iso"
              className={`font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal transition-colors duration-300 drop-shadow-md whitespace-nowrap ${
                pathname === "/iso" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
              }`}
            >
              ISO Certificate
            </Link>
            <Link
              href="/msme"
              className={`font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal transition-colors duration-300 drop-shadow-md whitespace-nowrap ${
                pathname === "/msme" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
              }`}
            >
              MSME
            </Link>
            <Link
              href="/equipment"
              className={`font-semibold text-[13.5px] lg:text-[15px] xl:text-[16px] leading-[22px] tracking-normal transition-colors duration-300 drop-shadow-md ${
                pathname === "/equipment" ? "text-cyan-300 font-bold" : "text-white/90 hover:text-cyan-300"
              }`}
            >
              Equipment
            </Link>
          </nav>

          {/* Contact Us Navbar Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center justify-center h-[44px] px-6 bg-[#003D82] hover:bg-[#0055ff] text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-white hover:text-cyan-300 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Menu (Mounted via Portal) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-0 z-[9999] md:hidden bg-gradient-to-b from-[#000d28] via-[#001438] to-[#000b20] text-white flex flex-col h-[100dvh] w-full overflow-hidden animate-in fade-in duration-200"
          >
            {/* Ambient Oceanic Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-16 left-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar with Logo and Close Button */}
            <div className="relative z-10 px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between border-b border-white/10 shrink-0">
              <Link
                href="/"
                onClick={handleHomeClick}
                className="flex items-center gap-1.5 sm:gap-2 group"
              >
                <div className="relative w-8 sm:w-10 h-8 sm:h-10 shrink-0">
                  <Image
                    src="/assets/ocean9-logo.png"
                    alt="Ocean 9 Logo"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold tracking-tight text-2xl sm:text-3xl leading-none flex items-center">
                    <span className="text-white drop-shadow-md">Ocean</span>
                    <span className="text-[#ba1319] drop-shadow-md">9</span>
                  </span>
                  <span className="text-[7.5px] sm:text-[9px] font-medium tracking-[0.03em] sm:tracking-[0.05em] text-white/90 drop-shadow-md select-none whitespace-nowrap mt-0.5">
                    Offshore Services Pvt. Ltd.
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white hover:text-cyan-300 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="relative z-10 flex-1 overflow-y-auto scrollbar-none px-6 py-6 flex flex-col justify-between">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : link.isAnchor
                      ? false
                      : pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "/") {
                          handleHomeClick(e);
                        } else if (link.isAnchor) {
                          handleNavClick(e, link.targetId);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`group flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-cyan-300 font-bold bg-cyan-400/10"
                          : "text-white/90 hover:text-white hover:bg-white/5 font-medium"
                      }`}
                    >
                      <span className="font-poppins text-lg sm:text-xl tracking-tight">
                        {link.label}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-cyan-300 translate-x-1"
                            : "text-slate-500 opacity-60 group-hover:opacity-100 group-hover:text-cyan-300 group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Actions & Contact Details */}
              <div className="pt-6 pb-2 space-y-4 border-t border-white/10 shrink-0">
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="inline-flex items-center justify-center w-full h-12 bg-[#003D82] hover:bg-[#0055ff] active:scale-[0.98] text-white font-poppins font-bold text-xs tracking-wider uppercase px-6 rounded-full shadow-lg shadow-[#003D82]/40 transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
