"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/" || pathname === "") {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  return (
    <footer className="bg-transparent text-white pt-16 sm:pt-20 pb-12 sm:pb-16 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-5 sm:gap-x-8 lg:gap-8 pb-14 border-b border-white/15">
          {/* Brand Info & Contact Details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-5 space-y-5">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="inline-flex items-center gap-1 sm:gap-1.5 group mb-2"
            >
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
              Ocean 9 Offshore Services Pvt. Ltd. provides safe and practical solutions for diving, subsea, marine and underwater projects.
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
                <span>Mobile: +91 9320168056 / 9022433033</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Column 1 on mobile */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-poppins text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight drop-shadow-md">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 font-semibold drop-shadow-sm">
              <li>
                <Link
                  href="/"
                  onClick={handleHomeClick}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore / Additional Links - Column 2 on mobile (where Main Services was) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="font-poppins text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight drop-shadow-md">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/95 font-semibold drop-shadow-sm">
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Footer Info Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/90 font-medium drop-shadow-sm">
          {/* Left: Website Copyright */}
          <div className="text-center md:text-left">
            © 2026 Ocean 9 Offshore Services Pvt. Ltd. All rights reserved.
          </div>

          {/* Middle: HSE & ISO Certificate */}
          <div className="flex items-center gap-6">
            <Link href="/hse" className="hover:text-cyan-300 transition-colors">
              HSE
            </Link>
            <Link href="/iso" className="hover:text-cyan-300 transition-colors">
              ISO Certificate
            </Link>
          </div>

          {/* Right: Aneeverse Branding & Logo */}
          <a
            href="https://www.aneeverse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 shrink-0 pr-0 sm:pr-16 md:pr-20 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <span>Designed & Managed by Aneeverse</span>
            <img
              src="/assets/aneeverse-logo.png"
              alt="Aneeverse Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 group-hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
