"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-14 sm:py-16 lg:py-20 bg-transparent relative text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365]/80 border border-white/20 shadow-[0_0_15px_rgba(32,91,158,0.2)] backdrop-blur-md shrink-0 mx-auto">
            <Briefcase className="w-4 h-4 text-[#20c9d2] shrink-0" />
            <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
              Careers Section
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-white leading-tight lg:leading-[1.25] tracking-normal">
            Build Your Career With Ocean 9
          </h2>

          {/* Content Description */}
          <p className="font-roboto font-normal text-white text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            We welcome skilled divers, marine crew and technical professionals who value safety, teamwork and quality work.
          </p>

          {/* Action Button - High contrast brand-consistent white pill button */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-4 bg-white hover:bg-slate-100 text-[#002365] pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.25)] group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-[14px] leading-[22px] tracking-normal text-[#002365] whitespace-nowrap">
                View Careers
              </span>
              <div className="w-[36px] h-[36px] rounded-full bg-[#002365] flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
