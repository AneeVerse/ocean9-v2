"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, X } from "lucide-react";

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Diver Image (Matches Right Column Height) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start h-full">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl w-full max-w-[424px] h-[380px] sm:h-[450px] lg:h-full min-h-[440px]">
              <Image
                src="/images/home-about-us2.png"
                alt="Underwater Operations & Marine Engineering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copy & Video / Contact CTA */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag / Badge: About Ocean 9 */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="-2 -2 28 28"
                fill="#20c9d2"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 overflow-visible"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="font-roboto font-normal text-white text-[14px] tracking-normal">About Ocean 9</span>
            </div>

            {/* Heading: Exactly 2 lines */}
            <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal">
              Your Partner for Underwater <br className="hidden sm:inline" />
              Operations
            </h2>

            {/* Paragraph 1 */}
            <p className="font-roboto font-normal text-white text-xs sm:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed tracking-normal max-w-none lg:whitespace-nowrap">
              Ocean 9 Offshore Services Pvt. Ltd. provides underwater diving, marine and subsea engineering services.
            </p>

            {/* Paragraph 2 */}
            <p className="font-roboto font-normal text-white/95 text-sm sm:text-base leading-relaxed tracking-normal max-w-2xl">
              We support offshore and onshore projects with trained teams, diving equipment and marine support. Our focus is simple: complete every job safely, properly and on time.
            </p>

            {/* Company Profile Description */}
            <p className="font-roboto font-normal text-white/95 text-sm sm:text-base leading-relaxed tracking-normal max-w-2xl">
              Ocean 9’s company profile describes the business as an underwater diving and subsea engineering service provider with diving personnel, equipment and vessel support.
            </p>

            {/* Video Thumbnail + About Ocean 9 Button Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-6 sm:gap-8 pt-3">
              {/* Video Thumbnail Card */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                type="button"
                className="relative w-full sm:w-[405px] max-w-[405px] h-[120px] sm:h-[136px] lg:h-[146px] rounded-2xl overflow-hidden group shadow-lg shrink-0 text-left cursor-pointer focus:outline-none"
              >
                <Image
                  src="/images/home-commerical-air-diving-operations.png"
                  alt="About Ocean 9 Video Preview"
                  fill
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </button>

              {/* About Ocean 9 Button */}
              <Link
                href="#about"
                className="inline-flex items-center justify-between gap-4 min-w-[200px] h-[55px] bg-white hover:bg-slate-100 pl-6 pr-1.5 rounded-full transition-all duration-300 shadow-xl group transform hover:scale-[1.02] cursor-pointer shrink-0"
              >
                <span className="font-dm-sans font-medium text-[#002365] text-[15px] leading-[30px] tracking-normal whitespace-nowrap">About Ocean 9</span>
                <div className="w-[43px] h-[43px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid: Poppins Regular, numbers 73.6px, symbols (+) & (T) 65.6px */}
        <div className="mt-10 sm:mt-14 pt-0 grid grid-cols-2 md:grid-cols-4 gap-[20px] text-center">
          <div className="space-y-1">
            <p className="font-poppins font-normal text-white text-4xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal">
              38<span className="font-poppins font-normal text-[#0088ff] text-3xl sm:text-4xl lg:text-[65.6px] leading-[85.28px] tracking-normal">+</span>
            </p>
            <p className="font-roboto font-normal text-xs sm:text-sm text-white/90">Project Assignments</p>
          </div>
          <div className="space-y-1">
            <p className="font-poppins font-normal text-white text-4xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal">
              14<span className="font-poppins font-normal text-[#0088ff] text-3xl sm:text-4xl lg:text-[65.6px] leading-[85.28px] tracking-normal">+</span>
            </p>
            <p className="font-roboto font-normal text-xs sm:text-sm text-white/90">Clients Served</p>
          </div>
          <div className="space-y-1">
            <p className="font-poppins font-normal text-white text-4xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal">
              6<span className="font-poppins font-normal text-[#0088ff] text-3xl sm:text-4xl lg:text-[65.6px] leading-[85.28px] tracking-normal">+</span>
            </p>
            <p className="font-roboto font-normal text-xs sm:text-sm text-white/90">Years of Experience</p>
          </div>
          <div className="space-y-1">
            <p className="font-poppins font-normal text-white text-4xl sm:text-5xl lg:text-[73.6px] leading-tight tracking-normal">
              247<span className="font-poppins font-normal text-[#0088ff] text-3xl sm:text-4xl lg:text-[65.6px] leading-[85.28px] tracking-normal">T</span>
            </p>
            <p className="font-roboto font-normal text-xs sm:text-sm text-white/90">Caisson Gate Salvaged</p>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#001947] rounded-2xl overflow-hidden border border-cyan-500/30 p-8 sm:p-12 text-center shadow-2xl space-y-4"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              type="button"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-cyan-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 mx-auto flex items-center justify-center text-cyan-400">
              <Play className="w-7 h-7 ml-0.5 opacity-50" />
            </div>

            <div className="space-y-1">
              <h3 className="font-poppins font-semibold text-white text-xl sm:text-2xl">
                No Video
              </h3>
              <p className="font-roboto text-slate-300 text-sm">
                Video preview is currently unavailable.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
