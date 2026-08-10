"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Smartphone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/15">
          {/* Brand Info & Contact Details */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-1 sm:gap-1.5 group mb-2">
              <div className="relative w-10 sm:w-14 h-10 sm:h-14 shrink-0">
                <Image
                  src="/assets/ocean9-logo.png"
                  alt="Ocean 9 Logo"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-none drop-shadow-md select-none flex items-center">
                <span className="text-[#034d8c]">Ocean</span>
                <span className="text-[#ba1319]">9</span>
              </span>
            </Link>

            <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed max-w-sm drop-shadow-md font-medium">
              Ocean 9 Offshore Services Pvt. Ltd. provides underwater diving, marine and subsea engineering services for offshore and onshore projects.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm font-semibold text-white drop-shadow-sm">
              <div className="flex items-start gap-3 hover:text-cyan-300 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Office: Seawoods, Nerul, Navi Mumbai</span>
              </div>
              <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@ocean9offshoreservices.com" className="hover:underline">
                  info@ocean9offshoreservices.com
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Phone: 022-27701886</span>
              </div>
              <div className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
                <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mobile: +91 9320168056</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-poppins text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 font-semibold drop-shadow-sm">
              <li>
                <Link href="#" className="hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-cyan-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-cyan-300 transition-colors">
                  HSE
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-300 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-poppins text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
              Main Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 font-semibold drop-shadow-sm">
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Air Diving
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Mixed Gas Diving
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Saturation Diving
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Offshore Operations
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Marine Survey
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-300 transition-colors">
                  Underwater Cutting and Welding
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-poppins text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md">
              Newsletter
            </h4>

            {/* Email Input Field */}
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full pt-1">
              <div className="relative border-b border-white/60 pb-2.5 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full bg-transparent text-white text-xs sm:text-sm placeholder:text-slate-300 focus:outline-none pr-8 font-medium"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-white hover:text-cyan-300 transition-colors shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            <p className="text-white/90 text-xs sm:text-sm leading-relaxed drop-shadow-md font-medium">
              Stay updated on subsea projects, diving operations and ocean engineering developments — join our newsletter.
            </p>

            {/* Social Links - Pure Icons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-cyan-300 transition-colors drop-shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-cyan-300 transition-colors drop-shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="text-white hover:text-cyan-300 transition-colors drop-shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Footer Info Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/90 font-medium drop-shadow-sm">
          {/* Left: Website Copyright */}
          <div className="text-center md:text-left">
            © 2026 Ocean 9 Offshore Services Pvt. Ltd. All rights reserved.
          </div>

          {/* Middle: Terms & Privacy */}
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-cyan-300 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-cyan-300 transition-colors">
              Privacy
            </Link>
          </div>

          {/* Right: Aneeverse Branding & Logo */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span>Designed & Managed by Aneeverse</span>
            <img
              src="/assets/aneeverse-logo.png"
              alt="Aneeverse Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
