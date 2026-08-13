"use client";

import Link from "next/link";
import {
  KeyRound,
  Network,
  Anchor,
  Flame,
  LifeBuoy,
  Droplets,
  Compass,
  Bot,
  Building2,
  UserCheck,
  ArrowUpRight,
  Plus,
} from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      title: "Underwater inspection and repair",
      icon: KeyRound,
    },
    {
      id: "02",
      title: "Pipeline and cable work",
      icon: Network,
    },
    {
      id: "03",
      title: "Hull and dock services",
      icon: Anchor,
    },
    {
      id: "04",
      title: "Underwater cutting and welding",
      icon: Flame,
    },
    {
      id: "05",
      title: "Salvage and recovery",
      icon: LifeBuoy,
    },
    {
      id: "06",
      title: "Desilting and cleaning",
      icon: Droplets,
    },
    {
      id: "07",
      title: "Marine surveys",
      icon: Compass,
    },
    {
      id: "08",
      title: "ROV support",
      icon: Bot,
    },
    {
      id: "09",
      title: "Offshore construction support",
      icon: Building2,
    },
    {
      id: "10",
      title: "Diving personnel and equipment supply",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative z-40 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Left: Badge, Heading, Subtitle */}
          <div className="space-y-3 max-w-3xl">
            {/* Section Tag / Badge */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#001742] text-white shadow-xs shrink-0 w-fit">
              <Plus className="w-4 h-4 text-cyan-400 stroke-[3]" />
              <span className="font-roboto font-semibold text-[14px] tracking-normal text-white">
                Our Capabilities
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#001742] leading-[1.15] tracking-tight">
              Built for Challenging Projects
            </h2>

            {/* Subtitle */}
            <p className="font-roboto text-slate-500 text-sm sm:text-base leading-relaxed">
              Our teams support a wide range of underwater and marine operations, including:
            </p>
          </div>

          {/* Right: View/Explore Button */}
          <div className="shrink-0 self-start md:self-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-[#001742] hover:bg-[#001e54] text-white pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer transform hover:scale-[1.02]"
            >
              <span className="font-dm-sans font-semibold text-sm leading-none text-white whitespace-nowrap">
                Explore Our Capabilities
              </span>
              <div className="w-8 h-8 rounded-full bg-white text-[#001742] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>

        {/* 10 Clean White Cards Grid (5 cols x 2 rows - Exact match with reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-white border-2 border-[#1e66f5]/25 hover:border-[#1e66f5] rounded-[20px] p-5 sm:p-6 text-left flex flex-col justify-between shadow-[0_4px_20px_rgba(30,102,245,0.08)] hover:shadow-[0_12px_30px_rgba(30,102,245,0.2)] hover:-translate-y-1.5 transition-all duration-300 min-h-[235px] sm:min-h-[245px]"
              >
                {/* Top Left: Number + Underline */}
                <div className="flex flex-col items-start relative z-10">
                  <span className="font-poppins font-bold text-sm text-[#002365] tracking-tight">
                    {item.id}
                  </span>
                  <div className="w-5 h-[2px] bg-[#20c9d2] mt-1 rounded-full group-hover:w-8 group-hover:bg-[#1e66f5] transition-all duration-300" />
                </div>

                {/* Center: Large Soft Circular Icon Badge */}
                <div className="my-3 flex items-center justify-center relative z-10">
                  <div className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#002365]/5 border border-[#002365]/10 text-[#002365] group-hover:bg-[#002365] group-hover:border-[#002365] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs">
                    <Icon className="w-7 h-7 stroke-[1.8] text-[#002365] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Bottom Left: Capability Title */}
                <div className="relative z-10">
                  <h3 className="font-poppins font-bold text-sm sm:text-[15px] text-[#002365] leading-[1.35] max-w-[92%]">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Right: Vibrant Web Color Dot */}
                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#20c9d2] group-hover:bg-[#1e66f5] group-hover:scale-125 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom Wave Divider (Exact match with reference image) */}
        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-4 max-w-xl mx-auto">
          <div className="h-[1px] bg-slate-200/80 flex-1" />
          <div className="text-[#1e66f5] opacity-80">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4C5 1 9 1 12 4C15 7 19 7 22 4C25 1 29 1 32 4C35 7 38 7 40 5" stroke="#1e66f5" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 8C5 5 9 5 12 8C15 11 19 11 22 8C25 5 29 5 32 8C35 11 38 11 40 9" stroke="#1e66f5" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 12C5 9 9 9 12 12C15 15 19 15 22 12C25 9 29 9 32 12C35 15 38 15 40 13" stroke="#1e66f5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="h-[1px] bg-slate-200/80 flex-1" />
        </div>
      </div>
    </section>
  );
}





